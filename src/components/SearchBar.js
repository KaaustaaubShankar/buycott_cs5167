import React from "react";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ query, setQuery, handleSearch, hideTitle, isLandingPage }) => {
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
        zIndex: 1,
      }}
    >
        {!hideTitle && (
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#bb86fc", mr: 2 }}
          >
            Buycott
          </Typography>
        )}
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
          ...(isLandingPage ? { width: '50vw' } : {}),
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
    </Box>
  );
};

export default Header;
