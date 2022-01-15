import AccessoriesNavbar from "../components/AccessoriesNavbar";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FolderIcon from "@material-ui/icons/Folder";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import { Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyle = makeStyles({
  component: {
    marginTop: 60,
    display: "flex",
    width: "93%",
    gap: "1rem",
    margin: "auto",
    background: "#F1F3F6",
  },
  comp_hello: {
    // border: "1px solid black",
    display: "flex",
    padding: "5px 30px 5px 10px",
    gap: "1rem",
    alignItems: "center",
    background: "#FFFFFF",
    marginBottom: "15px",
  },
  component_left: {
    marginTop: "20px",
    width: "22%",
    // border: "1px solid green",
    borderLeft: "1px solid grey",
  },
  component_order: {
    // border: "1px solid black",
    padding: "5px 30px 5px 10px",
    alignItems: "center",
    background: "#FFFFFF",
  },
  component_order_inside: {
    display: "flex",
    alignItems: "center",
    padding: "5px 30px 5px 10px",

    background: "#FFFFFF",
  },
  component_right: {
    border: "1px solid black",
    marginTop: "20px",
    background: "#FFFFFF",

    width: "75%",
  },
});
export const Whislist = () => {
  const classes = useStyle();
  return (
    <Box>
      <AccessoriesNavbar />
      <Box className={classes.component}>
        <Box className={classes.component_left}>
          <Box className={classes.comp_hello}>
            <AccountCircleSharpIcon style={{ fontSize: "50" }} />
            <Typography variant="h6">hello</Typography>
          </Box>
          <Box className={classes.component_order}>
            <Box>
              <Box className={classes.component_order_inside}>
                <FolderIcon style={{ color: "#2974F1" }} />
                <Button
                  style={{ color: "grey" }}
                  endIcon={<ArrowForwardIosIcon />}
                >
                  MY ORDER
                </Button>
              </Box>
              <hr />
              <Box>
                <Box className={classes.component_order_inside}>
                  <AccountBalanceWalletIcon style={{ color: "#2974F1" }} />
                  <Button style={{ color: "grey" }}>ACCOUNT SETTINGS</Button>
                </Box>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Button>Profile Information</Button>
                  </li>
                  <li>
                    <Button>Manage Address</Button>
                  </li>

                  <li>
                    <Button>Pan Card Information</Button>
                  </li>
                </ul>
              </Box>
              <Box>
                <Box className={classes.component_order_inside}>
                  <AccountBoxIcon style={{ color: "#2974F1" }} />
                  <Button style={{ color: "grey" }}>PAYMENT</Button>
                </Box>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Button>Gift Card</Button>
                  </li>
                  <li>
                    <Button>Saved UPI</Button>
                  </li>

                  <li>
                    <Button>Saved Cards</Button>
                  </li>
                </ul>
              </Box>
              <Box>
                <Box className={classes.component_order_inside}>
                  <AccountBoxIcon style={{ color: "#2974F1" }} />
                  <Button style={{ color: "grey" }}>MY STUFF</Button>
                </Box>
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <Button>My Coupons</Button>
                  </li>
                  <li>
                    <Button>My Reviwes & Rating</Button>
                  </li>

                  <li>
                    <Button>All Notifications</Button>
                  </li>
                  <li>
                    <Button>My Whishlist</Button>
                  </li>
                </ul>
              </Box>
            </Box>
            <hr />
            <Box className={classes.component_order_inside}>
              <PowerSettingsNewIcon style={{ color: "#2974F1" }} />
              <Button style={{ color: "grey" }}>Logout</Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.component_right}>
          <Box>
            <Typography
              style={{ padding: "20px", marginLeft: "20px" }}
            >{`My Whishlist (${5})`}</Typography>
            <hr />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
