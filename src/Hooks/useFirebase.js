import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  // Register Or SignUp Users..................................................>
  const signUpUser = (email, password, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        navigate("/");
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
        // ..
      })
      .finally(() => setLoading(false));
  };

  //   Login Or SignIn User.........................................................>
  const signInUser = (email, password, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //   user state observer..........................................................>
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //   Logout User..........................................................>
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  return { user, signUpUser, signInUser, logOut, loading, error };
};

export default useFirebase;
