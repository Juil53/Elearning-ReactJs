import React from "react";
import { Box } from "@mui/material";

export default function DashBoard() {
  return (
    <div>
      <Box
        component="main"
        sx={{ width: `calc(100% - ${165}px)`, ml: `${165}px` }}
      >
        <h3>Trang Dashboard</h3>
      </Box>
    </div>
  );
}
