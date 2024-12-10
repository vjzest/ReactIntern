import React, { useState } from "react";

function NewTicket() {
  const [formData, setFormData] = useState({
    ticketNo: "",
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    type: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-100 px-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create New Ticket
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="ticketNo"
              value={formData.ticketNo}
              onChange={handleChange}
              placeholder="Ticket No."
              className="p-2 rounded-md border border-gray-300 w-full"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-2 rounded-md border border-gray-300 w-full"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-2 rounded-md border border-gray-300 w-full"
            />
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="Department"
              className="p-2 rounded-md border border-gray-300 w-full"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="p-2 rounded-md border border-gray-300 w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="p-2 rounded-md border border-gray-300 w-full"
            />
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Type"
              className="p-2 rounded-md border border-gray-300 w-full"
            />
            <input
              type="text"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              placeholder="Priority"
              className="p-2 rounded-md border border-gray-300 w-full"
            />
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="5"
            className="p-2 rounded-md border border-gray-300 w-full"
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="captcha" className="h-5 w-5" />
              <label htmlFor="captcha" className="text-sm">
                I'm not a robot
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Attach File</span>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-teal-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.293 14.707a1 1 0 011.414 0l4-4a1 1 0 00-1.414-1.414L10 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-6 rounded-md hover:bg-teal-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTicket;
