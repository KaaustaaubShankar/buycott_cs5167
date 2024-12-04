import React from "react";
import { Modal, Box, Typography, Button, Divider } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600, // Reduced width for a smaller modal
  bgcolor: '#1e1e1e',
  border: '2px solid #333',
  boxShadow: 24,
  p: 3, // Reduced padding
  color: '#fff',
  borderRadius: '8px',
};

const sectionStyle = {
  mb: 2, // Reduced margin bottom for sections
};

const sectionTitleStyle = {
  fontWeight: 'bold',
  fontSize: '1rem', // Slightly smaller title size
  color: '#bb86fc',
  mb: 1, // Margin bottom for spacing between title and content
};

const listStyle = {
  paddingLeft: 2,
  listStyleType: 'disc',
};

const twoColumnStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr', // Two columns of equal width
  gap: 1, // Reduced spacing between columns
  mb: 2, // Reduced margin bottom between rows
};

const InfoModal = ({ open, handleClose, pros = [], cons = [], articles = testArticles, ethics = [], alternatives = [] }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box display="flex" flexDirection="column">
          {/* Pros and Cons Section (two columns) */}
          <Box sx={sectionStyle}>
            <Typography variant="h6" sx={sectionTitleStyle}>Pros and Cons</Typography>
            <Box sx={twoColumnStyle}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#ff9800' }}>Pros:</Typography>
                <ul style={listStyle}>
                  {pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#f44336' }}>Cons:</Typography>
                <ul style={listStyle}>
                  {cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 1, backgroundColor: '#333' }} />

          {/* Ethical Considerations and Alternatives Sections (two columns) */}
          <Box sx={twoColumnStyle}>
            {/* Ethical Considerations */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={sectionTitleStyle}>Ethical Considerations</Typography>
              <ul style={listStyle}>
                {ethics.map((ethic, index) => (
                  <li key={index}>{ethic}</li>
                ))}
              </ul>
            </Box>

            {/* Alternatives */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" sx={sectionTitleStyle}>Alternatives</Typography>
              <ul style={listStyle}>
                {alternatives.map((alternative, index) => (
                  <li key={index}>{alternative}</li>
                ))}
              </ul>
            </Box>
          </Box>

          <Divider sx={{ my: 1, backgroundColor: '#333' }} />

          {/* Related News Articles Section */}
          <Box sx={sectionStyle}>
            <Typography variant="h6" sx={sectionTitleStyle}>Related News Articles</Typography>
            <ul style={listStyle}>
              {articles.map((article, index) => (
                <li key={index}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: '#bb86fc' }}>
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </Box>

          <Button 
            onClick={handleClose} 
            variant="contained" 
            sx={{
              mt: 2, // Adjusted margin-top for the button
              backgroundColor: '#bb86fc', 
              color: '#fff', 
              alignSelf: 'flex-end', 
              borderRadius: '6px', 
              '&:hover': {
                backgroundColor: '#9c4dcc',
              }
            }}
          >
            Close
          </Button>
        </Box>
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
