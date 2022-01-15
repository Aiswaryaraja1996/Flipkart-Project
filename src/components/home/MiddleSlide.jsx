import Box from "@mui/material/Box";
import Slide from "./Slide";

const MiddleSlide = ({ products }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Box sx={{ display: "flex", margin: 0, paddingTop: "2px" }}>
      <Box sx={{ width: "83%" }}>
        <Slide
          data={products}
          title="Deals of the Day"
          timer={true}
          multi={true}
        />
      </Box>
      <Box
        sx={{
          background: "#FFFFFF",
          width: "17%",
          marginLeft: "10px",
          padding: "4px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={adURL} style={{ width: "100%" }} alt="add" />
      </Box>
    </Box>
  );
};

export default MiddleSlide;
