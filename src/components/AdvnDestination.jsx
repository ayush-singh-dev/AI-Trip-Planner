import React from 'react'
import advanture from "../Images/advanture.png"
import beaches from "../Images/beaches.png"
import camping from "../Images/camping.png"
import couple from "../Images/couple.png"
const AdvnDestination = () => {
  return (
    <div className="flex flex-wrap gap-40 justify-center items-center mt-10">
      <div>
        <img
          src={advanture}
          alt="Adventure Destination"
          className=" object-cover text-green-800"
        />
        <h1 className=" font-bold">ADVANTURE</h1>
      </div>
      <div>
        <img
          src={camping}
          alt="Adventure Destination"
          className=" object-cover"
        />
        <h1 className=" font-bold">CAMPING</h1>
      </div>
      <div>
        <img
          src={beaches}
          alt="Adventure Destination"
          className="object-cover"
        />
        <h1 className=" font-bold">BEACHES</h1>
      </div>
      <div>
        <img
          src={camping}
          alt="Adventure Destination"
          className=" object-cover"
        />
        <h1 className=" font-bold">CAMPING</h1>
      </div>
      
    </div>
  );
}

export default AdvnDestination