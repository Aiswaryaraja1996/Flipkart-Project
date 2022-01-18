import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddWishlist } from "../../redux/Api";

import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

export default function ProductCard({ item }) {
  console.log(item);
  const [inWishlist, setInWishlist] = useState(false);
  const wishlist = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();

  let mrp = Math.floor(
    Number(item.price) - (Number(item.discount) * Number(item.price)) / 100
  );

  var val = wishlist.find((i) => i.id === item.id);
  const addWishlist = () => {
    if (val != null || val != undefined) {
      setInWishlist(false);
      dispatch(handleAddWishlist(item, false));
    } else {
      setInWishlist(true);
      dispatch(handleAddWishlist(item, true));
    }
  };
  return (
    <Grid
      item
      sx={{
        width: "23%",
        margin: "0 12.25px",
        maxWidth: "100%",
        padding: "0 !important",
        transition: "box-shadow .2s ease-in-out",
        "&:hover": {
          boxShadow: "0 3px 16px 0 rgb(0 0 0 / 11%)",
        },
      }}
    >
      <div
        style={{
          filter: "none!important",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "3px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton size="large" onClick={addWishlist}>
            <FavoriteIcon
              sx={{ color: inWishlist || val ? "red" : "#c2c2c2" }}
            />
          </IconButton>
        </div>
        <div
          style={{ width: "100%", position: "relative", paddingTop: "120%" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              paddingTop: "120%",
            }}
          >
            <img
              src={item.url}
              alt={item.title}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                maxWidth: "100%",
                maxHeight: "100%",
                transition: "opacity .5s linear",
                opacity: 1,
                margin: "auto",
                zIndex: 0,
              }}
            />
          </div>
        </div>
        <Link to={`/productDetail/${item.id}`}>
          <div
            style={{
              padding: "5px 16px 8px",
              transform: "translate3d(0px, 0px, 0px) ",
              maxWidth: "100%",
            }}
          >
            <div
              style={{ color: "#878787", fontSize: "14px", fontWeight: 500 }}
            >
              {item.title}
            </div>
            <div
              style={{
                display: "inline-block",
                width: "calc(100% - 80px)",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                padding: 0,
                fontSize: "14px",
                color: "black",
              }}
            >
              {item.shortTitle}
            </div>
            <div style={{ display: "inline-block" }}>
              {" "}
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                height="18"
                alt="fassured"
              />
            </div>
            <div style={{ display: "block", padding: "0 10px 0px 0px" }}>
              <div>
                <div
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#212121",
                  }}
                >
                  ₹{mrp}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    textDecoration: "line-through",
                    fontSize: "14px",
                    color: "#878787",
                  }}
                >
                  ₹{item.price}
                </div>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "8px",
                    color: "#388e3c",
                    fontSize: "13px",
                    letterSpacing: "-.2px",
                    fontWeight: 500,
                  }}
                >
                  <span>{item.discount}% off</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </Grid>
  );
}
