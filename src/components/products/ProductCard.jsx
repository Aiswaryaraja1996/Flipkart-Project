import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductCard({ item }) {
  return (
    <Grid
      item
      sx={{
        width: "23%",
        margin: "0 8px",
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
          <FavoriteIcon sx={{ color: "#c2c2c2" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={item.url}
            alt={item.title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transition: "opacity .5s linear",
              opacity: 1,
              margin: "auto",
              zIndex: 0,
            }}
          />
        </div>
        <div
          style={{
            padding: "5px 16px 8px",
            transform: "translate3d(0px, 0px, 0px) ",
            maxWidth: "100%",
          }}
        >
          <div style={{ color: "#878787", fontSize: "14px", fontWeight: 500 }}>
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
                ₹{item.price}
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
                <span>90% off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
