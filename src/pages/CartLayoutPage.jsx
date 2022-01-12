import { Button } from "@mui/material";
import { useState } from "react";
import { CartFooter } from "../components/CartFooter";
import CartNavbar from "../components/CartNavbar";

export const CartLayoutPage = () => {
  const [info, setInfo] = useState(false);

  if (info) {
    return (
      <div>
        <CartNavbar />
        <div style={{ marginTop: "100px" }}>
          <div
            style={{
              width: "1300px",
              justifyContent: "space-between",
              border: "1px solid black",
              display: "flex",
              margin: "auto",
            }}
          >
            <div
              style={{
                width: "67%",
                border: "1px solid black",
              }}
            >
              <div>
                <div>img</div>
                <div>
                  <p>Try This Color Block Men Round Neck Maroon T-Shirt</p>
                </div>
                <button>plus</button>
              </div>
              <button>place order</button>
            </div>
            <div
              style={{
                width: "30%",
                border: "1px solid black",
              }}
            >
              <div>
                <h2>price details</h2>
                <div>
                  <p>price</p>
                  <p>price</p>

                  <p>price</p>
                  <p>Total</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div style={{ background: "#F1F3F6" }}>
      <CartNavbar />
      <div style={{ marginTop: "80px" }}>
        <div
          style={{
            width: "1200px",

            margin: "auto",
            background: "#FFFFFF",
            padding: "30px",
          }}
        >
          My Cart
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <img
              style={{ width: "180px" }}
              alt="img"
              src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            />
            <div style={{ marginTop: "10px" }}>Your Cart is empty!</div>
            <div>
              <p style={{ fontSize: "smaller" }}>Add items to it now</p>
            </div>
            <Button
              style={{ width: "250px", padding: "10px" }}
              variant="contained"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <CartFooter />
    </div>
  );
};
