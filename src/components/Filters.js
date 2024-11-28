import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Filters = () => {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#1e1e1e",
        padding: 2,
        borderRight: "1px solid #333",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Filters
      </Typography>
      {/* Add filter options here */}
      <Button variant="contained" color="primary" fullWidth>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
