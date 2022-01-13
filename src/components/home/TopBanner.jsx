import { Box, Typography } from "@mui/material";
import { navData } from "../../utils/Navdata";

const TopBanner = () => {
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
            <img src={temp.url} style={{ width: 64 }} alt={temp.title} />
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, fontFamily: "inherit" }}
            >
              {temp.text}
            </Typography>
          </Box>
        ))}
      </Box>
     
      </div>
  
  );
};

export default TopBanner;
