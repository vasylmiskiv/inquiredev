import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { fontSize } from "@mui/system";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "100px 0",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
