import { Box, Typography,Paper } from "@mui/material";
import { navData } from "../utils/Navdata";

const TopBannerOtherPage = () => {
  return (
  
      <div style={{boxShadow: "0 1px 1px 0 rgb(0 0 0 / 16%)",zIndex:6,backgroundColor:"white"}}
     
      >
      <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "55px 130px 0 130px",
          overflowX: "overlay",
        }}>


      {navData.map((temp) => (
          <Box sx={{ padding: "12px 8px", textAlign: "center" }}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 500, fontFamily: "inherit" }}
            >
              {temp.text}
            </Typography>
          </Box>
        ))}
      </Box>
     
      </div>
  
  );
};

export default TopBannerOtherPage;
