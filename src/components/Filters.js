import React, { useState } from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";

const ethicsOptions = [
  { label: "Human Rights", value: "Human Rights" },
  { label: "Environmental Impact", value: "Environmental Impact" },
  { label: "Animal Welfare", value: "Animal Welfare" },
  { label: "Corporate Governance", value: "Corporate Governance" },
  { label: "Labor Rights", value: "Labor Rights" },
  { label: "Health & Safety", value: "Health & Safety" },
];

const Filters = ({ setFilters }) => {
  const [selectedEthics, setSelectedEthics] = useState([]);

  const handleEthicsChange = (event) => {
    const value = event.target.value;
    setSelectedEthics((prev) =>
      prev.includes(value) ? prev.filter((ethic) => ethic !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    setFilters({ ethics: selectedEthics });
  };

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

      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Ethical Considerations
      </Typography>
      {ethicsOptions.map((ethic) => (
        <FormControlLabel
          key={ethic.value}
          control={
            <Checkbox
              value={ethic.value}
              onChange={handleEthicsChange}
              sx={{ color: "#bb86fc", '&.Mui-checked': { color: '#bb86fc' } }}
            />
          }
          label={ethic.label}
        />
      ))}

      <Button variant="contained" color="primary" fullWidth onClick={applyFilters} sx={{ mt: 2 }}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
