import { Stack } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  p: 4,

  background: "#fff",
  margin: "0 auto",
  overflow: "auto",
  display: "flex",

  color: "#212121",

  borderRadius: "2px",
  height: "528px",
  maxWidth: "750px",
  minWidth: "650px",
}));

export default function Login() {
  return (
    <Container>
      <Stack>
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
            width:"40%",
            height:"100%",
          }}
        >
          <span>Login</span>
          <p>
            <span>Get access to your Orders, Wishlist and Recommendations</span>
          </p>
        </div>
      </Stack>
    </Container>
  );
}
