import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": process.env.REACT_APP_API_KEY,
    "X-Goog-FieldMask": ["places.photos", " places.dispalyName", "places.id"],
  },
};

export const getPlaceDetail =  (data)=> axios.post(BASE_URL, data, config)