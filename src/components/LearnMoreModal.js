import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const LearnMoreModal = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                bgcolor: '#1e1e1e',
                boxShadow: 24,
                p: 2,
                borderRadius: 2,
                maxWidth: 1000,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <Typography variant="h6" component="h2" sx={{ color: "#fff" }}>
                    Learn More
                </Typography>
                <Typography sx={{ mt: 2, color: "#fff" }}>
                    Discover more about our mission, values, and how you can make a difference with your purchases.
                </Typography>
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

export default LearnMoreModal;