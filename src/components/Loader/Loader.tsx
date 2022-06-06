import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
