import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material/";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import StarIcon from "@mui/icons-material/Star";

import Footer from "../components/common/Footer";
import ProductBanner from "../components/productItem/ProductBanner";
import NavBar from "../components/common/NavBar";
import TopBannerOtherPage from "../components/common/TopBannerOtherPage";
import ReviewBanner from "../components/productItem/ReviewBanner";

import { useDispatch, useSelector } from "react-redux";
import { handleAddCart } from "../redux/Api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getSingleProduct } from "../redux/Api";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSingleProduct(id)), []);

  const product = useSelector((state) => state.product.product);

  const cart = useSelector((state) => state.product.cart);

  var inCart = cart?.find((item) => {
    return item.id === product.id;
  });

  console.log(inCart);

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <div style={{ backgroundColor: "#f1f3f6" }}>
      <NavBar />
      <TopBannerOtherPage />

      {Object.keys(product).length > 0 && (
        <Box
          sx={{
            margin: "1px auto",
            maxWidth: "1366px",
            minWidth: "1128px",
            padding: 0,
            position: "relative",
          }}
        >
          <Grid
            container
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "16px 16px 16px 16px",
            }}
          >
            <Grid item xs={5}>
              <Box
                sx={{
                  position: "sticky",
                  top: "64px",
                  bottom: 0,
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    width: "528px",
                    height: "512px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.url}
                    style={{
                      height: "100%",
                    }}
                    alt={product.id}
                  />
                </Box>

                <div
                  style={{
                    margin: "12px",
                    width: "528px",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      background: "#ff9f00",
                      color: "#FFF",
                      width: "46%",
                      height: 50,
                      borderRadius: "none",
                      "&:hover": {
                        backgroundColor: "#ff9f00",
                      },
                    }}
                    style={{ marginRight: 10 }}
                    variant="contained"
                    onClick={() =>
                      dispatch(
                        handleAddCart(
                          product.id,
                          product.title,
                          product.discount,
                          product.price,
                          1,
                          product.url
                        )
                      )
                    }
                  >
                    <ShoppingCartIcon sx={{ color: "#FFF" }} />

                    {inCart ? "Go to Cart" : "Add to Cart"}
                  </Button>
                  <Button
                    sx={{
                      background: "#fb641b",
                      color: "#FFF",
                      width: "46%",
                      borderRadius: "none",
                      height: 50,
                      "&:hover": {
                        backgroundColor: "#fb641b",
                      },
                    }}
                    variant="contained"
                  >
                    <FlashOnIcon sx={{ color: "#FFF" }} /> Buy Now
                  </Button>
                </div>
              </Box>
            </Grid>

            <Grid
              item
              xs={7}
              sx={{
                marginTop: "6px",
                "& > *": {
                  marginLeft: "24px",
                },
              }}
            >
              <h1
                style={{
                  marginTop: "12px",
                  color: "#878787",
                  fontSize: "17px",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {product.title}
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "18px",
                    marginTop: "3px",
                  }}
                >
                  {product.shortTitle}
                </Typography>
              </h1>

              <p
                style={{
                  marginBottom: "0px",
                  marginTop: "6px",
                  fontSize: "14px",
                  color: "#26a541",
                  fontWeight: 500,
                }}
              >
                Special Price
              </p>

              <Typography sx={{ marginLeft: "24px" }}>
                <span style={{ fontSize: "28px" }}>
                  ₹
                  {Math.floor(
                    Number(product.price) -
                      (Number(product.discount) * Number(product.price)) / 100
                  )}
                </span>
                &nbsp;&nbsp;&nbsp;
                <span
                  style={{
                    color: "#878787",
                    fontSize: "16px",
                  }}
                >
                  <strike>₹{product.price}</strike>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span
                  style={{
                    color: "#26a541",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  {product.discount}% off
                </span>
              </Typography>

              <Typography
                sx={{
                  color: "#878787",
                  fontSize: "14px",
                  marginLeft: "24px",
                }}
                style={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginLeft: "24px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#26a541",
                    color: "white",
                    gap: "0.25rem",
                    padding: "2px 7px",
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  <span>{product.avgRate}</span>
                  <StarIcon
                    style={{
                      color: "white",
                      fontSize: "18px",
                    }}
                  />
                </Box>

                <span style={{ fontSize: "16px", fontWeight: 500 }}>
                  {product.avgRate} ratings and {product.customerRatings.length}{" "}
                  reviews
                </span>
                <span>
                  <img src={fassured} style={{ width: 77 }} alt="fassured" />
                </span>
              </Typography>

              <Stack direction="column" sx={{ marginTop: "10px" }}>
                <div style={{ fontSize: "16px", fontWeight: 500 }}>
                  Available offers
                </div>
                <div
                  style={{
                    lineHeight: 1.43,
                    color: "#212121",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ marginTop: "12px", display: "flex" }}>
                    <img
                      src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                      width="18"
                      height="18"
                      style={{ marginRight: "10px" }}
                      alt="img"
                    />
                    <li style={{ listStyle: "none", display: "flex" }}>
                      <span style={{ fontWeight: 500, paddingRight: "4px" }}>
                        Special Price
                      </span>
                      <span>
                        Get extra 20% off (price inclusive of discount)
                      </span>
                      <div
                        style={{
                          color: "#2874f0",
                          fontWeight: 500,
                          display: "inline-block",
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <span>T&amp;C</span>
                      </div>
                    </li>
                  </span>

                  <span style={{ marginTop: "12px", display: "flex" }}>
                    <img
                      src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                      width="18"
                      height="18"
                      style={{ marginRight: "10px" }}
                      alt="img"
                    />
                    <li style={{ listStyle: "none", display: "flex" }}>
                      <span style={{ fontWeight: 500, paddingRight: "4px" }}>
                        Bank Offer
                      </span>
                      <span>
                        5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                      </span>
                      <div
                        style={{
                          color: "#2874f0",
                          fontWeight: 500,
                          display: "inline-block",
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <span>T&amp;C</span>
                      </div>
                    </li>
                  </span>

                  <span style={{ marginTop: "12px", display: "flex" }}>
                    <img
                      src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                      width="18"
                      height="18"
                      style={{ marginRight: "10px" }}
                      alt="img"
                    />
                    <li style={{ listStyle: "none", display: "flex" }}>
                      <span style={{ fontWeight: 500, paddingRight: "4px" }}>
                        Partner Offer
                      </span>
                      <span>
                        Sign up for Flipkart Pay Later and get Flipkart Gift
                        Card worth ₹100*
                      </span>
                      <div
                        style={{
                          color: "#2874f0",
                          fontWeight: 500,
                          display: "inline-block",
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                      >
                        <span>Know More</span>
                      </div>
                    </li>
                  </span>
                </div>
              </Stack>

              <Table>
                <TableBody>
                  <TableRow style={{ fontSize: "14px" }}>
                    <TableCell
                      style={{
                        color: "#878787",
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.5rem",
                        paddingLeft: 0,
                        fontWeight: 500,
                      }}
                    >
                      Warranty{" "}
                      <span style={{ color: "black" }}> No Warranty</span>
                    </TableCell>
                  </TableRow>

                  <TableRow style={{ fontSize: "14px" }}>
                    <TableCell
                      style={{
                        color: "#878787",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingLeft: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontWeight: 500,
                        }}
                      >
                        <img
                          alt="location"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
                        />
                        Deliver to
                      </div>
                      <div
                        style={{
                          padding: "12px",
                          border: "1px solid #e0e0e0",
                          borderRadius: "2px",
                          fontWeight: 500,
                          cursor: "pointer",

                          display: "flex",
                          width: "30%",

                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <div style={{ width: "90%", color: "black" }}>
                          <span>Palakkad - 678011</span>
                        </div>
                        <img
                          style={{ marginLeft: "20px" }}
                          width="9px"
                          height="5px"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjUiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTS4yMjcuNzAzQy0uMTY4LjMxNS0uMDMyIDAgLjUxNCAwaDcuOTY1Yy41NTYgMCAuNjg1LjMxNy4yOTguNjk4TDcuNjQgMS44MThsLTIuNDI3IDIuMzlhMS4wMiAxLjAyIDAgMCAxLTEuNDI3LS4wMDNMLjIyNy43MDN6Ii8+PC9zdmc+"
                          alt="icon"
                        />
                      </div>

                      <div style={{ color: "black", fontWeight: 500 }}>
                        Delivery by {date.toDateString()} | ₹40
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={2}>
                      <img src={adURL} style={{ width: 390 }} alt="url" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div style={{ borderTop: "2px solid #f0f0f0" }}>
                <display
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "32px 32px 32px 0px",
                      fontWeight: 500,
                      fontSize: "24px",
                    }}
                  >
                    Ratings & Reviews
                  </div>
                  <Typography
                    sx={{
                      color: "#878787",
                      fontSize: "14px",
                      marginRight: "32px",
                    }}
                    style={{
                      marginTop: 5,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#26a541",
                        color: "white",
                        gap: "0.25rem",
                        padding: "1px 10px",
                        borderRadius: "14px",
                        fontSize: "18px",
                        fontWeight: "normal",
                      }}
                    >
                      <span>{product.avgRate}</span>
                      <StarIcon
                        style={{
                          color: "white",
                          fontSize: "18px",
                        }}
                      />
                    </Box>

                    <span style={{ fontSize: "20px" }}>
                      {product.avgRate} ratings and{" "}
                      {product.customerRatings.length} reviews
                    </span>
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      height: "16px",
                      borderRadius: "none",
                      padding: "18px 12px",
                    }}
                  >
                    Rate Product
                  </Button>
                </display>
                <ReviewBanner />
                <ReviewBanner />
                <ReviewBanner />
              </div>
            </Grid>
          </Grid>
          <ProductBanner />
        </Box>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;
