import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn.jsx";
import { Button } from "./ui/button.jsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "HOME", path: "/home" },
  { label: "CREATE TRIP", path: "/create-trip" },
  { label: "BLOG", path: "/contact" },
  { label: "MY TRIP", path: "/my-trip" },
];

const Navbar = () => {
  const { user, logOut } = useAuth();
  useEffect(() => {
    console.log("Navbar user:", user);
  }, [user]);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      console.log("Logout successful!");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="flex justify-between items-center  p-4 border-b-1 shadow-md">
      <div>
        <Link to="/home">
          <h1>BackPackers</h1>
        </Link>
      </div>
      {user && (
        <div className="flex gap-4 font-bold">
          {navLinks.map((link) => (
            <Button
              variant="ghost"
              onClick={() => handleNavigate(link.path)}
              key={link.label}
            >
              <p className="font-bold">{link.label}</p>
            </Button>
          ))}
        </div>
      )}
      {user ? (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="w-11 h-12 cursor-pointer">
                <AvatarImage src={user.photoURL} alt="User profile" />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Button onClick={handleLogout}>Log Out</Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div>
          <SignIn />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
