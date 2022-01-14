import { Box, TextField, Typography, Button, Stack } from "@mui/material";

import { useDispatch } from "react-redux";
import { handleRegister } from "../../redux/Api";
import { useState } from "react";

const loginInitialValues = {
  mobile: "",
  password: "",
};

export default function RegisteredUser() {
  const [login, setLogin] = useState(loginInitialValues);
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
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
        <span style={{ fontSize: "28px", fontWeight: 500 }}>
          Looks like you're new here!
        </span>
        <p>
          <span
            style={{
              fontSize: "18px",
              marginTop: "16px",
              lineHeight: "150%",
              color: "#dbdbdb",
            }}
          >
            Sign up with your mobile number to get started
          </span>
        </p>
      </div>
      <div>
        <Box
          sx={{
            minHeight: "456px",
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
            label="Mobile number"
          />

          <TextField
            type="password"
            variant="standard"
            sx={{ marginBottom: "34px" }}
            onChange={(e) => onValueChange(e)}
            name="password"
            label="Set Password"
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
              dispatch(handleRegister(login));
            }}
          >
            SignUp
          </Button>

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
            Exiting User? Log in
          </Button>
        </Box>
      </div>
    </Stack>
  );
}
