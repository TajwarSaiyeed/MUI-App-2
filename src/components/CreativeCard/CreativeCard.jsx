import { Add } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CreativeCard = ({ image }) => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth: 345 }}>
      <CardMedia
        component="img"
        height="190"
        image={image}
        alt="green iguana"
        style={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          p: 0,
          pt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "&:last-child": {
            pb: 0,
          },
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body"
            component="div"
            color="text.secondary"
          >
            Web Design
          </Typography>
          <Typography
            variant="body2"
            color="primary.main"
            fontWeight="bold"
            fontSize={20}
          >
            Web Design Research
          </Typography>
        </Box>
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            height: "30px",
            width: "30px",
            "& svg": {
              color: "primary.main",
            },
          }}
        >
          <Add />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
