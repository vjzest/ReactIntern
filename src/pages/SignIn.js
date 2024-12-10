import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const SignIn = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle navigation to the Forgot Password page
  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to the forgot password page
  };

  // Handle navigation to the Sign Up page
  const handleSignUp = () => {
    navigate("/signup"); // Navigate to the Sign Up page
  };

  return (
    <div className="h-screen flex justify-center items-center bg-teal-400">
      <div className="w-96 p-8 bg-teal-200 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-black font-bold mb-6">
          Helpdesk System
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 mt-2 rounded-md border-2 border-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 mt-2 rounded-md border-2 border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-green-500 text-black font-semibold rounded-md hover:bg-green-600"
          >
            Sign In
          </button>

          <div className="flex justify-between mt-4">
            <a
              href="#"
              className="text-red-600 text-sm"
              onClick={handleForgotPassword} // Handle click to navigate to Forgot Password
            >
              Forgot password
            </a>
            <a
              href="#"
              className="text-blue-600 text-sm"
              onClick={handleSignUp} // Handle click to navigate to Sign Up
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
