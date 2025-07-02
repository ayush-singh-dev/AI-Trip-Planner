import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/Carousel";
import AdvnDestination from "@/components/AdvnDestination";
import { useAiContext } from "@/context/AiContext";
import SeasonalDestination from "@/components/SeasonalDestination";
import CreateTripCom from "@/components/CreateTripCom";

const Home = () => {
  const [search, setSearch] = useState("");
  const { searchDesination, loading, searchResult } = useAiContext();
  const [travelPlan, setTravelPlan] = useState([]);
  console.log("searchResult homePage: ", searchResult);
  console.log("homepage travel plans::",travelPlan)
  const handleSearch = async () => {
    if (search.length > 0) {
      await searchDesination(search);
    }
  };

  useEffect(() => {
    if (!loading && searchResult) {
      let parsedPlan = searchResult;

      if (typeof searchResult === "string") {
        try {
          parsedPlan = JSON.parse(searchResult);
        } catch (e) {
          console.error("Failed to parse searchResult:", e);
          parsedPlan = {}; // fallback
        }
      }

      setTravelPlan(parsedPlan);
    }
  }, [searchResult]);

  return (
    <div className="px-16">
      <section className=" py-4 flex justify-end ">
        <div className="flex  items-center gap-2 w-full max-w-md p-2 bg-white border rounded-2xl shadow-sm ">
          <Input
            type="text"
            id="search"
            className="flex-1 border-none outline-none text-sm placeholder:text-gray-400"
            placeholder="Search your travel destination e.g. India"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="default"
            className="rounded-xl px-4 py-2 text-sm font-semibold  focus:ring-2 focus:ring-blue-500"
            onClick={handleSearch}
          >
            Submit
          </Button>
        </div>
      </section>

      <div>
        <Carousel travelPlan={travelPlan} loading={loading} />
        <AdvnDestination />
        <SeasonalDestination travelPlan={travelPlan} loading={loading} />
        <CreateTripCom />
      </div>
    </div>
  );
};

export default Home;
