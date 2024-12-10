import React, { useState } from "react";

function TicketPage() {
  const [tickets, setTickets] = useState([
    {
      ticketNo: "1234",
      subject: "Login issue",
      status: "In Progress",
      supportBy: "Tech support",
      date: "13/08/21",
      rate: 0,
      title: "Login not working",
      description: "Unable to log in to the system",
      category: "Technical",
      type: "Bug",
      priority: "High",
      dept: "IT",
      attachment: "None",
    },
    // More tickets...
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null); // Store the selected ticket for the modal

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket); // Set the clicked ticket in state
  };

  const handleCloseModal = () => {
    setSelectedTicket(null); // Close the modal
  };

  return (
    <div className="px-20 py-10 bg-teal-100 h-screen">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          List of Tickets
        </h2>

        {/* Ticket Table */}
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left">Ticket No.</th>
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Support By</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Rate</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketNo} className="border-b">
                <td className="p-2">
                  <button
                    className="text-blue-500"
                    onClick={() => handleTicketClick(ticket)}
                  >
                    {ticket.ticketNo}
                  </button>
                </td>
                <td className="p-2">{ticket.subject}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-white rounded-full ${
                      ticket.status === "In Progress"
                        ? "bg-green-500"
                        : ticket.status === "On hold"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="p-2">{ticket.supportBy}</td>
                <td className="p-2">{ticket.date}</td>
                <td className="p-2">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <span
                      key={index}
                      className={`${
                        ticket.rate >= star
                          ? "text-yellow-500"
                          : "text-gray-400"
                      } text-xl`}
                    >
                      ★
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Ticket Details */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-4">Ticket Details</h3>
            <p>
              <strong>Ticket No:</strong> {selectedTicket.ticketNo}
            </p>
            <p>
              <strong>Date:</strong> {selectedTicket.date}
            </p>
            <p>
              <strong>Name:</strong> {selectedTicket.title}
            </p>
            <p>
              <strong>Dept:</strong> {selectedTicket.dept}
            </p>
            <p>
              <strong>Title:</strong> {selectedTicket.title}
            </p>
            <p>
              <strong>Description:</strong> {selectedTicket.description}
            </p>
            <p>
              <strong>Category:</strong> {selectedTicket.category}
            </p>
            <p>
              <strong>Type:</strong> {selectedTicket.type}
            </p>
            <p>
              <strong>Priority:</strong> {selectedTicket.priority}
            </p>
            <p>
              <strong>Status:</strong> {selectedTicket.status}
            </p>
            <p>
              <strong>Attachment:</strong> {selectedTicket.attachment}
            </p>

            <button
              onClick={handleCloseModal}
              className="bg-teal-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketPage;
