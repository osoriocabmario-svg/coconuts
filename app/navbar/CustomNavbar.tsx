'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './CustomNavBar.module.css';
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <div>
      <Box className={styles.navbar}>
        <Link href={'/'}>
          <Box sx={{ cursor: 'pointer' }}>
            <Typography sx={{ color: '#fff' }}>{'Coconuts'}</Typography>
          </Box>
        </Link>
        <Box className={styles.sectionButton}>
          <Box>
            <Typography sx={{ color: '#fff' }}>{"FAQ's"}</Typography>
          </Box>
          <Box>
            <Typography sx={{ color: '#fff' }}>{"FAQ's"}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CustomNavbar;
