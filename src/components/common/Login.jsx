import { Stack, Box, TextField, Typography, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import { handleLogin } from "../../redux/Api";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RegisteredUser from "./RegisteredUser";
import NewUser from "./NewUser";

const Container = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "6%",
  transform: "translate(-50%, -50%)",
  p: 4,
  background: "#fff",
  margin: "0 auto",
  overflow: "auto",
  display: "flex",
  color: "#212121",
  borderRadius: "4px",
  minWidth: "350px",
  maxWidth: "80%",
  minHeight: "200px",
  maxHeight: "90vh",
}));

export default function Login() {
  const isRegister = useSelector((state) => state.auth.isRegister);

  return (
    <Container>
      <Stack direction="row">
        <div
          style={{
            backgroundImage:
              "url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)",
            backgroundPosition: "center 85%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#2874f0",
            padding: "40px 33px",
            fontSize: "15px",
            color: "white",
            width: "30%",
          }}
        >
          <span style={{ fontSize: "28px", fontWeight: 500 }}>Login</span>
          <p>
            <span
              style={{
                fontSize: "18px",
                marginTop: "16px",
                lineHeight: "150%",
                color: "#dbdbdb",
              }}
            >
              Get access to your Orders, Wishlist and Recommendations
            </span>
          </p>
        </div>
        <div>{isRegister ? <RegisteredUser /> : <NewUser />}</div>
      </Stack>
    </Container>
  );
}
