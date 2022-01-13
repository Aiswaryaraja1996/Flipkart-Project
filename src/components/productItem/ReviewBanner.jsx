import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ReviewBanner() {
  return (
    <div
      style={{
        borderBottom: "2px solid #f0f0f0",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "24px",
      }}
    >
      <div style={{ padding: "24px 0", display: "flex" }}>
        <div
          style={{
            padding: "2px 7px",
            borderRadius: "12px",
            fontSize: "12px",
            backgroundColor: "#26a541",
            verticalAlign: "baseline",
            margin: "0 10px 0 0",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>5</span>
          <img
            style={{ marginLeft: "2px", height: "10px" }}
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
            alt="star"
          />
        </div>
        <div
          style={{
            display: "inline",
            verticalAlign: "baseline",
            margin: "auto 0",
            lineHeight: 1.43,
          }}
        >
          Very nice product it is fabulous I really love it thank you flipcart
          🤩🤩🤩
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <p style={{ fontSize: "12px", color: "#878787", marginRight: "8px" }}>
            Anonymous
          </p>
          <p style={{ fontSize: "12px", color: "#878787", marginRight: "8px" }}>
            Dec 2020
          </p>
        </div>
        <div
          style={{
            color: "#878787",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThumbUpIcon sx={{ marginLeft: "8px", fontSize: "18px" }} />{" "}
          <span style={{ marginLeft: "2px" }}>8</span>
          <ThumbDownIcon sx={{ marginLeft: "8px", fontSize: "18px" }} />{" "}
          <span style={{ marginLeft: "2px" }}>10</span>
          <MoreVertIcon sx={{ marginLeft: "8px", fontSize: "18px" }} />
        </div>
      </div>

      <div
        style={{
          color: "#878787",
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: "18px", color: "#878787" }} />{" "}
        <span>Certified Buyer Kerala</span>
      </div>
    </div>
  );
}
