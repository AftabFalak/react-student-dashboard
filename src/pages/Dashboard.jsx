import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HamburgerMenu from '../components/HamburgerMenu';
import HorizontalMenu from '../components/HorizontalMenu';
import GridView from '../components/GridView';
import TileView from '../components/TileView';
import ExpandedView from '../components/ExpandedView';
import axios from 'axios';
import { Button } from '@mui/material';

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const ToggleButton = styled(Button)`
  margin: 20px 0;
`;

const Dashboard = () => {
  const [view, setView] = useState('grid');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Fetch data from a public API
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setStudents(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleTileClick = (student) => {
    setSelectedStudent(student);
  };

  const handleEdit = (student) => {
    // Implement edit functionality
    console.log('Edit student:', student);
    alert(`Editing student: ${student.name}`);
  };

  const handleFlag = (student) => {
    // Implement flag functionality
    console.log('Flag student:', student);
    alert(`Flagging student: ${student.name}`);
  };

  const handleDelete = (student) => {
    // Implement delete functionality
    console.log('Delete student:', student);
    alert(`Deleting student: ${student.name}`);
  };

  return (
    <Container>
      <HorizontalMenu />
      <HamburgerMenu />

      <ToggleButton variant="contained" style={{marginBottom:"5px"}} onClick={() => setView(view === 'grid' ? 'tile' : 'grid')}>
      Show {view === 'grid' ? 'tile' : 'grid'} view
      </ToggleButton>

      {view === 'grid' ? (
        <GridView onTileClick={handleTileClick} />
      ) : (
        <TileView
          students={students}
          onTileClick={handleTileClick}
          onEdit={handleEdit}
          onFlag={handleFlag}
          onDelete={handleDelete}
        />
      )}

      <ExpandedView
        open={!!selectedStudent}
        onClose={() => setSelectedStudent(null)}
        student={selectedStudent}
      />
    </Container>
  );
};

export default Dashboard;