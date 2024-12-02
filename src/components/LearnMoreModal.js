import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const LearnMoreModal = ({ open, handleClose }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
                bgcolor: '#1e1e1e',
                border: '2px solid #333',
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
                    Why Use Buycott?
                </Typography>
                <Typography sx={{ mt: 2, color: "#fff" }}>
                    Buycott empowers consumers to make informed purchasing decisions by aligning their purchases with their values. It provides insights into the ethical and political stances of companies, allowing users to support brands that reflect their beliefs.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ color: "#fff", mt: 3 }}>
                    Ethical Categories
                </Typography>
                <Typography sx={{ mt: 2, color: "#fff" }}>
                    Buycott categorizes products based on various ethical considerations, including:
                </Typography>
                <ul>
                    <li style={{ color: "#fff" }}>Environmental Impact: Products that minimize harm to the environment.</li>
                    <li style={{ color: "#fff" }}>Labor Rights: Fair wages and ethical working conditions.</li>
                    <li style={{ color: "#fff" }}>Animal Welfare: No animal testing or cruelty in production.</li>
                    <li style={{ color: "#fff" }}>Corporate Governance: Transparent and accountable business practices.</li>
                    <li style={{ color: "#fff" }}>Human Rights: Respect for dignity and rights of all people.</li>
                    <li style={{ color: "#fff" }}>Health & Safety: Products that ensure safety and well-being.</li>
                </ul>
                <Typography variant="h6" component="h2" sx={{ color: "#fff", mt: 3 }}>
                    The Technology Behind Buycott
                </Typography>
                <Typography sx={{ mt: 2, color: "#fff" }}>
                    Buycott utilizes advanced sentiment analysis powered by an NLP model to assess the stances of companies on sensitive issues. The app's search functionality identifies the parent company of a product and evaluates its position, providing unprecedented transparency.
                </Typography>
                <Button 
                    onClick={handleClose} 
                    sx={{ mt: 3, backgroundColor: "#bb86fc", color: "#fff", "&:hover": { backgroundColor: "#333" } }}
                    variant="contained"
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default LearnMoreModal;
