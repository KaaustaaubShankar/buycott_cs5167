import React, { useState } from "react";
import { Grid, Box, Typography, Button, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cards = ({ query ,cart, setCart}) => {
    const cardData = [
        {
          id: 1,
          image: "https://via.placeholder.com/150?text=Product+1",
          name: "Eco-Friendly Water Bottle",
          rating: 4.5,
          score: 89,
          platforms: [
            { name: "Amazon", price: "$19.99" },
            { name: "eBay", price: "$21.49" },
          ],
          pros: ["Made from recycled materials", "Produced using ethical labor practices"],
          cons: ["Single-use plastic packaging", "Unethical labor practices"],
        },
        {
          id: 2,
          image: "https://via.placeholder.com/150?text=Product+2",
          name: "Smartphone Stand",
          rating: 4.2,
          score: 75,
          platforms: [
            { name: "Walmart", price: "$17.99" },
            { name: "Target", price: "$20.00" },
          ],
          pros: ["Affordable price point", "Locally manufactured"],
          cons: ["Unsafe working conditions", "Non-recyclable materials"],
        },
        {
          id: 3,
          image: "https://via.placeholder.com/150?text=Product+3",
          name: "Wireless Earbuds",
          rating: 4.7,
          score: 95,
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
          image: "https://via.placeholder.com/150?text=Product+4",
          name: "Organic Cotton T-Shirt",
          rating: 4.3,
          score: 82,
          platforms: [
            { name: "Amazon", price: "$22.99" },
            { name: "Etsy", price: "$25.50" },
          ],
          pros: ["100% organic cotton", "Fair Trade certified"],
          cons: ["Pesticides used in cotton farming", "Lack of transparency in labor sourcing"],
        },
        {
          id: 5,
          image: "https://via.placeholder.com/150?text=Product+5",
          name: "Portable Power Bank",
          rating: 4.0,
          score: 70,
          platforms: [
            { name: "Amazon", price: "$39.99" },
            { name: "Best Buy", price: "$42.99" },
          ],
          pros: ["Energy-efficient", "Made with recyclable materials"],
          cons: ["Deforestation-linked company", "Non-recyclable batteries"],
        },
        {
          id: 6,
          image: "https://via.placeholder.com/150?text=Product+6",
          name: "Fast Fashion Hoodie",
          rating: 3.8,
          score: 60,
          platforms: [
            { name: "Amazon", price: "$29.99" },
            { name: "Walmart", price: "$32.00" },
          ],
          pros: ["Affordable", "Comfortable fit"],
          cons: ["Sweatshop labor", "Textile waste", "Harmful environmental impact"],
        },
        {
          id: 7,
          image: "https://via.placeholder.com/150?text=Product+7",
          name: "Battery-Powered Lawn Mower",
          rating: 3.5,
          score: 65,
          platforms: [
            { name: "Ace", price: "$179.99" },
            { name: "Lowe's", price: "$189.99" },
          ],
          pros: ["Environmentally friendly alternative to gas-powered mowers", "Quiet operation"],
          cons: ["Harmful battery disposal", "Non-durable parts lead to frequent replacements"],
        }
      ];
      

  // Filter card data based on the query
  const filteredCardData = cardData.filter(card =>
    card.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (product, platform) => {
    setCart([...cart, { product, platform }]);
    console.log(cart)
  };

  return (
    <Grid container spacing={2} sx={{ mt: 4 }}>
      {filteredCardData.map((card) => (
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
                  onClick={() => handleAddToCart(card.name, platform.name)}
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
  );
};

export default Cards;
