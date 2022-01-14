import NavBar from "../components/common/NavBar";
import TopBannerOtherPage from "../components/common/TopBannerOtherPage";
import Filter from "../components/products/Filter";
import Grid from "@mui/material/Grid";

import ProductCard from "../components/products/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Api";


export default function Products() {
  const { query } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.products);

  console.log(product);
  useEffect(() => dispatch(getProducts(query)), []);
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
                    {product?.map((item) => (
                      <ProductCard item={item} />
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
