import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Stack } from "@mui/system";

// box wrapper for branding
const BrandingWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(122,178,89,0.15)",
  height: "70vh",
  padding: theme.spacing(4),
  margin: "4rem 0",
  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const Branding = () => {
  return (
    <BrandingWrapper>
      <Stack spacing={5}>
        <Typography
          sx={{ fontSize: "2.5rem", fontWeight: "bold", lineHeight: "1.2" }}
        >
          Let's Grow Your
          <br />
          Brand To The <br /> Next Level
        </Typography>
        <Typography
          sx={{
            textAligh: "justify",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Accusantium quod rem vero nihil animi! Reprehenderit <br /> voluptatum
          voluptas dignissimos sequi ratione?
        </Typography>
        <Button
          sx={{
            width: "50%",
          }}
        >
          Hire Us
        </Button>
      </Stack>
      <Box
        sx={{
          width: "50%",
          //   display: ["none", "none", "block"],
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
        }}
      >
        <img
          src="https://i.ibb.co/PNnGdbc/Frame.png"
          alt="branding"
          style={{ width: "100%" }}
        />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
