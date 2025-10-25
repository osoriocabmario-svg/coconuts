'use client';

import { Typography, Grid } from '@mui/material';

const SectionMain = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img src={'/images/portada.webp'} alt="Portada" />
      </Grid>
    </Grid>
  );
};

export default SectionMain;
