import React from "react";
import "./poster.css";
import { Button, Grid } from "@mui/material";

function PosterOne() {
  return (
    <>
      <Grid className="posterOne">
        <Grid sx={{ position: "relative", top: "0px" }}>
          <img
            src="https://www.phdassistance.com/wp-content/uploads/2022/12/PA-banner-1.webp"
            alt=""
          />
          <Grid
            sx={{
              position: "absolute",
              top: "300px",
              left: "50px",
              display: "flex",
              flexDirection: "column",
              rowGap: "30px",
              textAlign: "start",
            }}
          >
            <Grid
              sx={{
                color: "#fff",
                fontSize: "36px",
                lineHeight: "40px",
                fontWeight: "900",
                letterSpacing: "0px",
              }}
            >
              Successfully Mentored
            </Grid>
            <Grid
              sx={{
                color: "#fff",
                fontSize: "30px",
                lineHeight: "32px",
                fontWeight: "400",
                letterSpacing: "0px",
              }}
            >
              Research Scholars & Authors across the Globe
            </Grid>
            <Grid>
              {" "}
              <Button
                size="small"
                variant="contained"
                sx={{ backgroundColor: "#c12b30", fontWeight: "500" }}
                className="button"
              >
                {" "}
                About Us
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PosterOne;
