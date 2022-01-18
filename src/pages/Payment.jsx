import NavBar from "../components/common/NavBar";
import { TextField } from "@mui/material";
import { useState, useEffect, forwardRef } from "react";
import { useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import * as actions from "../redux/Action";

import { CartFooter } from "../components/cart/CartFooter";

import CartItem from "../components/cart/CartItem";
import TotalCard from "../components/cart/TotalCard";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useDispatch } from "react-redux";
import { getCart } from "../redux/Api";
import { saveData } from "../utils/localStorage";

import AddIcon from "@mui/icons-material/Add";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { deleteCartData } from "../redux/Api";
import { useHistory } from "react-router-dom";

function randomFour() {
  var val = Math.floor(1000 + Math.random() * 9000);
  return val;
}
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Payment() {
  const cartItems = useSelector((state) => state.product.cart);
  const [cod, setCod] = useState(false);
  const [order, setOrder] = useState(false);
  const [payment, setPayment] = useState(false);
  const [gift, setGift] = useState(false);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const { cartDetails } = cartItems;

  localStorage.removeItem("cart");
  saveData("cart", cartItems);

  useEffect(() => {
    dispatch(getCart());
  }, [cartDetails]);

  const handlePayment = (e) => {
    console.log(e.target.value);
    setCod(!cod);
  };

  const handleOrder = () => {
    setOrder(!order);
  };

  const handlePaymentMethod = () => {
    setPayment(!payment);
  };

  const handleGift = () => {
    setGift(!gift);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    cartItems?.map((item) => dispatch(deleteCartData(item.id)));
    const emptyCart = actions.emptyCart();
    dispatch(emptyCart);
    setTimeout(() => {
      history.push("/cart");
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <NavBar page={2} />
      <div>
        <div
          style={{
            margin: "80px auto",
            minWidth: "1128px",
            display: "flex",
            userSelect: "none",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "inline-block", alignItems: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  marginBottom: "16px",
                  position: "relative",
                  display: "inline-block",
                  boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  width: "848px",
                }}
              >
                <div
                  style={{
                    padding: "16px 24px",
                    minHeight: "72px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <h3
                    style={{
                      textTransform: "uppercase",
                      color: "#878787",
                      fontSize: "16px",
                      fontWeight: 500,
                      margin: 0,
                      borderRadius: "2px 2px 0 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#2874f0",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "2px",
                        padding: "3px 7px",
                        verticalAlign: "baseline",
                        marginRight: "17px",
                      }}
                    >
                      1
                    </span>
                  </h3>
                  <div style={{ display: "inline-block" }}>
                    <div
                      style={{
                        color: "#878787",
                        fontSize: "16px",
                        fontWeight: 500,
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      Login
                      <svg
                        height="10"
                        width="16"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          verticalAlign: "top",
                          height: "20px",
                          marginLeft: "8px",
                        }}
                      >
                        <path
                          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                          stroke="#2974f0"
                        ></path>
                      </svg>
                    </div>
                    <div style={{ fontSize: "14px", maxWidth: "630px" }}>
                      <div>
                        <span style={{ color: "#212121", fontWeight: 500 }}>
                          Account
                        </span>
                        <span style={{ marginLeft: "6px" }}>+919562152083</span>
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      padding: "0 32px",
                      height: "40px",
                      borderRadius: "2px",
                      border: "1px solid #e0e0e0",
                      color: "#2874f0",
                      fontSize: "14px",
                      fontWeight: 500,
                      background: "#fff",
                      marginLeft: "auto",
                      cursor: "pointer",
                      textTransform: "uppercase",
                    }}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  marginBottom: "16px",
                  position: "relative",
                  display: "inline-block",
                  boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  width: "848px",
                }}
              >
                <div
                  style={{
                    padding: "16px 24px",
                    minHeight: "72px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <h3
                    style={{
                      textTransform: "uppercase",
                      color: "#878787",
                      fontSize: "16px",
                      fontWeight: 500,
                      margin: 0,
                      borderRadius: "2px 2px 0 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#2874f0",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "2px",
                        padding: "3px 7px",
                        verticalAlign: "baseline",
                        marginRight: "17px",
                      }}
                    >
                      2
                    </span>
                  </h3>
                  <div style={{ display: "inline-block" }}>
                    <div
                      style={{
                        color: "#878787",
                        fontSize: "16px",
                        fontWeight: 500,
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      DELIVERY ADDRESS
                      <svg
                        height="10"
                        width="16"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          verticalAlign: "top",
                          height: "20px",
                          marginLeft: "8px",
                        }}
                      >
                        <path
                          d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                          stroke="#2974f0"
                        ></path>
                      </svg>
                    </div>
                    <div style={{ fontSize: "14px", maxWidth: "630px" }}>
                      <div>
                        <span style={{ color: "#212121", fontWeight: 500 }}>
                          Account
                        </span>
                        <span style={{ marginLeft: "6px" }}>
                          Palakkad 678011 Kerala
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      padding: "0 32px",
                      height: "40px",
                      borderRadius: "2px",
                      border: "1px solid #e0e0e0",
                      color: "#2874f0",
                      fontSize: "14px",
                      fontWeight: 500,
                      background: "#fff",
                      marginLeft: "auto",
                      cursor: "pointer",
                      textTransform: "uppercase",
                    }}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  marginBottom: "16px",
                  position: "relative",
                  display: "inline-block",
                  boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  width: "848px",
                }}
              >
                <div
                  onClick={handleOrder}
                  style={{
                    padding: "16px 24px",

                    display: "flex",
                    alignItems: "flex-start",
                    color: order ? "#fff" : "#878787",
                    backgroundColor: order ? "#2874f0" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <h3
                    style={{
                      textTransform: "uppercase",
                      color: "#878787",
                      fontSize: "16px",
                      fontWeight: 500,
                      margin: 0,
                      borderRadius: "2px 2px 0 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#2874f0",
                        backgroundColor: order ? "#fff" : "#f0f0f0",

                        borderRadius: "2px",
                        padding: "3px 7px",
                        verticalAlign: "baseline",
                        marginRight: "17px",
                      }}
                    >
                      3
                    </span>
                  </h3>
                  <div style={{ display: "inline-block" }}>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      ORDER SUMMARY
                    </div>
                  </div>
                </div>
                {order && (
                  <div>
                    {cartItems.map((item) => (
                      <CartItem item={item} key={item.id}/>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  marginBottom: "16px",
                  position: "relative",
                  display: "inline-block",
                  boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  width: "848px",
                }}
              >
                <div
                  style={{
                    padding: "16px 24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-start",
                    color: payment ? "#fff" : "#878787",
                    backgroundColor: payment ? "#2874f0" : "#fff",
                  }}
                >
                  <h3
                    style={{
                      textTransform: "uppercase",
                      color: "#878787",
                      fontSize: "16px",
                      fontWeight: 500,
                      margin: 0,
                      borderRadius: "2px 2px 0 0",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#2874f0",
                        backgroundColor: payment ? "#fff" : "#f0f0f0",
                        borderRadius: "2px",
                        padding: "3px 7px",
                        verticalAlign: "baseline",
                        marginRight: "17px",
                      }}
                    >
                      4
                    </span>
                  </h3>
                  <div style={{ display: "inline-block" }}>
                    <div
                      onClick={handlePaymentMethod}
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        marginBottom: "6px",
                        textTransform: "uppercase",
                      }}
                    >
                      PAYMENT METHODS
                    </div>
                  </div>
                </div>
                {payment && (
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="payment"
                        defaultValue="upi"
                        name="radio-buttons-group"
                      >
                        <div
                          style={{
                            borderBottom: "1px solid #f0f0f0",
                            padding: "16px 25px",
                          }}
                        >
                          <FormControlLabel
                            value="upi"
                            control={<Radio />}
                            label="UPI"
                            sx={{
                              "& .MuiTypography-root": { fontSize: "14px" },
                            }}
                          />
                        </div>

                        <div
                          style={{
                            borderBottom: "1px solid #f0f0f0",
                            padding: "16px 25px",
                          }}
                        >
                          <FormControlLabel
                            value="netbanking"
                            control={<Radio />}
                            label="Net Banking"
                            sx={{
                              "& .MuiTypography-root": { fontSize: "14px" },
                            }}
                          />
                        </div>

                        <div
                          style={{
                            borderBottom: "1px solid #f0f0f0",
                            padding: "16px 25px",
                          }}
                        >
                          <FormControlLabel
                            onFocus={handlePayment}
                            value="cod"
                            control={<Radio />}
                            label="Cash on Delivery"
                            sx={{
                              "& .MuiTypography-root": { fontSize: "14px" },
                            }}
                          />
                          {cod && (
                            <div style={{ marginLeft: "20px" }}>
                              <TextField
                                id="outlined-size-small"
                                size="small"
                                sx={{ width: "70px", textAlign: "center" }}
                                value={randomFour()}
                                InputProps={{
                                  readOnly: true,
                                }}
                              />
                              <TextField
                                sx={{ marginLeft: "20px" }}
                                label="Enter the characters"
                                id="outlined-size-small"
                                size="small"
                              />
                              <button
                                style={{
                                  marginLeft: "20px",
                                  background: "#fb641b",
                                  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
                                  border: "none",
                                  color: "#fff",
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  verticalAlign: "top",
                                  borderRadius: "2px",
                                  padding: "10px 32px",
                                  cursor: "pointer",
                                }}
                                onClick={handleClick}
                              >
                                CONFIRM ORDER
                              </button>
                              <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={handleClose}
                              >
                                <Alert
                                  onClose={handleClose}
                                  severity="success"
                                  sx={{ width: "100%" }}
                                >
                                  Order Placed Successfully!
                                </Alert>
                              </Snackbar>
                            </div>
                          )}
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                )}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div
                style={{
                  marginBottom: "16px",
                  position: "relative",
                  display: "inline-block",
                  boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%)",
                  backgroundColor: "#fff",
                  borderRadius: "2px",
                  width: "848px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    padding: "16px 24px",

                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {gift ? <RemoveIcon /> : <AddIcon />}

                  <div style={{ display: "inline-block" }}>
                    <div
                      onClick={handleGift}
                      style={{
                        color: "black",
                        fontSize: "16px",

                        marginBottom: "6px",
                        marginLeft: "6px",
                        marginTop: "2px",
                      }}
                    >
                      Add Gift Card
                    </div>
                    {gift && (
                      <div style={{ padding: "10px 0px" }}>
                        <TextField
                          label="Voucher Number"
                          id="outlined-size-small"
                          size="small"
                        />
                        <TextField
                          sx={{ marginLeft: "20px" }}
                          label="Voucher Pin"
                          id="outlined-size-small"
                          size="small"
                        />
                        <button
                          style={{
                            marginLeft: "20px",
                            background: "#fb641b",
                            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
                            border: "none",
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: 400,
                            verticalAlign: "top",
                            borderRadius: "2px",
                            padding: "10px 32px",
                            cursor: "pointer",
                          }}
                          onClick={() => setDiscount(1)}
                        >
                          APPLY
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              height: "auto",
              width: "368px",
              marginLeft: "16px",
              position: "relative",

              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <TotalCard cartItems={cartItems} coupon={discount} key={1} />
          </div>
        </div>
      </div>
      <CartFooter />
    </div>
  );
}
