// import React, { useState } from "react";
// import down from "../../icons_FEtask/down.svg";
// import display from "../../icons_FEtask/Display.svg";

// const Header = ({ setGroupBy, setSortBy }) => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   return (
//     <>
//       <div style={{ position: "relative", display: "inline-block" }}>
//         {/* Button */}
//         <button
//           onClick={toggleDropdown}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "8px",
//             backgroundColor: "#e5e7eb", // Light gray background
//             color: "#000", // Black text color
//             border: "none",
//             borderRadius: "8px",
//             padding: "8px 16px",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         >
//           <img src={display} alt="Display Icon" style={{ width: "20px", height: "20px" }} />
//           Display
//           <img src={down} alt="Dropdown Icon" style={{ width: "16px", height: "16px" }} />
//         </button>

//         {/* Dropdown Menu */}
//         {showDropdown && (
//           <div
//             className="header"
//             style={{
//               position: "absolute", // Ensures it pops up relative to the button
//               top: "100%", // Places it just below the button
//               left: "0",
//               marginTop: "10px",
//               zIndex: 9999, // Ensures it appears above other elements
//               border: "1px solid #e0e0e0",
//               borderRadius: "8px",
//               padding: "16px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Slightly deeper shadow for emphasis
//               backgroundColor: "#fff",
//               width: "200px", // Adjust width as needed
//             }}
//           >
//             <div className="dropdowns" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//               <label>
//                 <span style={{ marginRight: "8px", color: "#121212" }}>Group By:</span>
//                 <select
//                   onChange={(e) => setGroupBy(e.target.value)}
//                   style={{
//                     padding: "4px 8px",
//                     border: "1px solid #d1d5db",
//                     borderRadius: "4px",
//                     backgroundColor: "#f9fafb",
//                     color: "#000", // Black text
//                   }}
//                 >
//                   <option value="status">Status</option>
//                   <option value="user">User</option>
//                   <option value="priority">Priority</option>
//                 </select>
//               </label>
//               <label>
//                 <span style={{ marginRight: "8px", color: "#111827" }}>Sort By:</span>
//                 <select
//                   onChange={(e) => setSortBy(e.target.value)}
//                   style={{
//                     padding: "4px 8px",
//                     border: "1px solid #d1d5db",
//                     borderRadius: "4px",
//                     backgroundColor: "#f9fafb",
//                     color: "#000", // Black text
//                   }}
//                 >
//                   <option value="priority">Priority</option>
//                   <option value="title">Title</option>
//                 </select>
//               </label>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import down from '../../icons_FEtask/down.svg';
import display from '../../icons_FEtask/Display.svg';

const Header = ({ setGroupBy, setSortBy }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleGroupByChange = (value) => {
    setGroupBy(value);
    setShowDropdown(false);

    // Navigate to `/user` if "Group By: User" is selected
    if (value === 'user') {
        navigate('/user');
      } else if (value === 'priority') {
        navigate('/priority');
      }else if (value === 'status') {
        navigate('/');
      }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={toggleDropdown}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: '#e5e7eb', // Light gray background
            color: '#000', // Black text color
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <img src={display} alt="Display Icon" style={{ width: '20px', height: '20px' }} />
          Display
          <img src={down} alt="Dropdown Icon" style={{ width: '16px', height: '16px' }} />
        </button>
      </div>

      {showDropdown && (
        <div
          className="header"
          style={{
            marginTop: '10px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            width: 'fit-content',
          }}
        >
          <div
            className="dropdowns"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <label>
              <span style={{ marginRight: '8px', color: '#121212' }}>Group By:</span>
              <select
                onChange={(e) => handleGroupByChange(e.target.value)}
                style={{
                  padding: '4px 8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  backgroundColor: '#f9fafb',
                  color: '#000',
                }}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </label>
            <label>
              <span style={{ marginRight: '8px', color: '#111827' }}>Sort By:</span>
              <select
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '4px 8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  backgroundColor: '#f9fafb',
                  color: '#000',
                }}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

