import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ResultsPage from "./components/ResultsPage";

const App = () => {
  const [view, setView] = useState("search"); // Tracks current view ("search" or "results")
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setView("results");
    }
  };



  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#121212", color: "#fff", overflowY: "auto" }}>
      {view === "results" && (
        <Header query={query} setQuery={setQuery} handleSearch={handleSearch} cart={cart} />
      )}
      {view === "search" && (
        <LandingPage
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      )}
      {view === "results" && (
        <ResultsPage query={query} cart={cart} setCart={setCart} />
      )}
    </Box>
  );
};

export default App;
