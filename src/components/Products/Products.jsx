import React from "react";
import css from "./Products.module.css";
import { ProductsData } from "../../data/productData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "@mui/material";

const Products = () => {
  const data = ProductsData;
  return (
    <>
      <div className={css.heading}>OUR MENU</div>
      <div className={css.list}>
        {data.map((product, i) => {
          if (i <= 7) {
            return (
              <Card sx={{ maxWidth: 400, m: "1rem" }}>
                <CardMedia sx={{ height: 140 }} image={product.img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/menu">
                    <button className={css.btn}>Add to Cart</button>
                    <button className={css.btn1}>Order</button>
                  </Link>
                </CardActions>
              </Card>
            );
          }
        })}
      </div>
      <div>
        <Link to="/menu" className={css.showMoreLink}>
          <Button className={css.exploreMore}>
            <h1>Explore More</h1>
            <ArrowCircleRightIcon
              className={css.arrowIcon}
            ></ArrowCircleRightIcon>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Products;
