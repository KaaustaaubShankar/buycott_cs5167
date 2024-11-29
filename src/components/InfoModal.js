import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#1e1e1e',
  border: '2px solid #333',
  boxShadow: 24,
  p: 4,
  color: '#fff',
  borderRadius: '8px',
};

const InfoModal = ({ open, handleClose, pros, cons, articles = testArticles }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box display="flex">
          <Box sx={{ flex: 1, mr: 2, mb: 2 }}>
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
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h2">
              Related News Articles
            </Typography>
            <ul>
              {articles.map((article, index) => (
                <li key={index}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: '#bb86fc' }}>
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
        <Button onClick={handleClose} variant="contained" sx={{ mt: 2, backgroundColor: '#bb86fc', color: '#fff', alignSelf: 'flex-end' }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

const testArticles = [
  { title: "Article 1", link: "https://example.com/article1" },
  { title: "Article 2", link: "https://example.com/article2" },
  { title: "Article 3", link: "https://example.com/article3" },
];

export default InfoModal; 