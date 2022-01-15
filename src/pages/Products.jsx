import NavBar from "../components/common/NavBar";
import TopBannerOtherPage from "../components/common/TopBannerOtherPage";
import Filter from "../components/products/Filter";
import { Grid, Typography, Pagination } from "@mui/material/";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footer from "../components/common/Footer";
// import Pagination from "../components/products/Pagination";

import ProductCard from "../components/products/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Api";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Products() {
  const { query } = useParams();
  const dispatch = useDispatch();

  const [rule, setRule] = useState("");
  const [value, setValue] = useState(0);
  const [page, setPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const products = useSelector((state) => state.product.products);

  const perPage = 12;
  const product = products.filter(
    (value, i) => i >= (page - 1) * perPage && i < page * perPage
  );

  const handleSort = (n) => {
    setRule(n);
  };

  console.log(product);
  useEffect(() => dispatch(getProducts(query)), [page]);

  const breadcrumbs = [
    <Link to="/" style={{ fontSize: "12px", color: "#878787" }}>
      Home
    </Link>,
    <Typography sx={{ fontSize: "12px", color: "#878787" }}>
      Watches
    </Typography>,
  ];
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
                  minHeight: "72px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div>
                  <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                  </Breadcrumbs>
                </div>
                <div>
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      marginTop: "8px",
                      display: "inline-block",
                      color: "#212121",
                      lineHeight: 1.4,
                    }}
                  >
                    Showing 1 - {product.length} of {products.length} results
                    for <span>"</span>
                    {query}
                    <span>"</span>
                  </span>{" "}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      borderBottom: "2px solid transparent",
                      display: "inline-block",
                      fontWeight: 500,
                      padding: "8px 10px 4px 0",
                    }}
                  >
                    Sort By
                  </span>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "8px 0 4px",
                        margin: "0 10px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                      label="Relevance"
                      {...a11yProps(0)}
                    />
                    <Tab
                      sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "8px 0 4px",
                        margin: "0 10px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                      label="Popularity"
                      {...a11yProps(1)}
                    />
                    <Tab
                      sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "8px 0 4px",
                        margin: "0 10px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                      label="Price -- Low to High"
                      {...a11yProps(2)}
                      onClick={() => handleSort("Asc")}
                    />
                    <Tab
                      sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "8px 0 4px",
                        margin: "0 10px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                      label="Price -- High to Low"
                      {...a11yProps(3)}
                      onClick={() => handleSort("Desc")}
                    />
                    <Tab
                      sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        padding: "8px 0 4px",
                        margin: "0 10px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                      label="Newest First"
                      {...a11yProps(4)}
                    />
                  </Tabs>
                </div>
              </div>
              <div
                style={{
                  display: "block",
                  maxWidth: "100%",
                  paddingTop: "8px",
                }}
              >
                <Grid
                  container
                  sx={{ paddingTop: "8px" }}
                  spacing={1}
                  justifyContent="space-between"
                >
                  {product
                    ?.sort((a, b) => {
                      if (rule === null) {
                        return 0;
                      }
                      if (rule === "Asc") {
                        return (
                          a.price -
                          (a.price * a.discount) / 100 -
                          (b.price - (b.price * b.discount) / 100)
                        );
                      }
                      if (rule === "Desc") {
                        return (
                          b.price -
                          (b.price * b.discount) / 100 -
                          (a.price - (a.price * a.discount) / 100)
                        );
                      }
                    })
                    .map((item) => (
                      <ProductCard item={item} />
                    ))}
                  <div style={{ margin: "0 8px", width: "100%" }}>
                    <div
                      style={{
                        background: "#fff",
                        borderTop: "1px solid #e0e0e0",
                        display: "flex",
                        justifyContent: "space-between",

                        alignItems: "center",
                        padding: "10px",
                        lineHeight: "32px",
                      }}
                    >
                      <div>Page 1 of 10</div>
                      <div style={{ width: "60%" }}>
                        <Pagination
                          count={10}
                          color="primary"
                          onChange={(e, v) => setPage(v)}
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
