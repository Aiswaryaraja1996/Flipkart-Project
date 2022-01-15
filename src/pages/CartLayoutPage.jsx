import { Button, Grid, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { CartFooter } from "../components/cart/CartFooter";
import EmptyCart from "../components/cart/EmptyCart";
import CartItem from "../components/cart/CartItem";
import TotalCard from "../components/cart/TotalCard";
import NavBar from "../components/common/NavBar";

import { useDispatch } from "react-redux";
import { getCart } from "../redux/Api";
import { saveData } from "../utils/localStorage";

export const CartLayoutPage = () => {
  const cartItems = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  

  const { cartDetails } = cartItems;

  localStorage.removeItem("cart");
  saveData("cart", cartItems);

  useEffect(() => {
    dispatch(getCart());
  }, [cartDetails]);
  return (
    <div style={{ background: "#F1F3F6", height: "100vh" }}>
      <NavBar page={1}/>

      {cartItems.length > 0 ? (
        <div
          style={{
            position: "relative",
            top: "68px",
            maxWidth: "1260px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{
              padding: "8px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Grid item sx={{ paddingRight: 0, width: "68%" }}>
              <Box
                sx={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  style={{
                    fontSize: "18px",
                    lineHeight: "56px",
                    padding: "0 24px",
                    fontWeight: "500",
                  }}
                >
                  My Cart ({cartItems?.length})
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontWeight: 500,
                    width: "42%",
                  }}
                >
                  <img
                    alt="location"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
                  />
                  <span
                    style={{
                      color: "#878787",
                      marginRight: "8px",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    Deliver to
                  </span>

                  <div
                    style={{
                      padding: "12px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "2px",
                      fontWeight: 500,
                      cursor: "pointer",

                      display: "flex",
                      width: "60%",

                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <div style={{ width: "90%", color: "black" }}>
                      <span>Palakkad - 678011</span>
                    </div>
                    <img
                      style={{ marginLeft: "20px" }}
                      width="9px"
                      height="5px"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS4yMjcuNzAzQy0uMTY4LjMxNS0uMDMyIDAgLjUxNCAwaDcuOTY1Yy41NTYgMCAuNjg1LjMxNy4yOTguNjk4TDcuNjQgMS44MThsLTIuNDI3IDIuMzlhMS4wMiAxLjAyIDAgMCAxLTEuNDI3LS4wMDNMLjIyNy43MDN6Ii8+PC9zdmc+"
                      alt="icon"
                    />
                  </div>
                </div>
              </Box>
              {cartItems.map((item) => (
                <CartItem item={item} />
              ))}
              <Box
                sx={{
                  padding: "16px 22px",
                  background: "#fff",
                  boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
                  borderTop: "1px solid #f0f0f0",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    marginLeft: "auto",
                    background: "#fb641b",
                    color: "#fff",
                    borderRadius: 2,
                    width: 250,
                    height: 51,
                  }}
                >
                  Place Order
                </Button>
              </Box>
            </Grid>
            <Grid item sx={{ width: "30%" }}>
              <TotalCard cartItems={cartItems} />
            </Grid>
          </Grid>
        </div>
      ) : (
        <EmptyCart />
      )}

      <CartFooter />
    </div>
  );
};
