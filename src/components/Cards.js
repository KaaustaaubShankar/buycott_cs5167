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
  const [sortOrder, setSortOrder] = useState("asc");

  const cardData = [
    {
      id: 1,
      image: "ecofriendly_water_bottle.png",
      name: "Eco-Friendly Water Bottle",
      rating: 4.5,
      score: 89,
      ethics: ["Environmental Impact", "Labor Rights"],
      platforms: [
        { name: "Amazon", price: "$19.99" },
        { name: "eBay", price: "$21.49" },
      ],
      pros: ["Made from recycled materials", "Produced using ethical labor practices"],
      cons: ["Single-use plastic packaging", "Unethical labor practices"],
    },
    {
      id: 2,
      image: "smartphone_stand.png",
      name: "Smartphone Stand",
      rating: 4.2,
      score: 75,
      ethics: ["Corporate Governance", "Labor Rights"],
      platforms: [
        { name: "Walmart", price: "$17.99" },
        { name: "Target", price: "$20.00" },
      ],
      pros: ["Affordable price point", "Locally manufactured"],
      cons: ["Unsafe working conditions", "Non-recyclable materials"],
    },
    {
      id: 3,
      image: "wireless_earbuds.png",
      name: "Wireless Earbuds",
      rating: 4.7,
      score: 95,
      ethics: ["Animal Welfare", "Environmental Impact", "Labor Rights"],
      platforms: [
        { name: "Amazon", price: "$89.99" },
        { name: "Best Buy", price: "$92.99" },
        { name: "Target", price: "$85.00" },
      ],
      pros: ["Sustainable packaging", "Long-lasting product lifespan"],
      cons: ["Child labor history", "Plastic waste", "Not recyclable"],
    },
    {
      id: 4,
      image: "cotton_tshirt.png",
      name: "Organic Cotton T-Shirt",
      rating: 4.3,
      score: 82,
      ethics: ["Human Rights", "Labor Rights"],
      platforms: [
        { name: "Amazon", price: "$22.99" },
        { name: "Etsy", price: "$25.50" },
      ],
      pros: ["100% organic cotton", "Fair Trade certified"],
      cons: ["Pesticides used in cotton farming", "Lack of transparency in labor sourcing"],
    },
    {
      id: 5,
      image: "powerbank.png",
      name: "Portable Power Bank",
      rating: 4.0,
      score: 70,
      ethics: ["Environmental Impact", "Health & Safety"],
      platforms: [
        { name: "Amazon", price: "$39.99" },
        { name: "Best Buy", price: "$42.99" },
      ],
      pros: ["Energy-efficient", "Made with recyclable materials"],
      cons: ["Deforestation-linked company", "Non-recyclable batteries"],
    },
    {
      id: 6,
      image: "hoodie.png",
      name: "Fast Fashion Hoodie",
      rating: 3.8,
      score: 60,
      ethics: ["Labor Rights", "Health & Safety"],
      platforms: [
        { name: "Amazon", price: "$29.99" },
        { name: "Walmart", price: "$32.00" },
      ],
      pros: ["Affordable", "Comfortable fit"],
      cons: ["Sweatshop labor", "Textile waste", "Harmful environmental impact"],
    },
    {
      id: 7,
      image: "lawn_mower.png",
      name: "Battery-Powered Lawn Mower",
      rating: 3.5,
      score: 65,
      ethics: ["Environmental Impact", "Animal Welfare"],
      platforms: [
        { name: "Ace", price: "$179.99" },
        { name: "Lowe's", price: "$189.99" },
      ],
      pros: ["Environmentally friendly alternative to gas-powered mowers", "Quiet operation"],
      cons: ["Harmful battery disposal", "Non-durable parts lead to frequent replacements"],
    }
  ];

  // Filter card data based on the query and selected filters
  const filteredCardData = cardData.filter(card => {
    const matchesQuery = card.name.toLowerCase().includes(query.toLowerCase());
    const matchesEthics = filters && filters.ethics && (filters.ethics.length === 0 || filters.ethics.some(ethic => !card.ethics.includes(ethic)));

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

  const handleOpenModal = (pros, cons) => {
    setCurrentPros(pros);
    setCurrentCons(cons);
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
                  <IconButton onClick={() => handleOpenModal(card.pros, card.cons)} sx={{ ml: 1 }}>
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
      <InfoModal open={openModal} handleClose={handleCloseModal} pros={currentPros} cons={currentCons} />
    </>
  );
};

export default Cards;
