import React, { useState } from "react";
import { Box } from "@mui/material";
import Filters from "./Filters";
import Cards from "./Cards";

const ResultsPage = ({ query, cart, setCart }) => {
  const [filters, setFilters] = useState({ ethics: [] });

  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "calc(100vh - 64px)", overflowY: "auto" }}>
      {/* Filters Section */}
      <Filters setFilters={setFilters} />

      {/* Cards Section */}
      <Box sx={{ flex: 3, padding: 2, position: "relative", overflowY: "auto" }}>
        <Cards query={query} cart={cart} setCart={setCart} filters={filters} />
      </Box>
    </Box>
  );
};

export default ResultsPage;
