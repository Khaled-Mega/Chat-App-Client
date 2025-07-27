import { create } from "zustand"

import { axiosInstance } from "../lib/axios.js";

import axios from "axios"

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSignedIn: false,
  isLoggedIn: false,
  isUpdating: false,
  checkAuth: async () => {
    try {
      axiosInstance.get("/auth/authUser").then((res) => {
        set({ authUser: res.data });
        console.log("££")
      }).catch((error) => {
        console.log(error)
      });
    } catch (error) {
      set({ authUser: null });
      console.log(error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signUp: async (info) => {
    try {
  		const res = await axiosInstance.post("/auth/signup", info)
      set({ authUser: res.data , isSignedIn: true});
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
}));
