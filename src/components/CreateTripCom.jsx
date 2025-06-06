import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
const CreateTripCom = () => {
   
  return (
    <div className=" mt-16  mx-20 flex gap-3   ">
      <div>
        <h1 className="text-5xl font-bold mb-10">
          FIND YOUR WAY <span className="text-[#59815B]">THROUGH</span>
        </h1>
        <p className="mb-2  text-slate-500">
          Aenean eget odio vel nulla ullamcorper scelerisque. Vestibulum eget
          diam non velit aliquam fringilla. Praesent et mi turpis. Proin in
          felis nec dui efficitur aliquam vitae sed urna. Aliquam scelerisque
          cursus est eu porta. Sed euismod lacus nec ultricies tincidunt
        </p>
        <p className=" mb-11 text-slate-500">
          Vestibulum eget diam non velit aliquam fringilla. Praesent et mi
          turpis. Proin in felis nec dui efficitur aliquam vitae sed urna.
        </p>
        <div>
            <Link to="/create-trip">
                <Button variant="green" className=" cursor-pointer">Create your trip</Button>
            </Link>
          
        </div>
      </div>
      <div>
        <img
          className="rounded-2xl h-[26em] w-[45em]"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1080&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default CreateTripCom