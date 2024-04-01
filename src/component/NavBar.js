import { Grid } from "@mui/material";
import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <Grid
      sx={{
        display: "flex",
        height: "74px",
        backgroundColor: "#ffff",
        marginTop: "15px",
        justifyContent: "space-around",
        position: "sticky",
        zIndex: "1",
        top: 0,
      }}
    >
      <Grid>
        <img
          src="https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png"
          alt=""
        />
      </Grid>
      <Grid sx={{ display: "flex", height: "35px", marginTop: "5px" }}>
        <Grid className="navhead">ABOUT US</Grid>
        <Grid className="navhead">SERVICES</Grid>
        <Grid className="navhead">INDUSTRIES</Grid>
        <Grid className="navhead">PRICING</Grid>
        <Grid className="navhead">HELP-GUIDE</Grid>
        <Grid className="navhead">CONTACT US</Grid>
        <Grid className="navhead">HIRE A RESEARCH ASSISTANT</Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;
