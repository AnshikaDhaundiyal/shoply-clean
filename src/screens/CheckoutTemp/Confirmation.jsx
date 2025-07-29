import React from "react";
import { Box, Typography } from "@mui/material";

const Confirmation = () => {
  return (
    <Box m="50px auto" textAlign="center">
      <Typography variant="h4" color="green" gutterBottom>
        Order Confirmed! ✅
      </Typography>
      <Typography variant="body1">
        Thank you for your purchase. Your order has been placed successfully.
      </Typography>
    </Box>
  );
};

export default Confirmation;
