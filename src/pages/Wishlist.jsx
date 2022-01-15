import NavBar from "../components/common/NavBar";
import TopBannerOtherPage from "../components/common/TopBannerOtherPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWishList } from "../redux/Api";
import { saveData } from "../utils/localStorage";

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
    </div>
  );
}
