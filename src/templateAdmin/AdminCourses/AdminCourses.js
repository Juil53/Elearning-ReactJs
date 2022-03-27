import React from "react";
import { Box } from "@mui/material";

export default function AdminCourses() {
  return (
    <div>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${165}px)`, ml: `${165}px` }}
      >
        <h3>Quản lý khoá học</h3>
      </Box>
    </div>
  );
}
