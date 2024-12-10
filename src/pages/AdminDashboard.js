import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h6 className="text-3xl font-semibold">DashBoard</h6>
      <div className="mt-5 grid grid-cols-4 gap-6 justify-items-center">
        {/* Card: Total Tickets */}
        <div className="bg-blue-400 text-white rounded p-6 text-center shadow-md w-60 h-40 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Total Tickets</h2>
          <p className="text-4xl mt-2">12</p>
        </div>
        {/* Card: Total Solved */}
        <div className="bg-green-400 text-white rounded p-6 text-center shadow-md w-60 h-40 flex flex-col justify-center items-center border-2 border-blue-500">
          <h2 className="text-lg font-bold">Total Solved</h2>
          <p className="text-4xl mt-2">8</p>
        </div>
        {/* Card: Total Awaiting Approval */}
        <div className="bg-red-400 text-white rounded p-6 text-center shadow-md w-60 h-40 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Total Awaiting Approval</h2>
          <p className="text-4xl mt-2">2</p>
        </div>
        {/* Card: Total in Progress */}
        <div className="bg-yellow-400 text-white rounded p-6 text-center shadow-md w-60 h-40 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Total in Progress</h2>
          <p className="text-4xl mt-2">2</p>
        </div>
        {/* Analytics Section */}
        <div className="col-span-2 bg-teal-100 rounded p-6 shadow-md w-full flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-teal-600 text-center">
            Analytics
          </h2>
          <div className="mt-4 flex justify-center items-end h-32">
            {/* Bar Chart */}
            <div className="w-10 bg-teal-300 h-16 rounded"></div>
            <div className="w-10 bg-teal-400 h-24 rounded mx-2"></div>
            <div className="w-10 bg-teal-500 h-32 rounded"></div>
          </div>
        </div>
        {/* Team Section */}
        <div className="col-span-2 bg-custom-teal rounded p-6 shadow-md w-full flex justify-around items-center">
          {/* Technical Supports */}
          <div className="text-center">
            <div className="bg-gray-200 rounded-full p-3">
              <i className="fas fa-headset text-3xl"></i>
            </div>
            <p className="text-lg font-bold mt-2">3</p>
            <p className="text-sm text-gray-500">Technical Supports</p>
          </div>

          {/* Operations Team */}
          <div className="text-center">
            <div className="bg-gray-200 rounded-full p-3">
              <i className="fas fa-user-cog text-3xl"></i>
            </div>
            <p className="text-lg font-bold mt-2">4</p>
            <p className="text-sm text-gray-500">Operation Team</p>
          </div>
        </div>
        {/* Customer Feedback */}
        <div className="col-span-4 bg-teal-100 rounded p-6 shadow-md w-full flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-teal-600">Customer Feedback</h2>
          <p className="text-2xl mt-4">⭐⭐⭐⭐☆</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
