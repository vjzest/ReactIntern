import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const SignUp = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle navigation to the Sign In page
  const handleSignIn = () => {
    navigate("/"); // Navigate to the sign-in page (root path)
  };

  // Handle navigation to the Forgot Password page
  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to the forgot password page
  };

  return (
    <div className="h-screen flex justify-center items-center bg-teal-400">
      <div className="w-96 p-8 bg-teal-200 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-black font-bold mb-6">
          Helpdesk System
        </h2>
        <p className="text-center text-white mb-6">Sign up here</p>

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

          <div>
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 mt-2 rounded-md border-2 border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-500 text-black font-semibold rounded-md hover:bg-blue-600"
          >
            Sign Up
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
              onClick={handleSignIn} // Handle click to navigate to Sign In
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
