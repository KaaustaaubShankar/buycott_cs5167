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
        variant="h4"
        sx={{ fontWeight: "bold", color: "#bb86fc", mb: 4 }}
      >
        Buycott
      </Typography>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} hideTitle={true} />
    </Box>
  );
};

export default LandingPage;
