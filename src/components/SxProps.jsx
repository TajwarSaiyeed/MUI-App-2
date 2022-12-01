import React from "react";
import { Button } from "@mui/material";

const SxProps = () => {
  const isActive = false;

  return (
    <>
      <Button
        variant="contained"
        sx={[
          {
            border: "1px solid #000",
            bgcolor: "#000",
            p: 2,
            mr: 2,
            // width: {
            //   xs: 100,
            //   sm: 200,
            //   md: 300,
            //   lg: 400,
            //   xl: 500,
            // },
            "&.MuiButton-root": {
              p: 1,
            },
            width: [100, 200, 300, 400, 500],
          },
          //   isactive
          isActive && {
            border: "1px solid #fff",
            bgcolor: "#fff",
            color: "#000",
          },
        ]}
      >
        Submit
      </Button>
      <Button variant="contained">Cancel</Button>
    </>
  );
};

export default SxProps;
