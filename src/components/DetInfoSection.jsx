import { Share2Icon } from "lucide-react";
// import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const DetInfoSection = ({ trip }) => {
  // console.log("dtrip: ", trip);
  const location = trip.plan?.location;
  console.log("location-detail: ", location);
  const duration = trip.plan?.Days;
  const travelers = trip.plan?.Traveller;
  const budget = trip.plan?.Budget;

// const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=API_KEY&PARAMETERS`+import.meta.env.VITE_API_KEY;

// const [photoUrl, setPhotoUrl] = useState();
//   useEffect(() => {
//     trip && getPlacePhoto();
//   }, [trip]);

//   const getPlacePhoto = async () => {
//     const data = {
//       textQuerry: trip.plan?.location,
//     };
//     const result = await getPlaceDetail(data).then((res) => {
//       console.log("res: ", res.data.places[0].photos[3].name);
//       const photoUrl = PHOTO_REF_URL.replace(
//         "{NAME}",
//         res.data.places[0].photos[3].name
//       ).replace("API_KEY", import.meta.env.VITE_API_KEY);
//       console.log("photoUrl: ", photoUrl);
//       setPhotoUrl(photoUrl);
//     });
//   };

  return (
    <div className=" ">
      <div>
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyaXAlMjBpbWFnZXxlbnwwfHx8fDE2OTI3NTY5NzE&ixlib=rb-4.0.3&q=80&w=1080"
          alt=""
          className="w-full h-[400px] object-cover rounded-xl"
        />
      </div>
      <div className=" py-5">
        <div className="flex justify-between items-center">
          <div className=" flex flex-col gap-2">
            <h1 className="font-bold text-2xl">{location}</h1>
            <div className="flex gap-5 mt-2">
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
                📅{duration} Days
              </h2>
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
                💰{budget} Budget
              </h2>
              <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
                🥂 No of Travelers: {travelers}
              </h2>
            </div>
          </div>

          <Button>
            <Share2Icon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetInfoSection;
