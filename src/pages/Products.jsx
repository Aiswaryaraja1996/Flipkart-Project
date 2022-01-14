import NavBar from "../components/common/NavBar";
import TopBannerOtherPage from "../components/common/TopBannerOtherPage";
import Filter from "../components/products/Filter";
import Grid from "@mui/material/Grid";

import ProductCard from "../components/products/ProductCard";

const product = {
  id: 1,
  category: "watches",
  title: "TITAN",
  subCategory: "Wrist Watches",
  Brand: "TITAN",
  "Ideal for": ["Women", "Girls"],
  shortTitle:
    "New Arrival Stylish Attractive Ethnic Blue Bracelet Look Analog Watch for Girls Analog Watch - For Women",
  url: "https://rukminim1.flixcart.com/image/880/1056/jubjte80/watch/z/n/w/new-arrival-stylish-attractive-ethnic-blue-bracelet-look-analog-original-imaffg3vhgq6zsej.jpeg?q=50",
  altUrl:
    "https://rukminim1.flixcart.com/image/880/1056/jubjte80/watch/z/n/w/new-arrival-stylish-attractive-ethnic-blue-bracelet-look-analog-original-imafegehynzag7k9.jpeg?q=50",
  discount: 75,
  price: 1999,
  tagLine: "Deal of the day",
  avgRate: 4,
  customerRatings: [
    {
      ratings: "4.1",
      review:
        "Very nice product it is fabulous I really love it thank you flipcart",
      location: "Kerala",
      like: 100,
      dislike: 10,
    },
    {
      ratings: "4.1",
      review:
        "Very nice product it is fabulous I really love it thank you flipcart",
      location: "Kerala",
      like: 100,
      dislike: 10,
    },
    {
      ratings: "4.1",
      review:
        "Very nice product it is fabulous I really love it thank you flipcart",
      location: "Kerala",
      like: 100,
      dislike: 10,
    },
  ],
  qa: [
    {
      q: "Is it Water Proof ?",
      a: "Yes",
      name: "Anonymous",
      like: 100,
      dislike: 10,
    },
  ],
};

export default function Products() {
  return (
    <div style={{ backgroundColor: "#f1f3f6" }}>
      <NavBar />
      <TopBannerOtherPage />
      <div
        style={{
          margin: "0 auto",
          minWidth: "978px",
          maxWidth: "1680px",
          padding: "8px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: "0 0 270px",
              maxWidth: "270px",
              padding: "0px 10px 0px 0px",
              width: "16.66%",
              display: "flex",
              flexDirection: "column",
              flexWrap: "initial",
            }}
          >
            <Filter />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              flexWrap: "initial",
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                alignItems: "flex-end",
                dispaly: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "12px 16px 0",
                  borderBottom: "1px solid #f0f0f0",
                  height: "100%",
                  minHeight: "72px",
                }}
              >
                <div> </div>
                <div> </div>
                <div> </div>

                <div style={{ display: "block", maxWidth: "100%" }}>
                  <Grid
                    container
                    sx={{ paddingTop: "8px" }}
                    spacing={1}
                    justifyContent="space-between"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map(() => (
                      <ProductCard item={product} />
                    ))}
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
