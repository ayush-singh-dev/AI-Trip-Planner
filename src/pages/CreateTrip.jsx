import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { selectBudgetOption } from "@/components/Options";
import { selectTravelList } from "@/components/Options";
import toast from "react-hot-toast";
import { generateTravelPlan } from "@/service/geminiService";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/service/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
const CreateTrip = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    NoOfDays: "",
    Budget: "",
    Traveller: "",
  });

  const [travelPlan, setTravelPlan] = useState(null);
  const handleInputChange = (eOrKey, value) => {
    if (typeof eOrKey === "string") {
      // Direct value setting for Budget or Traveller
      setFormData((prev) => ({
        ...prev,
        [eOrKey]: value,
      }));
    } else {
      const { name, value, type } = eOrKey.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? parseInt(value) || "" : value,
      }));
    }
  };
  useEffect(() => {
    console.log("Form Data: ", formData);
    console.log("form data rendered hoo rha hea  ");
  }, [formData]);

  const onGenerateTrip = async () => {
    if (formData.NoOfDays > 5) {
      toast.error("Please select a maximum of 5 days for the trip.");
      return;
    }
    if (
      formData.location ||
      formData.NoOfDays ||
      formData.Budget ||
      formData.Traveller
    ) {
      toast.success("Trip generated successfully!");
      const plan = await generateTravelPlan(formData);
      if (plan) {
        setTravelPlan(plan);
        console.log("Travel Plan123: ", plan);
        console.log("formData: ", formData);
        try {
          const getTrip = await addDoc(collection(db, "Generate Trip"), {
            searchDesination: formData.location,
            plan: plan,
            createdBy: user?.uid || "anonymous",
            createdAt: new Date(),
          });
          console.log("getTrip: ", getTrip);
          console.log("getTrip ID: ", getTrip.id);

          const q = query(
            collection(db, "travelPlans"),
            orderBy("createdAt", "desc")
          );
          const querySnapshot = await getDocs(q);
          navigate(`/view-trip/${getTrip.id}`);
          toast.success("Trip saved to database!");
        } catch (error) {
          console.error("Error saving travel plan: ", error);
        }
      } else {
        toast.error("Failed to generate travel plan.");
      }
    } else {
      toast.error("Please fill in all fields before generating the trip.");
    }
  };

  return (
    <div className=" mt-10  mx-20">
      <div>
        <h1 className=" text-center text-4xl font-bold">
          WHERE TO <span className="text-[#59815B]">TRAVEL ?</span>
        </h1>
      </div>

      <div className="flex flex-col gap-10 mt-10 mb-10">
        <div>
          <Label htmlFor="destination" className="mb-5 font-semibold">
            What is destination of choice?
          </Label>
          <Input
            placeholder="Search..."
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="days" className="mb-5 font-semibold">
            How many days are you planning your trip?
          </Label>
          <Input
            placeholder="Ex.3"
            type="number"
            name="NoOfDays"
            value={formData.NoOfDays}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Label htmlFor="Budget" className="mb-5 font-semibold">
            What is Your Budget?
          </Label>
          <div className="flex gap-20">
            {selectBudgetOption.map((option, index) => (
              <div
                key={index}
                className={`w-[17em] p-5 border rounded-lg hover:shadow-md cursor-pointer ${
                  formData.Budget === option.title
                    ? "border-green-600 border-2"
                    : ""
                }`}
                onClick={() => handleInputChange("Budget", option.title)}
              >
                <h1 className="text-4xl ">{option.icon}</h1>
                <h1 className="text-lg font-bold">{option.title}</h1>
                <p className="text-sm text-slate-600">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="plan" className="mb-5 font-semibold">
            Who do you plan on traveling with on your next adventure?
          </Label>
          <div className="flex gap-20">
            {selectTravelList.map((option, index) => (
              <div
                key={index}
                className={`w-[17em] p-5 border rounded-lg hover:shadow-md cursor-pointer ${
                  formData.Traveller === option.people
                    ? "border-green-600 border-2"
                    : ""
                }`}
                onClick={() => handleInputChange("Traveller", option.people)}
              >
                <h1 className="text-4xl ">{option.icon}</h1>
                <h1 className="text-lg font-bold">{option.title}</h1>
                <p className="text-sm text-slate-600">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="green"
        className=" float-right my-10 cursor-pointer"
        onClick={onGenerateTrip}
      >
        Generate Trip
      </Button>
    </div>
  );
};

export default CreateTrip;
