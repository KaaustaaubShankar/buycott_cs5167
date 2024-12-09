import React, { useState } from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails, Slider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ethicsOptions = [
  { label: "Environmental Impact", value: "Environmental Impact" },
  { label: "Waste", value: "Waste" },
  { label: "Labor Rights", value: "Labor Rights" },
  { label: "Plastic Waste", value: "Plastic Waste" },
  { label: "Sustainability", value: "Sustainability" },
  { label: "Human Rights", value: "Human Rights" },
  { label: "Material Sourcing", value: "Material Sourcing" },
  { label: "Corporate Governance", value: "Corporate Governance" },
  { label: "Workplace Welfare", value: "Workplace Welfare" },
  { label: "Craftsmanship", value: "Craftsmanship" },
];

const Filters = ({ setFilters }) => {
  const [selectedEthics, setSelectedEthics] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [minEthicsScore, setMinEthicsScore] = useState(0);

  const handleEthicsChange = (event) => {
    const value = event.target.value;
    setSelectedEthics((prev) =>
      prev.includes(value) ? prev.filter((ethic) => ethic !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    setFilters({ ethics: selectedEthics, minEthicsScore });
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
            padding: 0,
            color: "#fff",
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
              label={<Typography sx={{ color: "#fff" }}>{ethic.label}</Typography>}
              sx={{
                marginRight: 2,
                color: '#fff',
              }}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Typography sx={{ color: "#fff", mb: 1 }}>Minimum Ethics Score: {minEthicsScore}</Typography>
      <Slider
        value={minEthicsScore}
        onChange={(e, newValue) => setMinEthicsScore(newValue)}
        aria-labelledby="min-ethics-score-slider"
        valueLabelDisplay="auto"
        step={20}
        marks
        min={0}
        max={100}
        sx={{ color: "#bb86fc" }}
      />

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
