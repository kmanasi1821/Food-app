import React from "react";
import css from "./Banner.module.css";
import Banner from "../../images/1000_F_18669964_Txz4BS0OErzj9v9DHM3N51d8yFVa85dR-removebg-preview.png";
import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { display } from "@mui/system";
const Home = () => {
  const mobileView = (
    <Box>
      <h1 className={css.mobileViewHeading}>Welcome Foodies !</h1>
      <button className={css.mobileViewBtn}>ORDER NOW</button>
      <img src={Banner} alt="" className={css.mobileViewBannerImg} />
    </Box>
  );
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>{mobileView}</Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className={css.heading}>
              <div className={css.banner_heading}>Welcome Foodie !</div>
              <Link to="/menu">
                <button className={css.btn}>ORDER NOW</button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img src={Banner} alt="" className={css.image} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
