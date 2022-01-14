import { Box, TextField, Typography, Button, Stack } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useEffect, useState } from "react";
import * as actions from "../../redux/Action";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { handleLogin } from "../../redux/Api";

const loginInitialValues = {
  mobile: "",
  password: "",
};
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RegisteredUser() {
  const [login, setLogin] = useState(loginInitialValues);
  const isRegister = useSelector((state) => state.auth.isRegister);
  const isError = useSelector((state) => state.auth.isError);
  const dispatch = useDispatch();

  const [openRegister, setOpenRegister] = useState(false);
  const [openError, setOpenError] = useState(false);

  console.log(isError);

  const handleCloseRegister = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenRegister(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
  };

  useEffect(() => {
    if (isRegister === 2) {
      setOpenRegister(true);
    }
    if (isError === 2) {
      setOpenError(true);
    }
  }, []);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <Stack direction="row">
      <Snackbar
        open={openRegister}
        autoHideDuration={6000}
        onClose={handleCloseRegister}
      >
        <Alert
          onClose={handleCloseRegister}
          severity="success"
          sx={{ width: "100%" }}
        >
          User Registered Successfully. Login to Continue.
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          You are not registered with us. Please sign up.
        </Alert>
      </Snackbar>

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
            name="mobile"
            label="Enter Email/Mobile number"
          />

          <TextField
            type="password"
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
              dispatch(handleLogin(login.mobile));
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
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(actions.registerRequest());
            }}
          >
            New to Flipkart? Create an account
          </Typography>
        </Box>
      </div>
    </Stack>
  );
}
