import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { GoLock } from "react-icons/go";
import { Link, Navigate, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const Navigate = useNavigate();
  const db = getDatabase();
  const auth = getAuth();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // Function to handle form submission
  // This function will be called when the form is submitted
  const handleSubmit = (e) => {    
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: userData.fullName,
          photoURL: "/default-profile.png",
        })
          .then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
              set(ref(db, "users/" + auth.currentUser.uid), {
                username: auth.currentUser.displayName,
                email: auth.currentUser.email,
                profile_picture: auth.currentUser.photoURL,
              });
              toast.success(
                "Profile updated successfully! Please verify your email address."
              );
              setTimeout(() => {
                Navigate ("/login")
              }, 1000);
            });
          })
          .catch(() => {
            toast.error("Error updating profile. Please try again.");
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use. Please try another email.");
        }
        if (error.code === "auth/invalid-email") {
          toast.error("Please Type your Email.");
        }
        if (error.code === "auth/missing-email") {
          toast.error("Please Type your Email.");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Please Type your Email.");
        }
        if (error.code === "auth/weak-password") {
          toast.error("Please Type your Password with at least 6 characters");
        }
      });
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <ToastContainer position="top-right" theme="light" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 bg-white p-8 w-[550px] rounded-2xl font-sans mx-auto"
      >
        <h2 className="text-center text-3xl font-bold">Saynex</h2>
        <div className="flex flex-col">
          <label className="text-[#151717] font-semibold">Name</label>
        </div>
        <div className="flex items-center h-[50px] border border-[#ecedec] rounded-[10px] px-2 focus-within:border-[#2d79f3] transition">
          <FaRegUser className="h-6 w-6" />
          <input
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, fullName: e.target.value }))
            }
            type="name"
            placeholder="Enter your Name"
            className="ml-2 w-full h-full border-none outline-none rounded-[10px]"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label className="text-[#151717] font-semibold">Email</label>
        </div>
        <div className="flex items-center h-[50px] border border-[#ecedec] rounded-[10px] px-2 focus-within:border-[#2d79f3] transition">
          <CiMail className="h-7 w-7" />
          <input
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
            type="email"
            placeholder="Enter your Email"
            className="ml-2 w-full h-full border-none outline-none rounded-[10px]"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label className="text-[#151717] font-semibold">Password</label>
        </div>
        <div className="flex items-center h-[50px] border border-[#ecedec] rounded-[10px] px-2 focus-within:border-[#2d79f3] transition">
          <GoLock className="h-6 w-6" />
          <input
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
            type="password"
            placeholder="Enter your Password"
            className="ml-2 w-full h-full border-none outline-none rounded-[10px]"
          />
        </div>

        <button
          type="submit"
          className="mt-5 bg-[#151717] text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full hover:bg-[#252727] transition"
        >
          Sign Up
        </button>

        <p className="text-center text-black text-sm my-2">
          Already have an account?
          <Link
            to="/login"
            className="text-[#2d79f3] font-medium cursor-pointer"
          >
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
