import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button.jsx';

const SignIn = () => {
  const { googleSignIn, user, loading } = useAuth();
  console.log("user::::;", user);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location::::", location);
  const from = location.state?.from?.pathname || "/home"; // fallback

  useEffect(() => {
    if (!loading) {
      if (user) {
        // console.log("✅ Logged in, navigating to /home");
        // navigate("/home");
        console.log("✅ Logged in, navigating to:", from);
        navigate(from, { replace: true });
      } else {
        console.log("❌ Not logged in");
      }
    } else {
      console.log("⏳ Loading user state...");
    }
  }, [user, loading, navigate, from]);

  if (loading) return <div>Loading...</div>;

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/home");
      console.log("Google Sign In successful!");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <Button variant="green" onClick={handleGoogleSignIn}>
        SignIn
      </Button>
    </div>
  );
}

export default SignIn