import React from "react";

const TicketCard = ({ ticket }) => {
  const priorityColors = ['#cccccc', '#4caf50', '#ffeb3b', '#ff9800', '#f44336'];

  return (
    <div
      className="ticket-card"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        marginBottom: "16px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "bold", color: "#6b7280" }}>
          {ticket.id}
        </span>
        <img
          src={ticket.userImage}
          alt="User Avatar"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <h4 style={{ fontSize: "16px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>
        {ticket.title}
      </h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#d1d5db",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontWeight: "bold", color: "#6b7280" }}>!</span>
        </div>
        <span
          style={{
            border: "1px solid #d1d5db",
            padding: "4px 8px",
            borderRadius: "4px",
            backgroundColor: "#f9fafb",
            color: "#6b7280",
          }}
        >
         {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
