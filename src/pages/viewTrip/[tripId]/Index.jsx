// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/service/firebase";
// import DetInfoSection from "@/components/DetInfoSection";
// import DetHotel from "@/components/DetHotel";
// import PlaceToVisit from "@/components/PlaceToVisit";
// const ViewTrip = () => {
//   const { tripId } = useParams();
//   console.log("Trip ID from params:", tripId);
//   const [trip, setTrip] = useState({});
//   useEffect(() => {
//     tripId && getTripDetails();
//   }, [tripId]);
//   const getTripDetails = async () => {
//     const tripRef = doc(db, "Generate Trip", tripId);
//     const tripSnapshot = await getDoc(tripRef);
//     if (tripSnapshot.exists()) {
//       console.log("Trip data snapshot:", tripSnapshot.data());
//       setTrip(tripSnapshot.data());
//     } else {
//       console.log("No such document!");
//     }
//   };
//   return (
//     <div className="  p-10 md:px-17 ">
//       <h1 className="text-2xl font-bold">Welcome to the trip!</h1>
//       <DetInfoSection trip={trip} tripid={tripId} />
//       <DetHotel trip={trip} />
//       <PlaceToVisit trip={trip} />
//     </div>
//   );
// };

// export default ViewTrip;
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "@/service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import JoinTripModal from "@/components/JoinTripModal"; // Import it!
import DetInfoSection from "@/components/DetInfoSection";
import DetHotel from "@/components/DetHotel";
import PlaceToVisit from "@/components/PlaceToVisit";

const ViewTrip = () => {
  const { tripId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [trip, setTrip] = useState({});
  const [showJoinModal, setShowJoinModal] = useState(false);
  const isJoinMode = location.pathname.startsWith("/join-trip");

  useEffect(() => {
    if (tripId) getTripDetails();
  }, [tripId]);

  const getTripDetails = async () => {
    const tripRef = doc(db, "Generate Trip", tripId);
    const tripSnapshot = await getDoc(tripRef);

    if (tripSnapshot.exists()) {
      const tripData = tripSnapshot.data();
      setTrip(tripData);

      if (isJoinMode && user) {
        const alreadyJoined = tripData.participants?.some(
          (p) => p.uid === user.uid
        );

        if (!alreadyJoined) {
          // Show join modal instead of auto-adding
          setShowJoinModal(true);
        }
      }
    } else {
      console.log("No such document!");
    }
  };

  const handleJoin = async () => {
    const tripRef = doc(db, "Generate Trip", tripId);

    await updateDoc(tripRef, {
      participants: arrayUnion({
        uid: user.uid,
        name: user.displayName,
        email: user.email,
      }),
    });

    setShowJoinModal(false);
  };

  const handleCancelJoin = () => {
    setShowJoinModal(false);
    navigate("/home");
  };

  return (
    <div className="p-10 md:px-17">
      <h1 className="text-2xl font-bold">
        {isJoinMode ? "You're joining a trip!" : "Welcome to the trip!"}
      </h1>

      <JoinTripModal
        open={showJoinModal}
        onJoin={handleJoin}
        onCancel={handleCancelJoin}
      />

      <DetInfoSection trip={trip} tripid={tripId} />
      <DetHotel trip={trip} />
      <PlaceToVisit trip={trip} />
    </div>
  );
};

export default ViewTrip;
