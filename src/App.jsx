// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from './components/Header';
// import KanbanBoard from './components/KanbanBoard';
// import UserBoard from './components/UserBoard';
// import './App.css';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupBy, setGroupBy] = useState('status'); // Default grouping
//   const [sortBy, setSortBy] = useState('priority'); // Default sorting

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const { data } = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         console.log(data.tickets);
        
//         setTickets(data.tickets);
//       } catch (error) {
//         console.error('Error fetching tickets:', error);
//       }
//     };

//     fetchTickets();
//   }, []);

//   const groupTickets = () => {
//     const grouped = tickets.reduce((acc, ticket) => {
//       const key = ticket[groupBy];
//       if (!acc[key]) acc[key] = [];
//       acc[key].push(ticket);
//       return acc;
//     }, {});

//     // Sort within each group
//     Object.keys(grouped).forEach((key) => {
//       grouped[key].sort((a, b) => {
//         if (sortBy === 'priority') return b.priority - a.priority;
//         if (sortBy === 'title') return a.title.localeCompare(b.title);
//         return 0;
//       });
//     });

//     return grouped;
//   };

//   return (
//     <div className="app">
//       <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
//       <KanbanBoard groupedTickets={groupTickets()} />
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import UserBoard from './components/UserBoard';
import PriorityBoard from './components/PriorityBoard';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // Default grouping
  const [sortBy, setSortBy] = useState('priority'); // Default sorting

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const { data } = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        console.log(data.tickets);
        setTickets(data.tickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const groupTickets = () => {
    const grouped = tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});

    // Sort within each group
    Object.keys(grouped).forEach((key) => {
      grouped[key].sort((a, b) => {
        if (sortBy === 'priority') return b.priority - a.priority;
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return 0;
      });
    });

    return grouped;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route for KanbanBoard */}
          <Route
            path="/"
            element={
              <>
                <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
                <KanbanBoard groupedTickets={groupTickets()} />
              </>
            }
          />
          {/* Route for UserBoard */}
          <Route
            path="/user"
            element={
              <>
                <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
                <UserBoard groupedTickets={groupTickets()} />
              </>
            }
          />
          <Route
            path="/priority"
            element={
              <>
                <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
                <PriorityBoard groupedTickets={groupTickets()} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

