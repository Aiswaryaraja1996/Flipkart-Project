import Carousel from "react-material-ui-carousel";

import { bannerData } from "../utils/Navdata";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      StylesProvider
      navButtonsProps={{
        style: {
          color: "#494949",
          backgroundColor: "#FFFFFF",
          borderRadius: 0,
          margin: 0,
          width: 50,
          
        },
      }}
    >
      {bannerData.map((image) => (
        <img src={image} style={{ width: "100%", height: 280 }} alt={image} />
      ))}
    </Carousel>
  );
};

export default Banner;
