import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#1e1e1e',
  border: '2px solid #333',
  boxShadow: 24,
  p: 4,
  color: '#fff',
};

const CartModal = ({ open, handleClose, cart, setCart }) => {
  // Group items by platform and calculate subtotal
  const groupedCart = cart.reduce((acc, item) => {
    const { platform, product, price } = item; // Assuming price is included in the item
    if (!acc[platform]) {
      acc[platform] = { items: [], subtotal: 0 };
    }
    acc[platform].items.push({ product, price });
    acc[platform].subtotal += parseFloat(price.replace(/[^0-9.-]+/g, "")); // Remove $ and convert to float
    return acc;
  }, {});

  // Calculate grand total
  const grandTotal = Object.values(groupedCart).reduce((total, platform) => total + platform.subtotal, 0);

  // Function to handle item deletion
  const handleDeleteItem = (productToDelete, platform) => {
    setCart(cart.filter(item => !(item.product === productToDelete && item.platform === platform)));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
      <Box sx={style}>
        <Typography id="cart-modal-title" variant="h6" component="h2">
          Your Cart
        </Typography>
        <Box sx={{ mt: 2 }}>
          {Object.keys(groupedCart).map((platform) => (
            <Box key={platform} sx={{ mb: 2 }}>
              <Typography variant="h6">{platform}</Typography>
              <ul>
                {groupedCart[platform].items.map((item, index) => (
                  <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{item.product} - {item.price}</span>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      onClick={() => handleDeleteItem(item.product, platform)}
                      sx={{ ml: 2 }}
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Subtotal: ${groupedCart[platform].subtotal.toFixed(2)}
              </Typography>
              <Button variant="contained" sx={{ mt: 1, backgroundColor: '#bb86fc', color: '#fff' }}>
                Send to Cart
              </Button>
            </Box>
          ))}
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Grand Total: ${grandTotal.toFixed(2)}
        </Typography>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2, backgroundColor: '#bb86fc', color: '#fff' }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CartModal; 