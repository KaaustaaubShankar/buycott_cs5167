import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ResultsPage from "./components/ResultsPage";
import CartModal from "./components/CartModal";

const App = () => {
  const [view, setView] = useState("search");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleSearch = () => {
    if (query.trim() !== "") {
      setView("results");
    }
  };

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#121212", color: "#fff", overflowY: "auto" }}>
      {view !== "search" && (
        <Header query={query} setQuery={setQuery} handleSearch={handleSearch} cart={cart} setCart={setCart} setView={setView} />
      )}
      {view === "search" && (
        <LandingPage
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          cart={cart}
          setCart={setCart}
          handleOpenCartModal={handleOpenCartModal}
        />
      )}
      {view === "results" && (
        <ResultsPage query={query} cart={cart} setCart={setCart} />
      )}
      <CartModal open={cartModalOpen} handleClose={handleCloseCartModal} cart={cart} setCart={setCart} />
    </Box>
  );
};

export default App;
