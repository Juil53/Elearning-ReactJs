import React from "react";
import BreadcrumbContent from "./_components/BreadcrumbContent";
import WaveSvg from "./_components/WaveSvg";
import { Box } from "@mui/material";

export default function Breadcrumb() {
  const styles = {
    root: {
      position: "relative",
    },
  };

  return (
    <Box sx={styles.root}>
      <BreadcrumbContent />
      <WaveSvg />
    </Box>
  );
}
