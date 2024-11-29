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
  borderRadius: '8px'
};

const InfoModal = ({ open, handleClose, pros, cons }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Pros and Cons
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          <strong>Pros:</strong>
          <ul>
            {pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
          <strong>Cons:</strong>
          <ul>
            {cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </Typography>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2, backgroundColor: '#bb86fc', color: '#fff' }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default InfoModal; 