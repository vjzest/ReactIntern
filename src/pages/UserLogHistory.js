import React, { useState } from "react";

const UserLogHistory = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const logData = [
    {
      no: 1,
      dateIn: "130821 / 0800",
      staffId: "XL000001",
      department: "OT",
      activity: "Create Team",
      dateOut: "130821 / 0815",
    },
    {
      no: 2,
      dateIn: "130821 / 0805",
      staffId: "",
      department: "",
      activity: "",
      dateOut: "130821 / 0810",
    },
    {
      no: 3,
      dateIn: "",
      staffId: "",
      department: "",
      activity: "",
      dateOut: "",
    },
    {
      no: 4,
      dateIn: "",
      staffId: "",
      department: "",
      activity: "",
      dateOut: "",
    },
    {
      no: 5,
      dateIn: "",
      staffId: "",
      department: "",
      activity: "",
      dateOut: "",
    },
    // Add more log entries here...
  ];

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = logData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(logData.length / entriesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-4/5 mx-auto mt-5 font-sans">
      <h1 className="text-xl font-bold text-gray-700 mb-5">User Log History</h1>

      <div className="flex items-center mb-4">
        <span className="mr-2">Show:</span>
        <select
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(parseInt(e.target.value, 10))}
          className="p-2 rounded border border-gray-300"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="ml-2">Entries</span>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-100">No.</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Date/Sign In Time
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Staff ID</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Department
            </th>
            <th className="border border-gray-300 p-2 bg-gray-100">Activity</th>
            <th className="border border-gray-300 p-2 bg-gray-100">
              Date/Sign Out time
            </th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry) => (
            <tr key={entry.no} className="even:bg-gray-50">
              <td className="border border-gray-300 p-2">{entry.no}</td>
              <td className="border border-gray-300 p-2">{entry.dateIn}</td>
              <td className="border border-gray-300 p-2">{entry.staffId}</td>
              <td className="border border-gray-300 p-2">{entry.department}</td>
              <td className="border border-gray-300 p-2">{entry.activity}</td>
              <td className="border border-gray-300 p-2">{entry.dateOut}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col items-center">
        <span>
          Showing {startIndex + 1} to {Math.min(endIndex, logData.length)} of{" "}
          {logData.length} entries
        </span>
        <div className="mt-2 flex space-x-2">
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 border border-gray-300 bg-white rounded hover:bg-gray-100"
            >
              {"<<"}
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border border-gray-300 rounded ${
                currentPage === page
                  ? "bg-teal-500 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 border border-gray-300 bg-white rounded hover:bg-gray-100"
            >
              {">>"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLogHistory;
