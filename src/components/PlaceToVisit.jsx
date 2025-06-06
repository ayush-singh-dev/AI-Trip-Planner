import React from "react";

const PlaceToVisit = ({ trip }) => {
  console.log("trip-place: ", trip);
  const places = trip.plan?.Itinerary;
  console.log("places: ", places);
  return (
    <div className="mt-10 ">
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-black">Places </span>
        <span className="text-[#59815B]">to Visit</span>
      </h2>

      {places?.map((place, index) => (
        <div key={index} className="mb-10">
          <h3 className="font-semibold text-xl mb-2">
            <span className="text-black">Day </span>
            <span className="text-[#59815B]">{place.day}</span>
          </h3>
          <p className="text-lg font-medium text-gray-800 mb-4">{place.name}</p>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {place.activities.map((activity, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02]"
              >
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyaXAlMjBpbWFnZXxlbnwwfHx8fDE2OTI3NTY5NzE&ixlib=rb-4.0.3&q=80&w=1080"
                  alt={activity.activity}
                  className="w-full h-[250px] object-cover"
                />

                <div className="p-4 space-y-1">
                  <h4 className="text-lg font-semibold text-orange-600">
                    {activity.activity}
                  </h4>
                  <p className="text-sm text-gray-600">
                    📍 {activity.location}
                  </p>
                  <p className="text-sm text-gray-600">⏰ {activity.time}</p>
                  <p className="text-sm text-gray-600">
                    🎟️ {activity.ticketPricing}
                  </p>
                  <p className="text-sm text-gray-600">
                    🕒 Best Time: {activity.bestTimeToVisit}
                  </p>
                  <p className="text-sm text-gray-600">
                    🍴 Food: {activity.food}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceToVisit;
