import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styles from "./loadingspinner.module.css";
import { pink } from "@mui/material/colors";
export default function LoadingSpinner() {
  const color = pink[200];
  return (
    <Box className={styles.loader}>
      <CircularProgress
        style={{
          color: color,
        }}
      />
    </Box>
  );
}
