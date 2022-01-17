import { Box, Typography, Paper } from "@mui/material";
import { useState, useEffect } from "react";

export default function TotalCard({ cartItems, coupon = 0 }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    console.log(1);
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;

    console.log(cartItems);
    cartItems.map((item) => {
      for (var i = 0; i < item.qty; i++) {
        price += item.price;
        discount += item.price - item.mrp;
      }
    });
    setPrice(price);
    setDiscount(discount);
  };
  return (
    <Box sx={{ position: "sticky", backgroundColor: "white", width: "100%" }}>
      <Box
        sx={{ padding: "15px 24px", background: "#fff" }}
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <Typography sx={{ color: "#878787" }}>PRICE DETAILS</Typography>
      </Box>
      <Box
        sx={{
          padding: "0 24px",
          "& > *": {
            marginBottom: "20px",
            fontSize: 14,
          },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            margin: "20px 0 !important",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Price ({cartItems?.length} item)
          <span style={{ float: "right" }}>₹{price}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            margin: "20px 0 !important",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Discount<span style={{ float: "right" }}>-₹{discount}</span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            margin: "20px 0 !important",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Delivery Charges<span style={{ float: "right" }}>₹40</span>
        </Typography>
        {coupon == 1 && (
          <Typography
            sx={{
              display: "flex",
              margin: "20px 0 !important",
              alignItems: "center",
              color: "#388e3c",
              fontSize: "14px",
              fontWeight: 500,
              justifyContent: "space-between",
            }}
          >
            Coupon Applied for 10% discount
          </Typography>
        )}
        <Typography
          sx={{
            fontSize: "px",
            fontWeight: 500,
            borderTop: "1px dashed #e0e0e0",
            padding: "20px 0",
            borderBottom: "1px dashed #e0e0e0",
          }}
        >
          Total Amount
          <span style={{ float: "right" }}>
            {coupon === 1 ? (
              <span>
              ₹{Math.ceil(Number(price) -
                  Number(discount) -
                  (Number(price) - Number(discount)) * 0.1 +
                  40)}
              </span>
            ) : (
              <span>₹{Number(price) - Number(discount)}</span>
            )}
          </span>
        </Typography>
        <Typography
          style={{
            fontSize: 16,
            color: "#388e3c",
            padding: "12px 0",
            fontWeight: 500,
          }}
        >
          You will save ₹{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
}
