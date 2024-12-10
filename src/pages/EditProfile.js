import React, { useState } from "react";

function EditProfile() {
  const [formData, setFormData] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    email: "",
    realName: "",
    accessLevel: "",
    projectAccessLevel: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic like calling an API or updating state.
    console.log("Profile Updated", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-100 px-20">
      <div className="bg-white p-6 rounded-2xl shadow-md w-2/5">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Edit Account
        </h2>

        <form onSubmit={handleSubmit}>
          <table className="w-full table-auto">
            <tbody>
              <tr>
                <td className="py-2 font-bold">Username</td>
                <td>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Current Password</td>
                <td>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">New Password</td>
                <td>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Confirm Password</td>
                <td>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Email</td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Real Name</td>
                <td>
                  <input
                    type="text"
                    name="realName"
                    value={formData.realName}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Access Level</td>
                <td>
                  <select
                    name="accessLevel"
                    value={formData.accessLevel}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  >
                    <option value="">Select Access Level</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Guest">Guest</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="py-2 font-bold">Project Access Level</td>
                <td>
                  <select
                    name="projectAccessLevel"
                    value={formData.projectAccessLevel}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg border border-gray-300 w-full"
                  >
                    <option value="">Select Project Access Level</option>
                    <option value="Read">Read</option>
                    <option value="Write">Write</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-8 rounded-md hover:bg-teal-600"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
