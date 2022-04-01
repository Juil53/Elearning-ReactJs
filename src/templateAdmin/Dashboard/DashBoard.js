import React from "react";
import { Box } from "@mui/material";
import { useStyles } from "../../styles/styles";

export default function DashBoard() {
  const classes = useStyles();
  return (
    <div className={classes.adminContent}>
      <h3>Trang Dashboard</h3>
    </div>
  );
}
