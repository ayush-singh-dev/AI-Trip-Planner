import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebase";
import DetInfoSection from "@/components/DetInfoSection";
import DetHotel from "@/components/DetHotel";
import PlaceToVisit from "@/components/PlaceToVisit";
const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({});
  useEffect(() => {
    tripId && getTripDetails();
  }, [tripId]);
  const getTripDetails = async () => {
    const tripRef = doc(db, "Generate Trip", tripId);
    const tripSnapshot = await getDoc(tripRef);
    if (tripSnapshot.exists()) {
      console.log("Trip data snapshot:", tripSnapshot.data());
      setTrip(tripSnapshot.data());
    } else {
      console.log("No such document!");
    }
  };
  return (
    <div className="  p-10 md:px-17 ">
      <DetInfoSection trip={trip} />
      <DetHotel trip={trip} />
      <PlaceToVisit trip={trip} />
    </div>
  );
};

export default ViewTrip;
