import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const Service = ({ image, titleText, titleDesc }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        p: "1rem",
        cursor: "pointer",
        mx: "auto",
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
        sx={{
          width: "auto",
          mx: "auto",
        }}
      />
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {titleText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {titleDesc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
