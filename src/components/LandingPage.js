import React from "react";
import { Box, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";

const LandingPage = ({ query, setQuery, handleSearch, cart, setCart, handleOpenCartModal }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "relative",
        
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 24,
          right: 16,
          zIndex: 10,
        }}
      >
        <IconButton onClick={handleOpenCartModal}>
          <Badge badgeContent={cart.length} color="</Badge>primary">
            <ShoppingCartIcon sx={{ color: "#bb86fc" }} />
          </Badge>
        </IconButton>
      </Box>

      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(135deg, #fff 0%, #bb86fc 75%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          mb: 2,
        }}
      >
        Buycott
      </Typography>
      <Typography variant="h6" sx={{ color: "#FFFFF" }}>
      Shop with purpose, Buycott for change.
      </Typography>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} hideTitle={true} isLandingPage={true} />
    </Box>
  );
};

export default LandingPage;
