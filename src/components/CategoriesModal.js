import React from "react";
import { Modal, Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";

const CategoriesModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          bgcolor: '#1e1e1e',
          boxShadow: 24,
          p: 2,
          borderRadius: 2,
          maxWidth: 1000,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h6" component="h2" sx={{ color: "#fff" }}>
          Explore Categories
        </Typography>
        <Typography sx={{ mt: 2, color: "#fff" }}>
          Align your purchases with values that matter. Here are some ethical categories:
        </Typography>

        {/* Categories */}
        <List sx={{ mt: 2 }}>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: "#fff" }}>Environmental Impact</Typography>}
              secondary={<Typography sx={{ color: "#fff" }}>Products that minimize harm to the environment.</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: "#fff" }}>Labor Rights</Typography>}
              secondary={<Typography sx={{ color: "#fff" }}>Fair wages and ethical working conditions.</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: "#fff" }}>Corporate Governance</Typography>}
              secondary={<Typography sx={{ color: "#fff" }}>Transparent and accountable business practices.</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: "#fff" }}>Animal Welfare</Typography>}
              secondary={<Typography sx={{ color: "#fff" }}>No animal testing or cruelty in production.</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: "#fff" }}>Human Rights</Typography>}
              secondary={<Typography sx={{ color: "#fff" }}>Respect for dignity and rights of all people.</Typography>}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary={<Typography sx={{ color: "#fff" }}>Health & Safety</Typography>}
              secondary={<Typography sx={{ color: "#fff" }}>Products that ensure safety and well-being.</Typography>}
            />
          </ListItem>
        </List>

        <Button 
          onClick={handleClose} 
          sx={{ mt: 2, backgroundColor: "#333", color: "#fff", "&:hover": { backgroundColor: "#bb86fc" } }} 
          variant="contained"
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CategoriesModal;
