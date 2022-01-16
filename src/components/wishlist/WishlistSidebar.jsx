import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function WishlistSidebar() {
  return (
    <div>
      <div>
        <div
          style={{
            padding: "12px",
            marginBottom: "16px",
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: "2px",
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 8%)",
          }}
        >
          <img
            src="	https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg"
            width="50px"
            height="50px"
            style={{ verticalAlign: "middle" }}
            alt="profile"
          />
          <div style={{ padding: "5px 0 0 16px", width: "calc(100% - 50px)" }}>
            <div style={{ fontSize: "12px" }}>Hello ,</div>
            <div
              style={{
                paddingTop: "3px",
                fontSize: "16px",
                fontWeight: 500,

                display: "flex",

                alignItems: "center",
                textTransform: "capitalize",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              Account
            </div>
          </div>
        </div>
        <div
          style={{
            marginBottom: "16px",
            backgroundColor: "#fff",
            borderRadius: "2px",
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 8%)",
          }}
        >
          <div>
            <div style={{ paddingBottom: "16px" }}>
              <div
                style={{
                  padding: "20px 12px 5px 24px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  width="20px"
                  height="20px"
                  alt="orders"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg=="
                />
                <span
                  style={{
                    width: "70%",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#878787",
                    cursor: "pointer",
                  }}
                >
                  MY ORDERS
                </span>
                <span style={{ marginTop: "4px", float: "right" }}>
                  <ArrowForwardIosIcon
                    sx={{ color: "#878787", fontSize: "16px" }}
                  />
                </span>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #f0f0f0" }}></div>
          </div>
          <div>
            <div style={{ paddingBottom: "16px" }}>
              <div
                style={{
                  padding: "20px 12px 5px 24px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  width="20px"
                  height="20px"
                  alt="orders"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4="
                />
                <span
                  style={{
                    width: "70%",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#878787",
                    cursor: "pointer",
                  }}
                >
                  ACCOUNT SETTINGS
                </span>
                <span style={{ marginTop: "4px", float: "right" }}>
                  <ArrowForwardIosIcon
                    sx={{ color: "#878787", fontSize: "16px" }}
                  />
                </span>
              </div>
              <div>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    Profile Information
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    Manage Addresses
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    PAN Card Information
                  </div>
                </a>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #f0f0f0" }}></div>
          </div>
          <div>
            <div style={{ paddingBottom: "16px" }}>
              <div
                style={{
                  padding: "20px 12px 5px 24px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  width="20px"
                  height="20px"
                  alt="orders"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+"
                />
                <span
                  style={{
                    width: "70%",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#878787",
                    cursor: "pointer",
                  }}
                >
                  PAYMENTS
                </span>
                <span style={{ marginTop: "4px", float: "right" }}>
                  <ArrowForwardIosIcon
                    sx={{ color: "#878787", fontSize: "16px" }}
                  />
                </span>
              </div>
              <div>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    Gift Cards
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    Saved UPI
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    Saved Cards
                  </div>
                </a>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #f0f0f0" }}></div>
          </div>
          <div>
            <div style={{ paddingBottom: "16px" }}>
              <div
                style={{
                  padding: "20px 12px 5px 24px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  width="20px"
                  height="20px"
                  alt="orders"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+"
                />
                <span
                  style={{
                    width: "70%",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#878787",
                    cursor: "pointer",
                  }}
                >
                  MY STUFF
                </span>
                <span style={{ marginTop: "4px", float: "right" }}>
                  <ArrowForwardIosIcon
                    sx={{ color: "#878787", fontSize: "16px" }}
                  />
                </span>
              </div>
              <div>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    My Coupon
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    My Reviews & Ratings
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                    }}
                  >
                    All Notifications
                  </div>
                </a>
                <a href="/" style={{ color: "black" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      padding: "12px 5px 12px 66px",
                      cursor: "pointer",
                      fontWeight: 500,
                      color: "#2874f0",
                      backgroundColor: "#f5faff",
                    }}
                  >
                    My Wishlist
                  </div>
                </a>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #f0f0f0" }}></div>
          </div>
          <div>
            <div style={{ paddingBottom: "16px" }}>
              <div
                style={{
                  padding: "20px 12px 5px 24px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <PowerSettingsNewIcon
                  sx={{ color: "rgb(40, 116, 240)", fontSize: "22px" }}
                />
                <span
                  style={{
                    width: "70%",
                    paddingLeft: "20px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#878787",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </span>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #f0f0f0" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
