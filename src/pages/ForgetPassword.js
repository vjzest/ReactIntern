import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const ForgotPassword = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle navigation to the Sign In page
  const handleSignIn = () => {
    navigate("/signIn"); // Navigate to the Sign In page (root path)
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
        <p className="text-center text-black mb-6">
          Don't worry! Enter your email, and we will send you a password reset
          email.
        </p>

        <form className="space-y-4">
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
            className="w-full p-3 mt-4 bg-green-600 text-black font-semibold rounded-md hover:bg-green-700"
          >
            Submit
          </button>

          <button
            type="button"
            className="w-full p-3 mt-4 bg-blue-600 text-black font-semibold rounded-md hover:bg-blue-700"
            onClick={handleSignIn} // Navigate to SignIn page
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
