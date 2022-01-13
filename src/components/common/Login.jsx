import { Stack, Box, TextField, Typography, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";

import { handleLogin } from "../../redux/Api";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

const loginInitialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const [login, setLogin] = useState(loginInitialValues);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.isAuth);
  const token = useSelector((state) => state.token);
  const isError = useSelector((state) => state.isError);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
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
        <div>
          <Box
            sx={{
              padding: "56px 35px 16px",
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}
          >
            <TextField
              variant="standard"
              sx={{ marginBottom: "34px" }}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Email/Mobile number"
            />
            {/* {error && (
              <Typography className={classes.error}>
                Please enter valid Email ID/Mobile number
              </Typography>
            )} */}
            <TextField
             type= "password"
              variant="standard"
              sx={{ marginBottom: "34px" }}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />
            <Typography
              sx={{ color: "#878787", fontSize: "12px", fontWeight: 400 }}
            >
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#FB641B",
                color: "#fff",
                height: 48,
                marginTop: "10px",
                borderRadius: "none",
                "&:hover": {
                  backgroundColor: "#FB641B",
                },
              }}
             
              onClick={() => {
                console.log(login);
                dispatch(handleLogin(login));
              }}
            >
              Login
            </Button>
            <Typography
              sx={{ color: "#878787", fontSize: 12, marginTop: "16px" }}
              style={{ textAlign: "center" }}
            >
              OR
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                background: "#fff",
                color: "#2874f0",
                height: 48,
                marginTop: "16px",
                boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
              }}
            >
              Request OTP
            </Button>
            <Typography
              sx={{
                margin: "auto 0 5px 0",
                textAlign: "center",
                color: "#2874f0",
                fontWeight: 500,
                fontSize: "14px",
                cursor: "pointer",
                marginTop: "60px",
              }}
            >
              New to Flipkart? Create an account
            </Typography>
          </Box>
        </div>
      </Stack>
    </Container>
  );
}
