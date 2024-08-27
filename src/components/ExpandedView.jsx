import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

const ExpandedView = ({ open, onClose, student }) => {
  if (!student) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{student.name}</DialogTitle>
      <DialogContent>
        <Typography>Email: {student.email}</Typography>
        <Typography>Phone: {student.phone}</Typography>
        <Typography>Website: {student.website}</Typography>
        <Typography>Address: {student.address.street}, {student.address.city}</Typography>
        {/* Add more details if necessary */}
      </DialogContent>
    </Dialog>
  );
};

export default ExpandedView;
