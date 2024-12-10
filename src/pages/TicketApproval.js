import React, { useState, useEffect } from "react";

function TicketApproval() {
  // Sample ticket data (You can fetch this from an API)
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets from your My Ticket page or an API
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    // For now, we are using mock data. Replace it with API calls as necessary.
    const fetchedTickets = [
      {
        ticketNo: 1234,
        subject: "Login issue",
        category: "Access issue",
        priority: "High",
        date: "13/08/21",
      },
      {
        ticketNo: 1124,
        subject: "New ticket issue",
        category: "Access issue",
        priority: "Medium",
        date: "14/08/21",
      },
      {
        ticketNo: 1224,
        subject: "New request",
        category: "Feedback",
        priority: "Low",
        date: "13/08/21",
      },
      {
        ticketNo: 1244,
        subject: "Ticket submission",
        category: "Ticketing",
        priority: "High",
        date: "14/08/21",
      },
      {
        ticketNo: 1114,
        subject: "Login issue",
        category: "Access issue",
        priority: "High",
        date: "3/08/21",
      },
    ];
    setTickets(fetchedTickets);
  };

  return (
    <div className="p-6">
      <div className="bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Ticket Approval</h2>
        <input
          type="text"
          placeholder="Find ticket"
          className="border p-2 mb-4 w-full rounded-md"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Ticket No.</th>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Priority</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Action</th>
                <th className="px-4 py-2 text-left">Assign to</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{ticket.ticketNo}</td>
                  <td className="px-4 py-2">{ticket.subject}</td>
                  <td className="px-4 py-2">{ticket.category}</td>
                  <td className="px-4 py-2">{ticket.priority}</td>
                  <td className="px-4 py-2">{ticket.date}</td>
                  <td className="px-4 py-2 text-center">
                    <button className="text-green-500">✔</button>
                    <button className="text-red-500 ml-2">✖</button>
                  </td>
                  <td className="px-4 py-2">
                    <select className="bg-gray-100 p-2 rounded">
                      <option value="">Assign</option>
                      <option value="user1">User 1</option>
                      <option value="user2">User 2</option>
                      <option value="user3">User 3</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <span>
            Showing 1 to {tickets.length} of {tickets.length} entries
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Previous</button>
          <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

export default TicketApproval;
