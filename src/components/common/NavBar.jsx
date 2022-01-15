import * as React from "react";
import AppBar from "@mui/material/AppBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Stack, Box, Toolbar, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "@mui/material/Modal";
import Login from "./Login";
import { Link } from "react-router-dom";
import { handleLogout } from "../../redux/Api";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BadgeUnstyled from "@mui/base/BadgeUnstyled";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 10px;
  font-variant: tabular-nums;
  list-style: none;

  position: relative;
  display: inline-block;
  line-height: 1;

  & .MuiBadge-badge {
    z-index: auto;
    min-width: 12px;
    height: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #ff4d4f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 6px;
    width: 6px;
    height: 6px;
    background: #ff4d4f;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-anchorOriginTopRight {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;

const Search = styled("div")(({ theme }) => ({
  borderRadius: "2px",
  height: "36px",
  width: "564px !important",
  backgroundColor: "white",

  padding: "0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "80%",
}));

const LoginButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "white",
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.primary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const [query, setQuery] = useState(null);

  const cart = useSelector((state) => state.product.cart);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    if (isAuth) {
      handleCloseModal();
    }
  }, [isAuth,cart]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", height: "56px", justifyContent: "center" }}
      >
        <Toolbar sx={{ minHeight: "auto !important" }}>
          <Stack
            direction="row"
            spacing={4}
            align="center"
            sx={{
              maxWidth: "1248px",
              margin: "0 auto",

              width: "100%",
            }}
          >
            {/* Logo Item */}
            <Stack direction="column">
              <img
                width="75"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                alt="Flipkart"
                title="Flipkart"
              />

              <div style={{ fontSize: "11px", fontStyle: "italic" }}>
                Explore
                <span
                  style={{
                    color: "#ffe500",
                    fontWeight: "500",
                    margin: "0 2px",
                  }}
                >
                  Plus
                </span>
                <img
                  width="10"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt="logo"
                ></img>
              </div>
            </Stack>

            {/* Search Bar */}
            <Search>
              <StyledInputBase
                placeholder="Search for products, brands and more"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => setQuery(e.target.value)}
              />

              <SearchIconWrapper>
                <Link to={`/products/${query}`}>
                  <SearchIcon sx={{ color: "blue" }} />
                </Link>
              </SearchIconWrapper>
            </Search>
            <div style={{ width: "150px" }}></div>

            <Stack direction="row" spacing={3}>
              <div>
                {isAuth ? (
                  <Button
                    sx={{
                      width: "100%",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "transparent !important",
                        boxShadow: "none",
                      },
                    }}
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Account
                  </Button>
                ) : (
                  <LoginButton
                    id="demo-login-button"
                    aria-controls={open ? "demo-customized-login" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleOpenModal}
                    sx={{
                      backgroundColor: "white",
                      color: "blue",
                      borderRadius: "2px",
                      padding: "5px 40px",
                    }}
                  >
                    Login
                  </LoginButton>
                )}

                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Login />
                </Modal>
              </div>

              <div>
                <Button
                  sx={{
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "transparent !important",
                      boxShadow: "none",
                    },
                  }}
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Menu
                </Button>

                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClick={handleClose}
                >
                  <MenuItem disableRipple>
                    <AccountCircleIcon color="primary" />
                    My Profile
                  </MenuItem>
                  <MenuItem disableRipple>
                    <PaymentsIcon color="primary" />
                    Orders
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem disableRipple>
                    <FavoriteIcon color="primary" />
                    Wishlist
                  </MenuItem>
                  <MenuItem
                    onClick={() => dispatch(handleLogout())}
                    disableRipple
                  >
                    <LogoutIcon color="primary" />
                    Logout
                  </MenuItem>
                </StyledMenu>
              </div>

              <Button
                sx={{
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "transparent !important",
                    boxShadow: "none",
                  },
                }}
                variant="contained"
                startIcon={
                  cart.length === 0 ? (
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  ) : (
                    <StyledBadge badgeContent={cart.length}>
                      <ShoppingCartIcon sx={{ color: "white" }} />
                    </StyledBadge>
                  )
                }
              >
                <Link style={{ textDecoration: "none" }} to="/cart">
                  Cart
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
