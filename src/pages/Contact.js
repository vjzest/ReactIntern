import React from "react";
import { NavLink } from "react-router-dom";

function UserProfile() {
  return (
    <div>
      <h6 className="text-3xl font-semibold text-center">User Profile</h6>

      <div className="flex justify-center items-center h-screen bg-teal-100 px-20 gap-x-10">
        {/* User Details Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-2/5 text-center h-[400px] mb-10">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto overflow-hidden flex items-center justify-center shadow-lg">
            {/* Replace the image URL below with your desired image */}
            <img
              src="https://via.placeholder.com/150" // Replace with your contact image URL
              alt="User Contact"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 text-left">
            <p>
              <b>Username</b>
            </p>
            <p>
              <b>Contact Number</b>
            </p>
            <p>
              <b>Email</b>
            </p>
            <p>
              <b>Department</b>
            </p>

            {/* Edit Profile Link */}
            <nav className="mt-4">
              <NavLink
                to="/edit-profile"
                className="text-blue-500 hover:text-blue-600"
              >
                <b>Edit Profile</b>
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-2/5 mb-40">
          <h3 className="text-lg font-semibold text-center mb-4">
            Give Your Feedback
          </h3>

          {/* Feedback Textarea */}
          <textarea
            className="w-full h-20 rounded-lg border border-gray-300 p-2 mb-4"
            placeholder="[Lorem Ipsum]"
          ></textarea>

          {/* Rating Stars */}
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-2xl text-gray-400 cursor-pointer mx-1"
              >
                ★
              </span>
            ))}
          </div>

          {/* Submit Feedback Button */}
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
