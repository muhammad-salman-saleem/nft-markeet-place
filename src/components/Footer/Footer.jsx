import { Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}><p>Footer</p></Grid>
      <Grid item xs={6} md={8}><p>Footer</p></Grid>
    </Grid>
  );
};

export default Footer;
