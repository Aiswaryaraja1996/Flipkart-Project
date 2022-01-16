import { useSelector } from "react-redux";
import WishlistItemCard from "./WishlistItemCard";

export default function WishlistItem() {
  const wishlist = useSelector((state) => state.product.wishlist);
  return (
    <div style={{ minHeight: "300px" }}>
      <div
        style={{
          background: "#fff",
          position: "relative",
          borderRadius: "2px",
          boxShadow: "0 2px 4px 0 rgb(0 0 0 / 8%)",
        }}
      >
        <div
          style={{
            padding: "20px 30px",
            fontSize: "17px",
            fontWeight: 500,
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <span>My Wishlist ({wishlist.length})</span>
        </div>
        {wishlist?.map((item)=><WishlistItemCard item={item}/>)}
      </div>
    </div>
  );
}
