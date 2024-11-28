import React from "react";
import { Box, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

const LandingPage = ({ query, setQuery, handleSearch }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 3,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(135deg, #fff 0%, #bb86fc 75%)", // Gradient transition made quicker by changing 100% to 50%
          backgroundClip: "text",
          textFillColor: "transparent",
          mb: 4,
        }}
      >
        Buycott
      </Typography>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} hideTitle={true} />
    </Box>
  );
};

export default LandingPage;
