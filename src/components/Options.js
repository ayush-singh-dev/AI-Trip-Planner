export const AI_PROMPT =
  "Generate a AI travel plan for location : {location} \n1. with 7 most like location with short description and photo.\n 2. give the 4 destination places   for each  camping, adventure, couple, Beaches, Low budget  like photo , detail description in 100 words , what things to do , tips and tricks, cost savings, average cost  and food place in {location} \n3. also give the  5 destination places   for each summer winter and monsoon  in detail like photo ,  detail description  in 100 words , what things to do , tips and tricks, cost savings, average cost, food,etc place to visit  in {location} \nin JSON Format";



export const selectBudgetOption = [
  {
    id: 1,
    title: "Cheap",
    desc: "Save money and travel on a budget",
    icon: "💰",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "keep your budget in check",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Travel in style and comfort",
    icon: "💰",
  },
];

export const selectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "Travel solo and explore at your own pace",
    icon: "👤",
    people: "1",
  },
  {
    id: 2,
    title: "a Couple",
    desc: "Travel with a partner and create memories together",
    icon: "👫",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "Travel with family and bond over new experiences",
    icon: "👪",
    people: "3 to 5 people",
  },
  {
    id: 3,
    title: "Friends",
    desc: "Travel with friends and have fun together",
    icon: "👬",
    people: "more then 5 people",
  },
];
