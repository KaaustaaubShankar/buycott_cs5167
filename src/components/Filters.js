import React, { useState } from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const [expanded, setExpanded] = useState(false);

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
      <Typography variant="h6" sx={{ mb: 2, color: "#fff" }}>
        Filters
      </Typography>

      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        sx={{
          boxShadow: 'none',
          border: 'none',
          backgroundColor: 'transparent',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            padding: 0,  // Remove padding for a clean look
            color: "#fff", // Set the font color to white
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#fff" }}>Ethical Considerations</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0, backgroundColor: 'transparent' }}>
          {ethicsOptions.map((ethic) => (
            <FormControlLabel
              key={ethic.value}
              control={
                <Checkbox
                  value={ethic.value}
                  onChange={handleEthicsChange}
                  sx={{
                    color: "#bb86fc", 
                    '&.Mui-checked': { color: '#bb86fc' },
                  }}
                />
              }
              label={<Typography sx={{ color: "#fff" }}>{ethic.label}</Typography>} // White text for label
              sx={{
                marginRight: 2, // Space between checkboxes
                color: '#fff', // Ensure the label is white
              }}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={applyFilters}
        sx={{
          mt: 2,
          backgroundColor: '#bb86fc',
          '&:hover': { backgroundColor: '#9b6fbc' },
        }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
