import React from "react";
import { useStyles } from "../../styles/styles";

export default function DashBoard() {
  const classes = useStyles();
  return (
    <div className={classes.adminContent}>
      <div className={classes.adminDashboard}></div>
    </div>
  );
}
