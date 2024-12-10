import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h6 className="text-3xl font-semibold text-center py-5">Dashboard</h6>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center py-10">
        {/* Card: Total Tickets */}
        <div className="bg-blue-400 text-white rounded p-4 text-center shadow-md w-full max-w-xs h-40 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Total Tickets</h2>
          <p className="text-4xl mt-2">12</p>
        </div>
        {/* Card: Total Solved */}
        <div className="bg-green-400 text-white rounded p-4 text-center shadow-md w-full max-w-xs h-40 flex flex-col justify-center items-center border-2 border-blue-500">
          <h2 className="text-lg font-bold">Total Solved</h2>
          <p className="text-4xl mt-2">8</p>
        </div>
        {/* Card: Total Awaiting Approval */}
        <div className="bg-red-400 text-white rounded p-4 text-center shadow-md w-full max-w-xs h-40 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Total Awaiting Approval</h2>
          <p className="text-4xl mt-2">2</p>
        </div>
        {/* Card: Total in Progress */}
        <div className="bg-yellow-400 text-white rounded p-4 text-center shadow-md w-full max-w-xs h-40 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold">Total in Progress</h2>
          <p className="text-4xl mt-2">2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
