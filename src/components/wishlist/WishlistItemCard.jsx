import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material/";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

import { removeFromWishlist } from "../../redux/Api";

export default function WishlistItemCard({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  return (
    <div style={{ borderBottom: "1px solid #e0e0e0" }}>
      <div
        style={{
          lineHeight: 1,
          padding: "24px 0 30px 24px",
          display: "block",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", width: "120px", float: "left" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "relative",
              margin: "0 auto",
            }}
          >
            <img
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                margin: "auto",

                maxWidth: "100%",
                maxHeight: "100%",
              }}
              src={item.url}
              alt={item.shortTitle}
            />
          </div>
        </div>

        <div
          style={{
            paddingLeft: "25px",
            float: "none",
            width: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <Link to={`/productDetail/${item.id}`}>
              <div
                style={{
                  fontWeight: 400,
                  fontSize: "15px",
                  display: "block",
                  cursor: "pointer",
                  marginBottom: "5px",
                  color: "black",
                }}
              >
                {item.shortTitle}
              </div>
            </Link>

            <Typography
              sx={{
                color: "#878787",
                fontSize: "14px",
              }}
              style={{
                marginTop: 5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Box
                sx={{
                  lineHeight: "normal",
                  display: "flex",
                  color: "#fff",
                  padding: "4px 6px 2px 6px",
                  borderRadius: "3px",
                  fontWeight: 500,
                  fontSize: "12px",
                  verticalAlign: "middle",
                  backgroundColor: "#388e3c",
                }}
              >
                <span>4</span>
                <StarIcon
                  style={{
                    color: "white",
                    fontSize: "12px",
                  }}
                />
              </Box>

              <span style={{ fontSize: "16px", fontWeight: 500 }}>(5)</span>
              <span style={{ marginTop: "6px" }}>
                <img src={fassured} style={{ width: 77 }} alt="fassured" />
              </span>
            </Typography>
            <Typography>
              <span
                style={{ fontWeight: 500, fontSize: "22px", color: "#212121" }}
              >
                ₹
                {Math.floor(
                  Number(item.price) -
                    (Number(item.discount) * Number(item.price)) / 100
                )}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  color: "#878787",
                  fontSize: "14px",
                }}
              >
                <strike>₹{item.price}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span
                style={{
                  color: "#26a541",
                  fontWeight: 500,
                  fontSize: "13px",
                }}
              >
                {item.discount}% off
              </span>
            </Typography>
          </div>
          <div
            style={{
              paddingLeft: "25px",
              width: "14%",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <div
              style={{
                float: "right",
                marginRight: "35px",
                display: "inline-block",
                position: "relative",
              }}
            >
              <DeleteIcon
                sx={{ color: "#C2C2C2", fontSize: "20px", cursor: "pointer" }}
                onClick={() => dispatch(removeFromWishlist(item.id))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
