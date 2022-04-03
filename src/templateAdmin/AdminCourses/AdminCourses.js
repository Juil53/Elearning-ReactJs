import React from "react";
import { useStyles } from "../../styles/styles";

export default function AdminCourses() {
  const classes = useStyles()
  return (
    <div className={classes.adminContent}>
        <h3>Quản lý khoá học</h3>
    </div>
  );
}
