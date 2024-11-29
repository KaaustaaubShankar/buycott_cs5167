import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ query, setQuery, handleSearch, hideTitle, isLandingPage }) => {
  const [placeholder, setPlaceholder] = useState("Search...");

  useEffect(() => {
    if (isLandingPage && query === "") {
      const randomSearches = ["Explore Products", "Discover Brands", "Find Alternatives"];
      let index = 0;
      let currentText = "";
      let isDeleting = false;
      let delta = 300 - Math.random() * 100; // Random delta for typewriter effect

      const type = () => {
        const fullText = randomSearches[index];
        if (isDeleting) {
          currentText = fullText.substring(0, currentText.length - 1);
        } else {
          currentText = fullText.substring(0, currentText.length + 1);
        }

        setPlaceholder(currentText);

        if (!isDeleting && currentText === fullText) {
          delta = 1500; // Pause at end
          isDeleting = true;
        } else if (isDeleting && currentText === '') {
          isDeleting = false;
          index = (index + 1) % randomSearches.length; // Move to next sentence
          delta = 500;
        }
      };

      const interval = setInterval(type, delta);
      return () => clearInterval(interval);
    }
  }, [isLandingPage, query]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          ...(isLandingPage ? { backgroundColor: "#121212", position: "sticky", top: 0, zIndex: 1 } : { borderBottom: "1px solid #333", backgroundColor: "#1e1e1e", position: "sticky", top: 0, zIndex: 1 }),
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
          placeholder={placeholder}
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
    </>
  );
};

export default Header;
