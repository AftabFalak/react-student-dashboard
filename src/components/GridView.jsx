import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GridView = ({ onTileClick }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from a public API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'website', headerName: 'Website', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={(params) => onTileClick(params.row)}
      />
    </div>
  );
};

export default GridView;
