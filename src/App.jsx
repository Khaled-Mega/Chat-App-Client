import "./App.css";

import Navbar from "./components/Navbar";

import SignupPage from "./pages/SignupPage";

import { Routes, Route } from "react-router-dom";

import {useEffect} from "react"


import { useAuthStore } from "./store/useAuthStore.js";
export default function App() {
  const { isCheckingAuth, authUser, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if (isCheckingAuth && !authUser) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }
  console.log({authUser})
  return (
    
    <div className="h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Hello</h1>}/>
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
