import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY1,
});

export const generateTravelPlan = async (formData) => {
  const config = {
    responseMimeType: "application/json",
  };

  const model = "gemini-2.0-flash";

  const prompt = `Generate an AI travel plan for"
   -location: ${formData.location}, 
   -Days: ${formData.NoOfDays},
   -Traveller: ${formData.Traveller}, 
   -Budget: ${formData.Budget}. 
   Return JSON strictly using only those exact strings for "Traveller" and "Budget". Do not create new terms or rephrase them.
  Provide:
    - Hotel list: (name, address, price, image URL, geo coordinates, rating, description)
    - ${formData.NoOfDays}-Days itinerary (each place's name, details, image URL, geo coordinates, ticket pricing, estimated time, and best time to visit)
    Output JSON structure should exactly follow this:
{
  "location": "string",
  "Days": number,
  "Budget": "string",
  "Traveller": "string",
  "HotelList": [
    {
      "name": "string",
      "address": "string",
      "price": "string",
      "rating": "string",
      "description": "string",
      "image": "string",
      "geoCoordinates": "latitude,longitude"
    }
  ],
  "Itinerary": [
    {
      "day": number,
      "activities": [
        {
          "time": "string", // e.g., "9:00 AM"
          "activity": "string", // e.g., "Visit Taj Mahal"
          "location": "string" // e.g., "Agra, India"
          "image": "string", // e.g., "https://example.com/image.jpg"
          "ticketPricing": "string", // e.g., "$15"
          "bestTimeToVisit": "string" // e.g., "Morning"
          "food": "string" // e.g., "Local cuisine"
        }
      ]
    }
  ]
}

⚠️ Do not change key names.
⚠️ Do not use camelCase or snake_case inconsistently.
⚠️ Ensure HotelList and Itinerary fields are always present and follow the format strictly.
  Format the entire response strictly as valid JSON.`;

  const contents = [{ role: "user", parts: [{ text: prompt }] }];

  const result = await genAI.models.generateContent({
    model,
    config,
    contents,
  });

  //   console.log("Gemini response:", result);
  console.log("Gemini response type:", typeof result);
  const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    console.error("No text response from Gemini.");
    return null;
  }
  try {
    const json = JSON.parse(text); // ✅ This is what you want to parse
    console.log("Gemini response JSON:", json);
    return json;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    console.log("Raw text:", text); // helpful for debugging
    return null;
  }
};
