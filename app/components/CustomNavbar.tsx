'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';

const CustomNavbar = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', gap: 4, background: '#1D1D1B' }}>
        <Box>
          <Typography sx={{ color: '#fff' }}>{'Coconuts'}</Typography>
        </Box>
        <Box sx={{ ml: 'auto' }}></Box>
        <Box>
          <Typography sx={{ color: '#fff' }}>{"FAQ's"}</Typography>
        </Box>
        <Box>
          <Typography sx={{ color: '#fff' }}>{"FAQ's"}</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default CustomNavbar;
