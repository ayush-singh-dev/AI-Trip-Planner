import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../service/firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = async() => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log("provider", provider);
  };

  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoading(false);
    });

    return () => unsubscribe();
  }, []);


    const logOut = () => {
        signOut(auth)
    }
    useEffect(() => {
      if (user) {
        console.log("✅ Updated user state:", user);
      } else {
        console.log("🔁 Waiting for user login...");
      }
    }, [user]);
  return (
    <AuthContext.Provider value={{ googleSignIn , user, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
