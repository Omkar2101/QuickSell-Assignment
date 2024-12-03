
// import React, { useState } from "react";
// import UserCard from "./UserCard";
// import add from "../../icons_FEtask/add.svg";
// import three_dot from "../../icons_FEtask/three_dot.svg";
// import low from "../../icons_FEtask/low_pr.svg";
// import high from "../../icons_FEtask/high_pr.svg";
// import medium from "../../icons_FEtask/med_pr.svg";
// import noPriority from "../../icons_FEtask/No_pr.svg";
// import urgent from "../../icons_FEtask/urgent_pr.svg"; // Assuming you have an icon for "Urgent"
// import TicketCard from "./TicketCard";
// import todo from "../../icons_FEtask/todo.svg";
// import inpgres from "../../icons_FEtask/inpgres.svg"
// import Backlog from "../../icons_FEtask/Backlog.svg"

// const KanbanBoard = ({ groupedTickets }) => {
//   // Priority mapping with labels and images
//   const priorityLabels = {
//     0: { label: "No Priority", icon: noPriority },
//     1: { label: "Urgent", icon: urgent },
//     2: { label: "High", icon: high },
//     3: { label: "Medium", icon: medium },
//     4: { label: "Low", icon: low },
//   };
//   const icons = {
//     "Todo": { icon: todo },
//     "In progress": { icon: inpgres },
//     "Backlog": { icon: Backlog },
//   };

//   return (
//     <div className="kanban-board">
//       {Object.entries(groupedTickets).map(([group, tickets]) => {
//         // Count tickets for the current priority group
//         const ticketCount = tickets.length;
//         console.log("kl",tickets);
//         const pr =tickets[0].status
//         console.log(pr);
        
        
//         return (
//           <div key={group} className="kanban-column">
//             {/* Flexbox container for h3, icons, and priority image */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: "10px",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 {/* Display priority image and label */}
//                 <img
//                   src={icons[pr.icon]}
                
//                   style={{ width: "24px", height: "24px" }}
//                 />
              
//                 <h3 style={{ margin: 0 }}>{pr}</h3>
//                 {/* Display the count of tickets */}
//                 <h3 style={{ margin: 0 }}>{ticketCount}</h3>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                 }}
//               >
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

//             {/* Render tickets for the current group */}
//             {tickets.map((ticket) => (
//               <TicketCard key={ticket.id} ticket={ticket} />
//             ))}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default KanbanBoard;
import React from "react";
import TicketCard from "./TicketCard";
import add from "../../icons_FEtask/add.svg";
import three_dot from "../../icons_FEtask/three_dot.svg";
import todo from "../../icons_FEtask/todo.svg";
import inpgres from "../../icons_FEtask/inpgres.svg";
import Backlog from "../../icons_FEtask/Backlog.svg";

import low from "../../icons_FEtask/low_pr.svg";
import high from "../../icons_FEtask/high_pr.svg";
import medium from "../../icons_FEtask/med_pr.svg";
import noPriority from "../../icons_FEtask/No_pr.svg";
import urgent from "../../icons_FEtask/urgent_pr.svg"; // Assuming you have an icon for "Urgent"



const KanbanBoard = ({ groupedTickets }) => {
  const icons = {
    "Todo": { icon: todo },
    "In progress": { icon: inpgres },
    "Backlog": { icon: Backlog },
  };
  const priorityLabels = {
        0: { label: "No Priority", icon: noPriority },
        1: { label: "Urgent", icon: urgent },
        2: { label: "High", icon: high },
        3: { label: "Medium", icon: medium },
        4: { label: "Low", icon: low },
      };
      //priority gives number

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, tickets]) => {
        const ticketCount = tickets.length;
        const status = tickets[0]?.status; // Access the status of the first ticket in the group
        const priority = tickets[0]?.priority
        const statusIcon = icons[status]?.icon; // Fetch the corresponding icon for the status
        console.log("grop",group);
        console.log("pro",priority);
        

        return (
          <div key={group} className="kanban-column">
            {/* Header section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Display the status icon */}
                {statusIcon && (
                  <img
                    // src={statusIcon}
                    src={icons[status].icon}
                    alt={`${status} Icon`}
                    style={{ width: "24px", height: "24px" }}
                  />
                )}
                <h3 style={{ margin: 0 }}>{status}</h3>
                <h3 style={{ margin: 0 }}>{ticketCount}</h3>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
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
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;

