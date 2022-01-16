import NavBar from "../components/common/NavBar";
import TopBannerOtherPage from "../components/common/TopBannerOtherPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWishList } from "../redux/Api";
import { saveData } from "../utils/localStorage";

import WishlistItem from "../components/wishlist/WishlistItem";
import WishlistSidebar from "../components/wishlist/WishlistSidebar";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.product.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("wishlist");
    saveData("wishlist", wishlist);
    dispatch(getWishList());
  }, [wishlist]);

  console.log(wishlist);
  return (
    <div>
      <NavBar />
      <TopBannerOtherPage />
      <div
        style={{
          margin: "0 auto",
          maxWidth: "1366px",
          minWidth: "1128px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            position: "relative",
            padding: "14px 0",
            width: "100%",
            display: "flex",
          }}
        >
          <div style={{ width: "25%" }}>
            <WishlistSidebar />
          </div>
          <div style={{ width: "75%", paddingLeft: "16px" }}>
            <WishlistItem />
          </div>
        </div>
      </div>
    </div>
  );
}
