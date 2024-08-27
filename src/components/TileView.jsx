import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import { Grid } from '@mui/material';

// Styled Components
const StyledGrid = styled(Grid)`
  padding: 20px;
`;

const TileView = ({ students, onTileClick, onEdit, onFlag, onDelete }) => {
  return (
    <StyledGrid container spacing={2}>
      {students.map((student) => (
        <Tile
          key={student.id}
          student={student}
          onClick={onTileClick}
          onEdit={onEdit}
          onFlag={onFlag}
          onDelete={onDelete}
        />
      ))}
    </StyledGrid>
  );
};

export default TileView;
