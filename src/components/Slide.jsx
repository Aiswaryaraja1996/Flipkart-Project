import { Box, Typography, Button, Divider } from "@mui/material/";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiSlide = ({ data, timer, title }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <Box sx={{ background: "#FFFFFF" }}>
      <Box
        sx={{
          display: "flex",
          padding: "15px 20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            style={{
              fontSize: 22,
              fontWeight: 600,
              lineHeight: "32px",
              marginRight: 25,
            }}
          >
            {title}
          </Typography>
          {timer && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "10px",
              }}
            >
              <img src={timerURL} style={{ width: 24 }} alt="time clock" />
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            </Box>
          )}
        </div>

        <Button variant="contained" color="primary">
          View All
        </Button>
      </Box>
      <Divider />
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((temp) => (
          <a href="/" style={{ textDecoration: "none" }}>
            <Box textAlign="center" sx={{ padding: "25px 15px" }}>
              <img
                src={temp.image}
                style={{ width: "auto", height: 150 }}
                alt={temp.id}
              />
              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  fontWeight: 600,
                  color: "#212121",
                }}
              >
                {temp.title}
              </Typography>
              <Typography
                style={{ fontSize: 14, marginTop: 5, color: "green" }}
              >
                {temp.price}
              </Typography>
              {/* <Typography
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: "#212121",
                  opacity: ".6",
                }}
              >
                {temp.title}
              </Typography> */}
            </Box>
          </a>
        ))}
      </Carousel>
    </Box>
  );
};

const Slide = (props) => {
  return <>{props.multi === true ? <MultiSlide {...props} /> : ""}</>;
};

export default Slide;
