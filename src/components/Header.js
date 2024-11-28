import React, { useState } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartModal from "./CartModal";

const Header = ({ query, setQuery, handleSearch, cart, setCart}) => {
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        borderBottom: "1px solid #333",
        backgroundColor: "#1e1e1e",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#bb86fc", mr: 2 }}
      >
        Buycott
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        sx={{
          flex: 1,
          backgroundColor: "#121212",
          borderRadius: "8px",
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#a1a1a1",
            },
            "&:hover fieldset": {
              borderColor: "#bb86fc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bb86fc",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon sx={{ color: "#a1a1a1" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton sx={{ ml: "auto" }} onClick={handleOpenCartModal}>
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon sx={{ color: "#bb86fc" }} />
        </Badge>
      </IconButton>

      <CartModal open={cartModalOpen} handleClose={handleCloseCartModal} cart={cart} setCart={setCart} />
    </Box>
  );
};

export default Header;
