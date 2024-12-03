// import React from "react";
// import three_dot from "../../icons_FEtask/three_dot.svg";
// import low from "../../icons_FEtask/low_pr.svg";
// import high from "../../icons_FEtask/high_pr.svg";
// import medium from "../../icons_FEtask/med_pr.svg";
// import noPriority from "../../icons_FEtask/No_pr.svg";
// import urgent from "../../icons_FEtask/urgent_pr.svg"; // Assuming you have an icon for "Urgent"
// import Backlog from "../../icons_FEtask/Backlog.svg";
// import Done from "../../icons_FEtask/Done.svg";
// import inpgres from "../../icons_FEtask/inpgres.svg";
// import todo from "../../icons_FEtask/todo.svg";
// const UserCard = ({ ticket }) => {
//   const priorityColors = [
//     "#cccccc",
//     "#4caf50",
//     "#ffeb3b",
//     "#ff9800",
//     "#f44336",
//   ];
//   const priorityLabels = {
//     0: { label: "No Priority", icon: noPriority },
//     1: { label: "Urgent", icon: urgent },
//     2: { label: "High", icon: high },
//     3: { label: "Medium", icon: medium },
//     4: { label: "Low", icon: low },
//   };

//   const status = {
//     "Backlog": { icon: Backlog },
//     "In progress": { icon: inpgres },
//     "Todo": { icon: todo },
//   };
// //   console.log("user card", ticket);

//   return (
//     <div
//       className="ticket-card"
//       style={{
//         border: "1px solid #e0e0e0",
//         borderRadius: "8px",
//         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//         padding: "16px",
//         marginBottom: "16px",
//         backgroundColor: "#fff",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           marginBottom: "8px",
//         }}
//       >
//         <span
//           style={{ fontSize: "14px", fontWeight: "bold", color: "#6b7280" }}
//         >
//           {ticket.id}
//         </span>
//         <img
//           src={ticket.userImage}
//           alt="User Avatar"
//           style={{
//             width: "32px",
//             height: "32px",
//             borderRadius: "50%",
//             objectFit: "cover",
//           }}
//         />
//       </div>
//       <div  style={{
//             display: "flex",
//             alignItems:"center",
            
//           }}>
//       <img
//             src={status[ticket.status]?.icon}
//             style={{ width: "24px", height: "24px" }}
//           />
//       <h4
//         style={{
//           fontSize: "16px",
//           fontWeight: "bold",
//           color: "#111827",
//           marginBottom: "8px",
//         }}
//       >
//         {ticket.title}
//       </h4>

//       </div>
      
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "8px",
//           fontSize: "14px",
//           color: "#6b7280",
//         }}
//       >
//         <div
//           style={{
//             width: "24px",
//             height: "24px",
//             backgroundColor: "#d1d5db",
//             borderRadius: "4px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <img
//             src={priorityLabels[ticket.priority]?.icon}
//             style={{ width: "24px", height: "24px" }}
//           />
//         </div>
//         <span
//           style={{
//             border: "1px solid #d1d5db",
//             padding: "4px 8px",
//             borderRadius: "4px",
//             backgroundColor: "#f9fafb",
//             color: "#6b7280",
//           }}
//         >
//           {ticket.tag}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
import React from "react";
import three_dot from "../../icons_FEtask/three_dot.svg";
import low from "../../icons_FEtask/low_pr.svg";
import high from "../../icons_FEtask/high_pr.svg";
import medium from "../../icons_FEtask/med_pr.svg";
import noPriority from "../../icons_FEtask/No_pr.svg";
import urgent from "../../icons_FEtask/urgent_pr.svg";
import Backlog from "../../icons_FEtask/Backlog.svg";
import Done from "../../icons_FEtask/Done.svg";
import inpgres from "../../icons_FEtask/inpgres.svg";
import todo from "../../icons_FEtask/todo.svg";

const UserCard = ({ ticket }) => {
  const priorityLabels = {
    0: { label: "No Priority", icon: noPriority },
    1: { label: "Urgent", icon: urgent },
    2: { label: "High", icon: high },
    3: { label: "Medium", icon: medium },
    4: { label: "Low", icon: low },
  };

  const status = {
    "Backlog": { icon: Backlog },
    "In progress": { icon: inpgres },
    "Todo": { icon: todo },
  };

  return (
    <div
      className="ticket-card"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        marginBottom: "20px",
        backgroundColor: "#ffffff",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "600", color: "#6b7280" }}>
          #{ticket.id}
        </span>
        <img
          src={ticket.userImage}
          alt="User Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #e5e7eb",
          }}
        />
      </div>

      {/* Status and Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        {/* Status Icon */}
        <img
          src={status[ticket.status]?.icon}
          alt={`${ticket.status} Icon`}
          style={{ width: "24px", height: "24px" }}
        />
        <h4
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "0",
            lineHeight: "1.4",
          }}
        >
          {ticket.title}
        </h4>
      </div>

      {/* Footer: Priority & Tag */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          fontSize: "14px",
          color: "#6b7280",
        }}
      >
        {/* Priority */}
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "#d1d5db",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={priorityLabels[ticket.priority]?.icon}
            alt={`${priorityLabels[ticket.priority]?.label} Icon`}
            style={{ width: "24px", height: "24px" }}
          />
        </div>

        {/* Tag */}
        <span
          style={{
            border: "1px solid #d1d5db",
            padding: "6px 12px",
            // borderRadius: "20px",
            backgroundColor: "#f9fafb",
            fontWeight: "500",
            color: "#374151",
          }}
        >
          {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
