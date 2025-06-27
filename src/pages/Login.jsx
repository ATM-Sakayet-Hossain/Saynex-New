import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { loggedUser } from "../../store/authSlice";

const Login = () => {
  const userInfo = useSelector((state) => state.userData.user)
  const auth = getAuth();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        if (!res.user.emailVerified) {
          toast.error("Please verify your email address before logging in.");
        } else {
          toast.success("Login Successful");
          setTimeout(() => {
            dispatch(loggedUser(res.user)), Navigate("/");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log("Error Code:", error.Code);
        console.log("Error message:", error.message);
        if (error.code === "auth/invalid-email") {
          toast.error("Please Type your Email.");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Please Type your password.");
        }
        if (error.code === "auth/invalid-credential") {
          toast.error("Your Email/password is invalid.");
        }
      });
  };
  if (userInfo) {
    return <Navigate to="/" />
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <ToastContainer position="top-right" theme="light" />
      <div
        style={{
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        className="w-120 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-center text-3xl font-extrabold text-white">
            Welcome Back
          </h2>
          <p className="mt-4 text-center text-gray-400">Sign in to continue</p>

          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  placeholder="Password"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex flex-row items-center mt-4 justify-between">
            <button className="group relative w-full flex items-center gap-2 justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FcGoogle className="h-6 w-6" />
              Google
            </button>
          </div>
        </div>

        <div className="px-8 py-4 bg-gray-700 text-center">
          <span className="text-gray-400">Don't have an account?</span>
          <Link
            to="/signup"
            className="font-medium text-indigo-500 hover:text-indigo-400 ml-1"
          >
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
