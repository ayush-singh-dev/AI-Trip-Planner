import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";


const CarouselCom = ({travelPlan,loading}) => {
  console.log("CarouselCom travelPlan type: ", typeof travelPlan);
  const lastPlan = travelPlan[0];
  console.log("lastPlan: ", lastPlan);
  const most_liked_locations = lastPlan?.most_liked_locations;
  console.log("most_liked_locations: ", most_liked_locations);
 
  const plugin = React.useRef(
    Autoplay({ delay: 9000, stopOnInteraction: false })
  );
  
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="mt-4 md:mt-8 rounded-2xl  shadow-md relative "
      >
        <CarouselContent>
          {loading
            ? // Show placeholder skeletons while loading
              [...Array(3)].map((_, index) => (
                <CarouselItem key={index} className="relative">
                  <Skeleton className="h-96 w-full rounded-2xl" />
                </CarouselItem>
              ))
            : most_liked_locations?.map((location, index) => (
                <CarouselItem key={index}>
                  <div>
                    <img
                      src={
                        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80"
                      }
                      alt={location.name}
                      className="h-96 w-full object-cover rounded-2xl"
                    />
                    <div className="absolute z-10 top-0 w-full h-full flex flex-col items-center justify-center text-white p-4">
                      <h2 className="text-6xl font-semibold mb-3">
                        {location.name}
                      </h2>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselCom;
