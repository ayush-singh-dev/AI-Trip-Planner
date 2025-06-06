import React from "react";
import { createContext, useContext, useState } from "react";
import { AI_PROMPT } from "@/components/Options";
import { chatSession } from "@/service/AiModel";
const AiContext  = createContext();

export const AiContextProvider = ({children})=>{
 const [searchResult, setSearchResult] = useState("");
 const [loading, setLoading] = useState(false);

 const searchDesination = async(location)=>{
    if(!location) return;
    setLoading(true);
    try {
        const finalAiPromt = AI_PROMPT.replace("{location}", location);
        console.log("finalAiPromt: ", finalAiPromt);
        const result = await chatSession.sendMessage(finalAiPromt);
        console.log("result: ", result);
        console.log("txt resonce:", result?.response?.text());
        const response = result?.response?.text();
        console.log("response TYPE: ", typeof response);
        setSearchResult(response);
    } catch (error) {
        console.error("Error in searchDesination: ", error);
        setLoading(false);
    }
    
 }
    return (
      <AiContext.Provider value={{ searchDesination , searchResult, loading }}>
        {children}
      </AiContext.Provider>
    );
}

export const useAiContext = () => {
    return useContext(AiContext);
  };