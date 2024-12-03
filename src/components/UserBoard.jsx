// import React, { useState } from "react";
// import TicketCard from "./TicketCard";
// import add from "../../icons_FEtask/add.svg";
// import three_dot from "../../icons_FEtask/three_dot.svg";
// import low from "../../icons_FEtask/low_pr.svg";
// import high from "../../icons_FEtask/high_pr.svg";
// import medium from "../../icons_FEtask/med_pr.svg";
// import noPriority from "../../icons_FEtask/No_pr.svg";
// import urgent from "../../icons_FEtask/urgent_pr.svg"; // Assuming you have an icon for "Urgent"


// export const UserBoard = ({ groupedTickets }) => {
//   // Priority mapping with labels and images
//   const priorityLabels = {
//     0: { label: "No Priority", icon: noPriority },
//     1: { label: "Urgent", icon: urgent },
//     2: { label: "High", icon: high },
//     3: { label: "Medium", icon: medium },
//     4: { label: "Low", icon: low },
//   };
//   const [count,setCount] =useState(1)

//   return (
//     <div className="kanban-board">
//       {Object.entries(groupedTickets).map(([group, tickets]) => (
//         <div key={group} className="kanban-column">
//           {/* Flexbox container for h3, icons, and priority image */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginBottom: "10px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               {/* Display priority image and label */}
//               <img
//                 src={priorityLabels[group]?.icon}
//                 alt={`${priorityLabels[group]?.label} Icon`}
//                 style={{ width: "24px", height: "24px" }}
//               />
//               <h3 style={{ margin: 0 }}>
//                 {priorityLabels[group]?.label || "Unknown Priority"}
//               </h3>
//               <h3 style={{ margin: 0 }}>{count+1}</h3>
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//               }}
//             >
//               <img
//                 src={add}
//                 alt="Add Icon"
//                 style={{
//                   cursor: "pointer",
//                   width: "20px",
//                   height: "20px",
//                 }}
//               />
//               <img
//                 src={three_dot}
//                 alt="Options Icon"
//                 style={{
//                   cursor: "pointer",
//                   width: "20px",
//                   height: "20px",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Render tickets for the current group */}
//           {tickets.map((ticket) => (
//             <TicketCard key={ticket.id} ticket={ticket} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// // export default KanbanBoard;
import React, { useState } from "react";
import UserCard from "./UserCard";
import add from "../../icons_FEtask/add.svg";
import three_dot from "../../icons_FEtask/three_dot.svg";
import low from "../../icons_FEtask/low_pr.svg";
import high from "../../icons_FEtask/high_pr.svg";
import medium from "../../icons_FEtask/med_pr.svg";
import noPriority from "../../icons_FEtask/No_pr.svg";
import urgent from "../../icons_FEtask/urgent_pr.svg"; // Assuming you have an icon for "Urgent"

export const UserBoard = ({ groupedTickets }) => {
  // Priority mapping with labels and images
  const priorityLabels = {
    0: { label: "No Priority", icon: noPriority },
    1: { label: "Urgent", icon: urgent },
    2: { label: "High", icon: high },
    3: { label: "Medium", icon: medium },
    4: { label: "Low", icon: low },
  };
 
  console.log("jkjk", groupedTickets);
  
  

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => {
        // Count tickets for the current priority group
        const ticketCount = tickets.length;
        console.log("kl",tickets);
        // tickets.map((ticket)=>{
        //     console.log(ticket.userId)
        //     setUser(ticket.userId)
        // })
         // Extract user name from the first ticket in the group
         const userName = tickets[0]?.userId || "Unknown User";
        
        return (
          <div key={group} className="kanban-column">
            {/* Flexbox container for h3, icons, and priority image */}
           
            
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Display priority image and label */}
                <img
                  src={priorityLabels[group]?.icon}
                  alt={`${priorityLabels[group]?.label} Icon`}
                  style={{ width: "24px", height: "24px",margin: 0  }}
                />
                <h3 style={{ margin: 0 }}>
                  {priorityLabels[group]?.label }
                </h3>
                <h3 style={{ margin: 0 }}>{userName}</h3>
                {/* Display the count of tickets */}
                <h3 style={{ margin: 0 }}>{ticketCount}</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src={add}
                  alt="Add Icon"
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                />
                <img
                  src={three_dot}
                  alt="Options Icon"
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                  }}
                />
              </div>
            </div>

            {/* Render tickets for the current group */}
            {tickets.map((ticket) => (
              <UserCard  key={ticket.id} ticket={ticket} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default UserBoard;
// import React from "react";
// import UserCard from "./UserCard";
// import add from "../../icons_FEtask/add.svg";
// import three_dot from "../../icons_FEtask/three_dot.svg";

// const UserBoard = ({ tickets }) => {
//   // Group tickets by userId
//   const groupedByUser = tickets.reduce((acc, ticket) => {
//     const userId = ticket.userId;
//     if (!acc[userId]) acc[userId] = [];
//     acc[userId].push(ticket);
//     return acc;
//   }, {});

//   return (
//     <div className="kanban-board" style={{ display: "flex", gap: "20px" }}>
//       {Object.entries(groupedByUser).map(([userId, userTickets]) => {
//         const ticketCount = userTickets.length; // Count tickets for each user

//         return (
//           <div key={userId} className="kanban-column" style={{ width: "300px" }}>
//             {/* User Header with ID and Ticket Count */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: "10px",
//                 borderBottom: "2px solid #ccc",
//                 paddingBottom: "10px",
//               }}
//             >
//               <h3 style={{ margin: 0 }}>User: {userId}</h3>
//               <span style={{ fontWeight: "bold" }}>{ticketCount} Tickets</span>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <img
//                   src={add}
//                   alt="Add Icon"
//                   style={{
//                     cursor: "pointer",
//                     width: "20px",
//                     height: "20px",
//                   }}
//                 />
//                 <img
//                   src={three_dot}
//                   alt="Options Icon"
//                   style={{
//                     cursor: "pointer",
//                     width: "20px",
//                     height: "20px",
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Render tickets for the current user */}
//             {userTickets.map((ticket) => (
//               <UserCard key={ticket.id} ticket={ticket} />
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default UserBoard;
