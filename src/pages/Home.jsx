import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";
import AdvnDestination from "@/components/AdvnDestination";
import { useAiContext } from "@/context/AiContext";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/service/firebase";
import SeasonalDestination from "@/components/SeasonalDestination";
import CreateTripCom from "@/components/CreateTripCom";

const Home = () => {
  const [search, setSearch] = useState("");
  const { searchDesination, loading, searchResult } = useAiContext();
  const [travelPlan, setTravelPlan] = useState([]);
  console.log("searchResult DC: ", searchResult);
  const handleSearch = async () => {
    if (search.length > 0) {
      await searchDesination(search);
    }
  };
 

  useEffect(() => {
    if (searchResult && Object.keys(searchResult).length > 0) {
      saveTravelPlan();
    }
  }, [searchResult]);

  const saveTravelPlan = async () => {
    try {
      await addDoc(collection(db, "travelPlans"), {
        searchDesination: search,
        plan: JSON.parse(searchResult),
        createdBy: "user",
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Error saving travel plan: ", error);
    }
  };
  useEffect(() => {
    searchResult && getTravelPlans();
  }, [searchResult]);

  const getTravelPlans = async () => {
    const q = query(
      collection(db, "travelPlans"),
      orderBy("createdAt", "desc") 
    );
   const querySnapshot = await getDocs(q);
    const travelPlans = querySnapshot.docs.map((doc) => doc.data());
    setTravelPlan(travelPlans);
    console.log("travelPlans type: ", typeof travelPlans);
    console.log("travelPlans: ", travelPlans);
  };
  return (
    <div className="px-16">
      <div className=" ">
        <Input
          type={"text"}
          id="search"
          className=" w-70 "
          placeholder="search your travel destination ex. India"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline" onClick={handleSearch} >
           Submit
        </Button>
      </div>
      <div className="">
        <Carousel travelPlan={travelPlan} />
        <AdvnDestination />
        {/* <SeasonalDestination travelPlan={travelPlan} /> */}
        <CreateTripCom/>
      </div>
    </div>
  );
};

export default Home;
