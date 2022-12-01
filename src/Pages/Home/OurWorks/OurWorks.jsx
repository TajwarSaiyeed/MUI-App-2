import React, { useState } from "react";
import { Box } from "@mui/system";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Grid, IconButton, Tab, Tabs } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";
import { cardData } from "./CardData";
const OurWorks = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <Box sx={{ mb: 10 }}>
      {/* heading section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
        }}
      >
        {/* our works section */}
        <SectionTitle
          title="Here are some of"
          colored="Our Works"
          sx={{
            textAlign: "left",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            juctifyContent: "space-between",
            gap: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile App" />
          </Tabs>
          <Box
            sx={{
              gap: 1,
              display: "flex",
            }}
          >
            <IconButton
              onClick={() => setValue(value - 1)}
              sx={{
                border: (theme) =>
                  `1px solid ${
                    value === 0 ? "#E5E5E5" : theme.palette.primary.main
                  }`,
                color: "primary.main",
              }}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
              sx={{
                color: "primary.main",
                border: (theme) =>
                  `1px solid ${
                    value === 2 ? "#E5E5E5" : theme.palette.primary.main
                  }`,
              }}
            >
              <ArrowBackIcon
                sx={{
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* card section */}
      <Box>
        <Grid container spacing={2} justifyContent="center">
          {cardData[value].map((image, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <CreativeCard image={image} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurWorks;
