import React, { useState } from "react";
import { Box, Typography, IconButton, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "./SearchBar";
import CategoriesModal from "./CategoriesModal";
import LearnMoreModal from "./LearnMoreModal";

const LandingPage = ({ query, setQuery, handleSearch, cart, setCart, handleOpenCartModal }) => {
  const [openCategoriesModal, setOpenCategoriesModal] = useState(false);
  const [openLearnMoreModal, setOpenLearnMoreModal] = useState(false);

  const handleOpenCategoriesModal = () => {
    setOpenCategoriesModal(true);
  };

  const handleCloseCategoriesModal = () => {
    setOpenCategoriesModal(false);
  };

  const handleOpenLearnMoreModal = () => {
    setOpenLearnMoreModal(true);
  };

  const handleCloseLearnMoreModal = () => {
    setOpenLearnMoreModal(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        position: "relative",
        px: 2,
      }}
    >
      {/* Cart Icon */}
      <Box
        sx={{
          position: "absolute",
          top: 24,
          right: 16,
          zIndex: 10,
        }}
      >
        <IconButton onClick={handleOpenCartModal}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon sx={{ color: "#bb86fc" }} />
          </Badge>
        </IconButton>
      </Box>

      {/* Hero Section */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          background: "linear-gradient(135deg, #fff 0%, #bb86fc 75%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          textAlign: "center",
          mb: 2,
        }}
      >
        Buycott
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#FFFFFF",
          textAlign: "center",
          mb: 4,
        }}
      >
        Shop Amazon, Ebay, and more with Buycott.
      </Typography>

      {/* Search Bar */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        hideTitle={true}
        isLandingPage={true}
      />

      {/* Suggested Search Terms */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ color: "#bbb", textAlign: "center" }}>
          Try searching for: <strong>"Eco-Friendly Water Bottle"</strong>, <strong>"Organic Cotton T-Shirt"</strong>, or <strong>"Fast Fashion Hoodie"</strong>
        </Typography>
      </Box>

      {/* Additional Content (Optional) */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {/*        <Button variant="contained" sx={{ backgroundColor: "#bb86fc" }} onClick={handleOpenCategoriesModal}>
          Explore Categories
        </Button> */}

        <Button variant="outlined" sx={{ borderColor: "#bb86fc", color: "#bb86fc" }} onClick={handleOpenLearnMoreModal}>
          Learn More
        </Button>
      </Box>

      {/* Modals */}
      {/*<CategoriesModal open={openCategoriesModal} handleClose={handleCloseCategoriesModal} /> */}
      <LearnMoreModal open={openLearnMoreModal} handleClose={handleCloseLearnMoreModal} />
    </Box>
  );
};

export default LandingPage;
