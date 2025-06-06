import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className="  m-auto items-center justify-center flex flex-col h-screen leading-20">
      <div className="text-center   ">
        <h1 className="text-[2rem] font-bold text-[#59815B]">
          💼 Your Next Escape Awaits – Let AI Take Care of the Details 🤖🌴
        </h1>
        <h1 className="text-3xl font-bold ">
          Personalized Adventures Just a Click Away 🌟🌴
        </h1>

        <p className="text-[1.25rem]  text-gray-600">
          We turn your preferences into perfectly timed adventures, including
          what to eat, see, and do – all within your budget 🎒🍛
        </p>
      </div>
      <div>
        <Button variant="green">
          <Link to="/home"> Get Starts, It's Free</Link>
        </Button>
      </div>
    </div>
  );
}

export default IndexPage;