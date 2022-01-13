import NavBar from "../components/NavBar";
import TopBanner from "../components/TopBanner";
import Carousel from "../components/Carousel";
import FooterMidContent from "../components/FooterMidContent";

import Box from "@mui/material/Box";
import Slide from "../components/Slide";
import MiddleSlide from "../components/MiddleSlide";
import Footer from "../components/Footer";
import { dealData, furnitureData } from "../utils/Navdata";

const Home = () => {
  return (
    <div style={{ background: "#f1f3f6" }}>
      <NavBar />
      <TopBanner />
      <Box sx={{ padding: "18px 8px 8px 8px" }}>
        <div style={{ padding: "0 0 10px 0" }}>
          <Carousel />
        </div>

        <MiddleSlide products={dealData} />

        <div style={{ marginTop: "10px" }}>
          <Slide
            data={furnitureData}
            title="Discounts for You"
            timer={false}
            multi={true}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <Slide
            data={dealData}
            title="Suggested Items"
            timer={false}
            multi={true}
          />
        </div>
      </Box>

      <FooterMidContent />
      <Footer />
    </div>
  );
};

export default Home;
