import React from 'react'

const SeasonalDestination = ({ travelPlan }) => {
    const lastPlan = travelPlan[0]?.plan;
    console.log("lastPlan: ", lastPlan);
    const seasonal = lastPlan[0].seasonal_destinations;
    console.log("seasonal: ", seasonal);
   const { summer, winter, monsoon } = seasonal;
    console.log("summer: ", summer);
    console.log("winter: ", winter);
    console.log("monsoon: ", monsoon);
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4  text-center mt-14">
        DESTINATION
      </h2>
      <div>
        <h3 className="text-2xl font-semibold mb-7   mt-10">SUMMER</h3>
        <div className="flex  gap-6">
          {summer?.map((location, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <a
                href="#"
                className="block rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80"
                    alt={location.name}
                  />
                </div>
                <div className="p-4 bg-white text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {location.name}
                  </h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-7   mt-10">WINTER</h3>
        <div className="flex  gap-6">
          {winter?.map((location, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <a
                href="#"
                className="block rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80"
                    alt={location.name}
                  />
                </div>
                <div className="p-4 bg-white text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {location.name}
                  </h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-7   mt-10">Monsoon</h3>
        <div className="flex  gap-6">
          {monsoon?.map((location, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <a
                href="#"
                className="block rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80"
                    alt={location.name}
                  />
                </div>
                <div className="p-4 bg-white text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {location.name}
                  </h2>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalDestination