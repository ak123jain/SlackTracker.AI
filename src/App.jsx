

import { Routes, Route } from "react-router-dom";

// Components

 
// Pages
import Home from "./Pages/Home";
 
import { useEffect } from "react";
import axios from "axios";
 



const App = () => {

  // for resolving backend issue
  useEffect(() => {
    const pingBackend = () => {
      axios
        .get(`${import.meta.env.VITE_SERVER_URL}/health`)
        .then((res) => console.log("✅ Pinged backend", res.status))
        .catch((err) => console.error("❌ Ping failed", err));
    };

    pingBackend(); // immediate ping
    const interval = setInterval(pingBackend, 15 * 60 * 1000); // every 15 min

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
     
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
     
  );
};

export default App;
