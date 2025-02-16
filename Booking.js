import { useState } from "react";

const TicketBooking = () => {
  const [selectedTicket, setSelectedTicket] = useState("free");
  const [ticketCount, setTicketCount] = useState(1);

  const ticketOptions = [
    { type: "Free", price: "Free", access: "REGULAR ACCESS", remaining: "20/52" },
    { type: "VIP 1", price: "$150", access: "VIP ACCESS", remaining: "20/52" },
    { type: "VIP 2", price: "$150", access: "VIP ACCESS", remaining: "20/52" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c1a1f] p-4">
      <div className="w-full max-w-lg bg-[#0c1a1f] border border-[#1a3a42] p-6 rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="text-white text-xl font-semibold">Ticket Selection</h2>
        <p className="text-gray-400 text-sm">Step 1/3</p>

        {/* Event Info */}
        <div className="bg-[#11262b] p-4 rounded-lg mt-4">
          <h3 className="text-white text-lg font-bold">Techember Fest '25</h3>
          <p className="text-gray-400 text-sm mt-1">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="text-gray-400 text-sm mt-2">📍 [Event Location] | March 15, 2025 | 7:00 PM</p>
        </div>

        {/* Ticket Selection */}
        <div className="mt-4">
          <p className="text-white text-sm font-semibold">Select Ticket Type:</p>
          <div className="mt-2 flex gap-2">
            {ticketOptions.map((ticket) => (
              <button
                key={ticket.type}
                className={`p-3 rounded-lg text-white text-sm flex-1 border ${
                  selectedTicket === ticket.type
                    ? "border-[#00a9ff] bg-[#11262b]"
                    : "border-[#1a3a42] bg-[#0c1a1f]"
                }`}
                onClick={() => setSelectedTicket(ticket.type)}
              >
                <p className="font-bold">{ticket.price}</p>
                <p className="text-gray-400">{ticket.access}</p>
                <p className="text-gray-500 text-xs">{ticket.remaining}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Ticket Count */}
        <div className="mt-4">
          <label className="text-white text-sm font-semibold">Number of Tickets</label>
          <select
            className="w-full mt-1 p-2 bg-[#11262b] text-white rounded-lg"
            value={ticketCount}
            onChange={(e) => setTicketCount(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-2">
          <button className="flex-1 py-2 rounded-lg border border-gray-500 text-white">Cancel</button>
          <button className="flex-1 py-2 rounded-lg bg-[#00a9ff] text-white">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
