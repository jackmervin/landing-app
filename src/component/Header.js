import React from "react";
import "./header.css";
import { Grid } from "@mui/material";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <>
      <Grid className="headContainer">
        <Grid className="headRight">
          <Grid sx={{ cursor: "pointer" }}>Have any questions?</Grid>
          <Icon
            icon="iconamoon:phone-fill"
            style={{ marginTop: "3.5px", marginLeft: "10px" }}
          />
          <Grid sx={{ cursor: "pointer" }}>+91-9176966446</Grid>
          <Icon
            icon="clarity:email-line"
            style={{ marginTop: "3.5px", marginLeft: "10px" }}
          />
          <Grid sx={{ cursor: "pointer" }}>info@test.com</Grid>
        </Grid>
        <Grid className="headleft">
          <Grid sx={{ cursor: "pointer" }}>&nbsp;Research |</Grid>
          <Grid sx={{ cursor: "pointer" }}>&nbsp;Insights |</Grid>
          <Grid sx={{ cursor: "pointer" }}>&nbsp;FAQ</Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
