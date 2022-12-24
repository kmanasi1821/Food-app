import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import css from "./Headers.module.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleMenuClick = () => {
    return setMobileOpen(!mobileOpen);
  };
  // Menu Drawer
  const drawer = (
    <Box onClick={handleMenuClick} sx={{ textAlign: "center", my: "2" }}>
      <Typography sx={{ color: "#e31837;", pt: "20px", fontSize: "40px" }}>
        <LocalPizzaIcon></LocalPizzaIcon>
        Pizza Bust
      </Typography>
      <Divider></Divider>
      <ul className={css.mobileNavMenu}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>

        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>

        <li>
          <Link to={"/cart"}>
            <ShoppingCartSharpIcon></ShoppingCartSharpIcon>
          </Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box className={css.navbar}>
        <div sx={{ bgcolor: "#eee" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleMenuClick}
            >
              <MenuSharpIcon></MenuSharpIcon>
            </IconButton>

            <Typography className={css.LogoHeading}>
              <div className={css.logo}>
                <LocalPizzaIcon className={css.logo}></LocalPizzaIcon>Pizza Bust
              </div>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className={css.navMenu}>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/cart"}>
                    <ShoppingCartSharpIcon></ShoppingCartSharpIcon>
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </div>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleMenuClick}
            sx={{
              display: { xs: "block", sm: "none" },
              " & .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar></Toolbar>
        </Box>
      </Box>
    </>
  );
};

export default Header;
