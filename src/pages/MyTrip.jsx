import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const MyTrip = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const userId = auth?.user?.uid;
  console.log("userId::::: ", userId);
  
  console.log("trips: ", trips);
  console.log("userId: ", userId);

  useEffect(() => {
    if (!userId) return;
    const getTrips = async () => {
      try {
        const q = query(
          collection(db, "Generate Trip"),
          where("createdBy", "==", userId)
        );
        const querySnapshot = await getDocs(q);
        const userTrips = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTrips(userTrips);
      } catch (error) {
        console.error("Error fetching trips: ", error);
      } finally {
        setLoading(false);
      }
    };
    getTrips();
  }, [userId]);

  if (!userId) {
    return <div className="text-center mt-10">🔒 Please log in to view your trips.</div>;
  }

  return (
    <div className=" p-10 md:px-17  mx-auto ">
      <h1 className="text-3xl font-bold mb-10 mt-2 text-center text-gray-800">
        My Trips
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading trips...</p>
      ) : trips.length === 0 ? (
        <p className="text-center text-gray-500">No trips found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {trips.map((trip) => (
            <Link to={"/view-trip/" + trip?.id}>
              <div
                key={trip.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyaXAlMjBpbWFnZXxlbnwwfHx8fDE2OTI3NTY5NzE&ixlib=rb-4.0.3&q=80&w=1080"
                  alt={trip.searchDesination}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-1 capitalize">
                    {trip.searchDesination}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Days:</strong> {trip.plan?.Days}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Budget:</strong> {trip.plan?.Budget}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Travelers:</strong> {trip.plan?.Traveller}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTrip;
