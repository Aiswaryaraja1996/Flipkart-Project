import NavBar from "../components/common/NavBar";
import TopBanner from "../components/home/TopBanner";
import Carousel from "../components/home/Carousel";
import FooterMidContent from "../components/common/FooterMidContent";
import Slide from "../components/home/Slide";
import MiddleSlide from "../components/home/MiddleSlide";
import Footer from "../components/common/Footer";

import Box from "@mui/material/Box";
import { dealData, furnitureData } from "../utils/Navdata";
import { useState } from "react";


const Home = () => {

  const [query,setQuery] = useState(null);
  
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
