import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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
  borderRadius: '8px',
};

const CartModal = ({ open, handleClose, cart, setCart }) => {
  const [acknowledgmentVisible, setAcknowledgmentVisible] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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
    setItemToDelete({ productToDelete, platform });
    setConfirmDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      setCart(cart.filter(item => !(item.product === itemToDelete.productToDelete && item.platform === itemToDelete.platform)));
      setNotificationOpen(true);
      setConfirmDeleteOpen(false);
      setItemToDelete(null);
    }
  };

  const handleCloseConfirmation = () => {
    setConfirmDeleteOpen(false);
    setItemToDelete(null);
  };

  const handleSendToCart = () => {
    setAcknowledgmentVisible(true);
    setTimeout(() => setAcknowledgmentVisible(false), 2000);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
      <Box sx={style}>
        {acknowledgmentVisible && (
          <Typography variant="body1" sx={{ color: 'green', position: 'absolute', top: 10, right: 10 }}>
            Item sent to cart!
          </Typography>
        )}
        <Typography 
          id="cart-modal-title" 
          variant="h6" 
          component="h2" 
          sx={{ fontWeight: 'bold', fontSize: '1.5rem', mb: 2 }}
        >
          Your Cart
        </Typography>
        <Box sx={{ mt: 2 }}>
          {Object.keys(groupedCart).map((platform) => (
            <Box key={platform} sx={{ mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{platform}</Typography>
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
              <Button 
                variant="contained" 
                sx={{ mt: 1, backgroundColor: '#bb86fc', color: '#fff' }}
                onClick={handleSendToCart}
              >
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

        <Snackbar open={notificationOpen} autoHideDuration={3000} onClose={() => setNotificationOpen(false)}>
          <Alert onClose={() => setNotificationOpen(false)} severity="warning" sx={{ width: '100%' }}>
            Item removed from cart!
          </Alert>
        </Snackbar>

        <Dialog open={confirmDeleteOpen} onClose={handleCloseConfirmation}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete this item from the cart?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseConfirmation} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Modal>
  );
};

export default CartModal; 