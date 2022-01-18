import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Filter({ handleRatings, handleIdealfor, handleBrand,handlePrice }) {
  const [value, setValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    console.log(value, newValue);
    setValue(newValue);
    handlePrice(value);
  };

  const handleMin = (e) => {
    var val = document.getElementById("max").value;
    setValue([e.target.value, val]);
    handlePrice(value);
  };

  const handleMax = (e) => {
    var val = document.getElementById("min").value;
    setValue([val, e.target.value]);
    handlePrice(value);
  };

  return (
    <Stack
      sx={{
        background: "#fff",
        boxShadow: "0 1px 8px 0 rgb(0 0 0 / 6%)",
        width: "100%",
      }}
    >
      <section
        style={{
          padding: "16px",
          borderBottom: "1px solid #f0f0f0",
          fontSize: "18px",
        }}
      >
        <span>FILTERS</span>
      </section>

      <div style={{ fontSize: "14px" }}>
        <section
          style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: "#212121",
              marginBottom: "5px",
            }}
          >
            <span>CATEGORIES</span>
          </div>
          <div
            style={{
              padding: "5px 0",
              color: "#212121",
              whiteSpace: "nowrap",
              fontSize: "14px",
            }}
          >
            <span></span>Watches
          </div>
          <div
            style={{
              padding: "5px 0",
              color: "#212121",
              whiteSpace: "nowrap",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <span>Wrist Watches</span>
          </div>
        </section>

        <section
          style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: ".3px",
              display: "inline-block",
            }}
          >
            <span>Price</span>
          </div>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1000}
            marks
            min={0}
            max={10000}
          />

          <div
            style={{
              color: "#a3a3a3",
              fontSize: "14px",
              margin: "5px -4px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "stretch",
            }}
          >
            <div style={{ display: "inline-block", flexGrow: 1 }}>
              <select
                id="min"
                style={{
                  width: "100%",
                  border: "1px solid #e0e0e0",
                  borderRadius: "1px",

                  appearance: "none",
                  background:
                    "#fff url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwbDUgNSA1LTUiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) no-repeat 90% 50%",
                  height: "24px",
                  fontSize: "14px",
                  color: "#212121",
                  lineHeight: 1,
                  padding: "0 5px",
                  outline: "none",
                }}
                onChange={handleMin}
              >
                <option value="Min">Min</option>

                <option
                  value="1000"
                  selected={value[0] === 1000 ? true : false}
                >
                  ₹1000
                </option>
                <option
                  value="2000"
                  selected={value[0] === 2000 ? true : false}
                >
                  ₹2000
                </option>
                <option
                  value="3000"
                  selected={value[0] === 3000 ? true : false}
                >
                  ₹3000
                </option>
                <option
                  value="4000"
                  selected={value[0] === 4000 ? true : false}
                >
                  ₹4000
                </option>
                <option
                  value="5000"
                  selected={value[0] === 5000 ? true : false}
                >
                  ₹5000
                </option>
              </select>
            </div>
            <div
              style={{
                display: "inline-block",
                margin: "0 9px",
                fontSize: "14px",
                color: "#878787",
                lineHeight: 1,
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: "0%",
                textAlign: "center",
              }}
            >
              to
            </div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "1.5px",
                flexGrow: 1,
              }}
            >
              <select
                id="max"
                style={{
                  width: "100%",
                  border: "1px solid #e0e0e0",
                  borderRadius: "1px",

                  appearance: "none",
                  background:
                    "#fff url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwbDUgNSA1LTUiIGZpbGw9IiMyMTIxMjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==) no-repeat 90% 50%",
                  height: "24px",
                  fontSize: "14px",
                  color: "#212121",
                  lineHeight: 1,
                  padding: "0 5px",
                  outline: "none",
                }}
                onChange={handleMax}
              >
                <option
                  value="1000"
                  selected={value[1] === 1000 ? true : false}
                >
                  ₹1000
                </option>
                <option
                  value="2000"
                  selected={value[1] === 2000 ? true : false}
                >
                  ₹2000
                </option>
                <option
                  value="3000"
                  selected={value[1] === 3000 ? true : false}
                >
                  ₹3000
                </option>
                <option
                  value="4000"
                  selected={value[1] === 4000 ? true : false}
                >
                  ₹4000
                </option>
                <option
                  value="5000"
                  selected={value[1] === 5000 ? true : false}
                >
                  ₹5000
                </option>
                <option value="Max" selected={value[1] > 5000 ? true : false}>
                  ₹5000+
                </option>
              </select>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: ".3px",
              display: "inline-block",
              paddingBottom: "8px",
            }}
          >
            <span>BRAND</span>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                />
              }
              label="Casio"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }} onClick={() => handleBrand("Casio")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                />
              }
              label="Fossil"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }} onClick={() => handleBrand("Fossil")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                />
              }
              label="Titan"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }} onClick={() => handleBrand("Titan")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                />
              }
              label="Fastrack"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }} onClick={() => handleBrand("Fastrack")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }} 
                />
              }
              label="Allen Solly"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}  onClick={() => handleBrand("Allen Solly")}
            />
          </FormGroup>
        </section>

        <section
          style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: ".3px",
              display: "inline-block",
              paddingBottom: "8px",
            }}
          >
            <span>IDEAL FOR</span>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                />
              }
              label="Boys & Girls"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                />
              }
              label="Men & Women"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleIdealfor("Women")}
                />
              }
              label="Women"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleIdealfor("Men")}
                />
              }
              label="Men"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleIdealfor("Boys")}
                />
              }
              label="Boys"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleIdealfor("Girls")}
                />
              }
              label="Girls"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
          </FormGroup>
        </section>

        <section
          style={{
            padding: "16px",
            borderBottom: "1px solid #f0f0f0",
            fontSize: "18px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: ".3px",
              display: "inline-block",
              paddingBottom: "8px",
            }}
          >
            <span>CUSTOMER RATINGS</span>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleRatings(4)}
                />
              }
              label="4 & above"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleRatings(3)}
                />
              }
              label="3 & above"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleRatings(2)}
                />
              }
              label="2 & above"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  sx={{
                    marginRight: "11px",
                    padding: 0,
                    "& .MuiSvgIcon-root": { fontSize: "18px" },
                  }}
                  onClick={() => handleRatings(1)}
                />
              }
              label="1 & above"
              sx={{
                margin: 0,
                padding: "3px 0",
                "& .MuiTypography-root": {
                  fontWeight: "normal",
                  fontSize: "14px",
                  letterSpacing: 0,
                },
              }}
            />
          </FormGroup>
        </section>
      </div>
    </Stack>
  );
}
