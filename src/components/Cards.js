import React, { useState } from "react";
import { Grid, Box, Typography, Button, Rating, IconButton, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import InfoModal from "./InfoModal";

const Cards = ({ query, cart, setCart, filters }) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPros, setCurrentPros] = useState([]);
  const [currentCons, setCurrentCons] = useState([]);
  const [currentEthics, setCurrentEthics] = useState([]);
  const [currentAlternatives, setCurrentAlternatives] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const cardData = [
    {
      id: 2,
      image: "plastic_bottle.png",
      name: "Plastic Water Bottle",
      rating: 3.8,
      score: 70,
      ethics: ["Environmental Impact", "Waste"],
      platforms: [
        { name: "Amazon", price: "$12.99" },
        { name: "Target", price: "$14.00" },
      ],
      pros: ["Inexpensive", "Lightweight"],
      cons: ["Single-use plastic", "Non-recyclable"],
      alternativeProductIds: ["Eco-Friendly Water Bottle", "Glass Water Bottle"], // Alternative titles
    },
    {
      id: 3,
      image: "traditional_earphones.png",
      name: "Traditional Earphones",
      rating: 4.0,
      score: 74,
      ethics: ["Labor Rights", "Plastic Waste"],
      platforms: [
        { name: "Best Buy", price: "$19.99" },
        { name: "Target", price: "$18.49" },
      ],
      pros: ["Affordable", "Compact"],
      cons: ["Made with non-recyclable plastic", "Labor practices not disclosed"],
      alternativeProductIds: ["Wireless Earbuds", "Noise-Cancelling Headphones"], // Alternative titles
    },
    {
      id: 4,
      image: "organic_cotton_shirt.png",
      name: "Organic Cotton T-Shirt",
      rating: 4.5,
      score: 88,
      ethics: ["Environmental Impact", "Human Rights"],
      platforms: [
        { name: "Amazon", price: "$25.99" },
        { name: "Etsy", price: "$29.50" },
      ],
      pros: ["100% organic cotton", "Transparent labor practices"],
      cons: ["Higher cost", "Limited sizes"],
      alternativeProductIds: ["Basic Shirt", "Recycled Polyester Jacket"], // Alternative titles
    },
    {
      id: 5,
      image: "eco_friendly_bottle.png",
      name: "Eco-Friendly Water Bottle",
      rating: 4.7,
      score: 92,
      ethics: ["Environmental Impact", "Sustainability"],
      platforms: [
        { name: "Amazon", price: "$19.99" },
        { name: "eBay", price: "$21.49" },
      ],
      pros: ["Made from recycled materials", "Reusable"],
      cons: ["Plastic cap", "Limited color options"],
      alternativeProductIds: ["Plastic Water Bottle", "Stainless Steel Water Bottle"], // Alternative titles
    },
    {
      id: 6,
      image: "portable_power_bank.png",
      name: "Portable Power Bank",
      rating: 4.3,
      score: 80,
      ethics: ["Sustainability", "Recycling"],
      platforms: [
        { name: "Amazon", price: "$39.99" },
        { name: "Best Buy", price: "$41.00" },
      ],
      pros: ["Made from recycled materials", "Portable"],
      cons: ["Non-recyclable components", "Can be bulky"],
      alternativeProductIds: ["Solar Charger", "Eco-Friendly Water Bottle"], // Alternative titles
    },
    {
      id: 7,
      image: "recycled_polyester_jacket.png",
      name: "Recycled Polyester Jacket",
      rating: 4.4,
      score: 85,
      ethics: ["Environmental Impact", "Sustainability"],
      platforms: [
        { name: "Patagonia", price: "$109.99" },
        { name: "Etsy", price: "$115.00" },
      ],
      pros: ["Made from recycled polyester", "Durable"],
      cons: ["Higher price", "Not as stylish as other jackets"],
      alternativeProductIds: ["Organic Cotton T-Shirt", "Waterproof Outdoor Jacket"], // Alternative titles
    },
    {
      id: 8,
      image: "laptop_stand.png",
      name: "Laptop Stand",
      rating: 4.3,
      score: 81,
      ethics: ["Corporate Governance", "Workplace Welfare"],
      platforms: [
        { name: "Amazon", price: "$22.99" },
        { name: "Walmart", price: "$25.00" },
      ],
      pros: ["Affordable", "Ergonomic design"],
      cons: ["Made from plastic", "Not adjustable"],
      alternativeProductIds: ["Wooden Laptop Stand", "Standing Desk Converter"], // Alternative titles
    },
    {
      id: 9,
      image: "noise_cancelling_headphones.png",
      name: "Noise-Cancelling Headphones",
      rating: 4.7,
      score: 90,
      ethics: ["Labor Rights", "Material Sourcing"],
      platforms: [
        { name: "Amazon", price: "$179.99" },
        { name: "Best Buy", price: "$185.00" },
      ],
      pros: ["Superior sound quality", "Comfortable"],
      cons: ["Expensive", "Plastic parts"],
      alternativeProductIds: ["Wireless Earbuds", "Traditional Earphones"], // Alternative titles
    },
    {
      id: 10,
      image: "stainless_steel_bottle.png",
      name: "Stainless Steel Water Bottle",
      rating: 4.6,
      score: 89,
      ethics: ["Environmental Impact", "Reusability"],
      platforms: [
        { name: "Amazon", price: "$29.99" },
        { name: "Target", price: "$27.00" },
      ],
      pros: ["Insulated", "Durable"],
      cons: ["Higher cost", "Heavier than plastic bottles"],
      alternativeProductIds: ["Eco-Friendly Water Bottle", "Glass Water Bottle"], // Alternative titles
    },
    {
      id: 11,
      image: "solar_charger.png",
      name: "Solar Charger",
      rating: 4.2,
      score: 76,
      ethics: ["Sustainability", "Renewable Energy"],
      platforms: [
        { name: "Amazon", price: "$49.99" },
        { name: "Walmart", price: "$52.00" },
      ],
      pros: ["Eco-friendly", "Portable"],
      cons: ["Slow charging", "Expensive"],
      alternativeProductIds: ["Portable Power Bank", "Battery-Powered Lantern"], // Alternative titles
    },
    {
      id: 12,
      image: "wooden_laptop_stand.png",
      name: "Wooden Laptop Stand",
      rating: 4.5,
      score: 83,
      ethics: ["Sustainability", "Craftsmanship"],
      platforms: [
        { name: "Etsy", price: "$49.99" },
        { name: "Amazon", price: "$47.00" },
      ],
      pros: ["Eco-friendly", "Aesthetic design"],
      cons: ["Higher cost", "Limited adjustability"],
      alternativeProductIds: ["Laptop Stand", "Standing Desk Converter"], // Alternative titles
    }
  ];
  

  // Filter card data based on the query and selected filters
  const filteredCardData = cardData.filter(card => {
    const matchesQuery = card.name.toLowerCase().includes(query.toLowerCase());
    const matchesEthics = filters && filters.ethics && (filters.ethics.length === 0 || filters.ethics.some(ethic => card.ethics.includes(ethic)));

    return matchesQuery && matchesEthics;
  });

  // Sort filtered card data based on the selected sort order
  const sortedCardData = filteredCardData.sort((a, b) => {
    const priceA = parseFloat(a.platforms[0].price.replace(/[^0-9.-]+/g, "")); // Extract numeric value from price
    const priceB = parseFloat(b.platforms[0].price.replace(/[^0-9.-]+/g, ""));
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA; // Ascending or descending
  });

  const handleAddToCart = (card, platform) => {
    const selectedPlatform = card.platforms.find(p => p.name === platform.name);
    setCart([...cart, { product: card.name, platform: selectedPlatform.name, price: selectedPlatform.price }]);
  };

  const handleOpenModal = (pros, cons, ethics, alternatives) => {
    setCurrentPros(pros);
    setCurrentCons(cons);
    setCurrentEthics(ethics);
    setCurrentAlternatives(alternatives);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="h6" sx={{ color: "#fff" }}>Products</Typography>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            labelId="sort-label"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            sx={{ color: "#fff", '& .MuiSelect-icon': { color: '#fff' }, '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' } }}
          >
            <MenuItem value="asc">Price: Low to High</MenuItem>
            <MenuItem value="desc">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {sortedCardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#1e1e1e",
                padding: 2,
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                alignItems: "center",
              }}
            >
              {/* Left Section */}
              <Box sx={{ flex: 1, textAlign: "center" }}>
                <Box
                  component="img"
                  src={card.image}
                  alt="Product Image"
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "8px",
                    mb: 2,
                  }}
                />
                <Rating
                  value={card.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 1 }}
                  getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
                  label
                  emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                />
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", color: "#bb86fc" }}
                >
                  Score: {card.score}
                  <IconButton onClick={() => handleOpenModal(card.pros, card.cons, card.ethics, card.alternativeProductIds)} sx={{ ml: 1 }}>
                    <InfoIcon sx={{ color: "#bb86fc" }} />
                  </IconButton>
                </Typography>
              </Box>

              {/* Right Section */}
              <Box sx={{ flex: 2, ml: 2 }}>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  {card.name}
                </Typography>
                {card.platforms.map((platform, idx) => (
                  <Button
                    key={idx}
                    variant="contained"
                    size="small"
                    sx={{
                      width: "100%",
                      justifyContent: "space-between",
                      backgroundColor: "#333",
                      color: "#fff",
                      mb: 1,
                      "&:hover": {
                        backgroundColor: "#bb86fc",
                      },
                    }}
                    onClick={() => handleAddToCart(card, platform)}
                  >
                    <span style={{ marginRight: '8px' }}>{platform.name}</span>
                    <span style={{ marginRight: '8px' }}>{platform.price}</span>
                    <ShoppingCartIcon />
                  </Button>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Pros and Cons */}
      <InfoModal open={openModal} handleClose={handleCloseModal} pros={currentPros} cons={currentCons} ethics={currentEthics} alternatives={currentAlternatives} />
    </>
  );
};

export default Cards;
