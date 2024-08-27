import React from 'react';
import styled from 'styled-components';
import { CardContent, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styled Components
const TileCard = styled.div`
  max-width: 300px;
  margin: 10px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;


const Tile = ({ student, onClick, onEdit, onFlag, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TileCard>
      <CardContent onClick={() => onClick(student)}>
        <Typography variant="h6">{student.name}</Typography>
        <Typography color="textSecondary">{student.email}</Typography>
        <Typography color="textSecondary">{student.phone}</Typography>
      </CardContent>
      <IconButton
        style={{ position: 'absolute', top: 10, right: 10, backgroundColor:"white", padding:'2px' }}
        onClick={handleMenuClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { handleMenuClose(); onEdit(student); }}>Edit</MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); onFlag(student); }}>Flag</MenuItem>
        <MenuItem onClick={() => { handleMenuClose(); onDelete(student); }}>Delete</MenuItem>
      </Menu>
    </TileCard>
  );
};

export default Tile;
