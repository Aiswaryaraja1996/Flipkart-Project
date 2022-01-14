import AccessoriesNavbar from "./AccessoriesNavbar";
import axios from "axios";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  component: {
    background: "#f2f2f2",
    marginTop: 55,
  },
  container: {
    margin: "0 80px",
    background: "#fff",
    display: "flex",
  },
});

export const Accessories = () => {
  const classes = useStyle();
  const request = () => {
    axios("https://fakestoreapi.com/products").then((res) => console.log(res));
  };
  // request();
  return (
    <Box>
      <AccessoriesNavbar />
      <Box className={classes.component}>
        <Box>
          <Box>fff</Box>
          <Box>f</Box>
        </Box>
      </Box>
    </Box>
  );
};
