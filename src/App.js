import React from "react";
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from './pages/register';


function App() {
  return (
    <Router>
      <Navbar />
      <Box sx={{ paddingTop: 13 }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
