import { Button } from "@mui/material";
import {Link} from "react-router-dom";

export default function EmptyCart() {
  return (
    <div style={{ position: "relative", top: "80px" }}>
      <div
        style={{
          width: "1200px",
          margin: "auto",
          background: "#FFFFFF",
          padding: "30px",
        }}
      >
        My Cart
        <div style={{ textAlign: "center", padding: "30px 0" }}>
          <img
            style={{ width: "180px" }}
            alt="img"
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          />
          <div style={{ marginTop: "10px" }}>Your Cart is empty!</div>
          <div>
            <p style={{ fontSize: "smaller" }}>Add items to it now</p>
          </div>
          <Link to="/" >
          <Button
            style={{ width: "250px", padding: "10px",color: "white" }}
            variant="contained"
          >
          
            Shop Now
          </Button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
