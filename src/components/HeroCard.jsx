import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const HeroCard = () => {
  return (
    <Card sx={{ maxWidth: 345, p: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="green iguana"
        sx={{ borderRadius: 1 }}
      />
      <CardContent
        sx={{
          padding: 0,
          pt: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            Laptop
          </Typography>
          <Typography variant="body2" color="primary.main">
            Lizards are a widespread group of squamate reptiles.
          </Typography>
        </Box>
        <IconButton
          sx={{
            border: "1px solid #ddd",
          }}
        >
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
