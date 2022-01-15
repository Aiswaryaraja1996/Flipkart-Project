import { styled } from "@mui/material/styles";


import {  useSelector } from "react-redux";
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

  return <Container>{isRegister === 0 || isRegister === 2 ? <RegisteredUser /> : <NewUser />}</Container>;
}
