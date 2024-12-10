import React, { useState } from "react";

const SupportAgent = ({ agent, onViewDetails }) => (
  <div className="flex items-center space-x-4 mb-6">
    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354v15.372m0-11.927c.926 0 1.725.525 2.115 1.181l1.695 2.462a2.25 2.25 0 01-2.12 2.562l-1.695-2.462a1.75 1.75 0 01-.016-1.59c.387-.663.926-1.18.926-1.18z"
        />
      </svg>
    </div>
    <div>
      <p className="font-semibold text-lg">{agent.name}</p>
      <button
        className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600"
        onClick={() => onViewDetails(agent)}
      >
        View details
      </button>
    </div>
  </div>
);

const PerformancePage = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const supportAgents = [
    { name: "Technical Support 1", contact: "0123456789", department: "ABC" },
    { name: "Technical Support 2", contact: "9876543210", department: "XYZ" },
    { name: "Technical Support 3", contact: "1357913579", department: "PQR" },
  ];

  const ticketStats = {
    total: 5,
    solved: 2,
    pending: 1,
    inProgress: 2,
    rating: 4,
  };

  const handleViewDetails = (agent) => {
    setSelectedAgent(agent);
  };

  const closeModal = () => {
    setSelectedAgent(null);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Performance</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354v15.372m0-11.927c.926 0 1.725.525 2.115 1.181l1.695 2.462a2.25 2.25 0 01-2.12 2.562l-1.695-2.462a1.75 1.75 0 01-.016-1.59c.387-.663.926-1.18.926-1.18z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold">Technical Support Name</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">Contact No: 0123456789</p>
            <p className="text-sm text-gray-600">Department: ABC</p>
          </div>
          <div>
            <p className="font-semibold mb-3 text-lg">
              Total Ticket Handle: {ticketStats.total}
            </p>
            <p className="text-sm text-gray-600">
              Ticket Solved: {ticketStats.solved}
            </p>
            <p className="text-sm text-gray-600">
              Ticket Pending: {ticketStats.pending}
            </p>
            <p className="text-sm text-gray-600">
              Ticket in progress: {ticketStats.inProgress}
            </p>
            <div className="flex mt-4">
              {[...Array(ticketStats.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Support Agents</h3>
          {supportAgents.map((agent, index) => (
            <SupportAgent
              key={index}
              agent={agent}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Modal for Agent Details */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h3 className="text-2xl font-semibold mb-4">
              {selectedAgent.name}
            </h3>
            <p className="text-sm text-gray-600">
              Contact No: {selectedAgent.contact}
            </p>
            <p className="text-sm text-gray-600">
              Department: {selectedAgent.department}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformancePage;
