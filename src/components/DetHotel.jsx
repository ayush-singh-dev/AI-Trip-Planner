import React from 'react'
import { Link } from 'react-router-dom';

const DetHotel = ({trip}) => {
  // console.log("trip-hotel: ", trip);
    const hotels = trip.plan?.HotelList;
    console.log("hotels-list: ", hotels);
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-6">
        <span className="text-black">Hotel </span>
        <span className="text-[#59815B]">Recommendations</span>
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {hotels?.map((hotel, index) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${hotel.name}, ${hotel.address}`}
            target="_blank"
            key={index}
            className="block"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.03] w-full h-[450px] flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyaXAlMjBpbWFnZXxlbnwwfHx8fDE2OTI3NTY5NzE&ixlib=rb-4.0.3&q=80&w=1080"
                alt={hotel.name}
                className="w-full h-[250px] object-cover"
              />

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold truncate">
                    {hotel.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    📍 {hotel.address}
                  </p>
                  <p className="text-sm text-gray-800">💰 {hotel.price}</p>
                  <p className="text-sm text-yellow-500">⭐ {hotel.rating}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DetHotel