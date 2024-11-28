import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import Filters from "./Filters";
import Cards from "./Cards";

const ResultsPage = ({ query, cart, setCart }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "calc(100vh - 64px)", overflowY: "auto" }}>
      {/* Filters Section */}
      <Filters />

      {/* Cards Section */}
      <Box sx={{ flex: 3, padding: 2, position: "relative", overflowY: "auto" }}>
        <Button
          variant="contained"
          startIcon={<SortIcon />}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          Sort
        </Button>
        <Cards query={query} cart={cart} setCart={setCart} />
      </Box>
    </Box>
  );
};

export default ResultsPage;
