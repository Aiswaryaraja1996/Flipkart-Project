import { Button, Box, Typography, Card } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart, handleCartItemChange } from "../../redux/Api";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  console.log(item);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <div>
      <Card
        sx={{
          borderTop: "1px solid #f0f0f0 !important",
          borderRadius: 0,
          display: "flex",
          boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%)",
          padding: "24px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <div style={{ width: "112px", height: "112px" }}>
            <img
              src={item.url}
              style={{ maxWidth: "100%", maxHeight: "100%", margin: "auto" }}
              alt="img"
            />
          </div>

          <Box
            sx={{
              padding: "0 24px 12px",
              verticalAlign: "top",
              minHeight: "112px",
              flex: "1 1",
              overflow: "hidden",
              maxWidth: "380px",
            }}
          >
            <Typography>{item.title}</Typography>
            <div
              style={{
                color: "#878787",
                fontSize: "14px",
                height: "20px",
                marginTop: "8px",
              }}
            >
              Seller:MarketPlace India
              <img
                src={fassured}
                style={{
                  height: "15px",
                  verticalAlign: "middle",
                  margin: "0 6px",
                }}
                alt="img"
              />
            </div>
            <Typography style={{ margin: "20px 0" }}>
              <span style={{ fontSize: 18, fontWeight: 500 }}>₹{item.mrp}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787", fontSize: 14 }}>
                <strike>₹{item.price}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C", fontWeight: 500 }}>
                {item.discount}% off
              </span>
            </Typography>
          </Box>
          <div>
            <div
              style={{ fontSize: "14px", color: "#212121", lineHeight: "1.4" }}
            >
              Delivery by {item.delDate} | <span>₹40</span>
            </div>
            <span
              style={{ fontSize: "12px", color: "#878787", marginTop: "9px" }}
            >
              10 Days Replacement Policy
            </span>
          </div>
        </Box>

        <div style={{ paddinTop: "10px" }}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#212121",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  borderColor: "#e0e0e0",
                  cursor: "pointer",
                  width: "28px",
                  height: "28px",
                  background: "linear-gradient(#fff,#f9f9f9)",
                  display: "inline-block",
                  border: "1px solid #c2c2c2",
                  fontSize: "16px",
                  borderRadius: "50%",
                  paddingTop: "1px",
                  lineheight: 1,
                }}
                disabled={item.qty === 1 ? true : false}
                onClick={() =>
                  dispatch(handleCartItemChange(item.id, item.qty, -1))
                }
              >
                –
              </button>
              <div
                style={{
                  padding: "3px 6px",
                  width: "28px",
                  borderRadius: "2px",
                  backgroundColor: "#fff",
                  border: "1px solid #c2c2c2",
                  margin: "0 5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  style={{
                    border: "none",
                    width: "100%",
                    fontSize: "14px",
                    fontWeight: 500,
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                  value={item.qty}
                />
              </div>
              <button
                style={{
                  borderColor: "#e0e0e0",
                  cursor: "pointer",
                  width: "28px",
                  height: "28px",
                  background: "linear-gradient(#fff,#f9f9f9)",
                  display: "inline-block",
                  border: "1px solid #c2c2c2",
                  fontSize: "16px",
                  borderRadius: "50%",
                  paddingTop: "1px",
                  lineheight: 1,
                }}
                onClick={() =>
                  dispatch(handleCartItemChange(item.id, item.qty, 1))
                }
              >
                {" "}
                +{" "}
              </button>

              <div style={{ paddingLeft: "24px" }}>
                <div
                  style={{
                    display: "inline-block",
                    boxShadow: "none",
                    outline: 0,
                    fontSize: "16px",
                    fontWeight: 500,
                    cursor: "pointer",
                    marginRight: "25px",
                  }}
                >
                  SAVE FOR LATTER
                </div>
                <div
                  style={{
                    display: "inline-block",
                    boxShadow: "none",
                    outline: 0,
                    fontSize: "16px",
                    fontWeight: 500,
                    cursor: "pointer",
                    marginRight: "25px",
                  }}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  REMOVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
