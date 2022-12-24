import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import css from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1a1a19", color: "white", p: "3" }}
      >
        <Box className={css.social_icon}>
          <TwitterIcon className={css.footer_icon}></TwitterIcon>
          <GitHubIcon className={css.footer_icon}></GitHubIcon>
          <YouTubeIcon className={css.footer_icon}></YouTubeIcon>
          <InstagramIcon className={css.footer_icon}></InstagramIcon>
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media(max-width:600px)": {
              fontSize: "0.8rem",
            },
            p: "1rem",
          }}
        >
          All Rights Reserver &copy; Manasi Wagh
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
