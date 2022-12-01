import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "../../../components/Service/Service";

const serviceImages = [
  {
    title: "Web & Mobile design",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product. New Product",
    image: "https://i.ibb.co/fk9Yx06/iphone-1.png",
  },
  {
    title: "Graphic design",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    image: "https://i.ibb.co/bR7q6xR/color-palette-1.png",
  },
  {
    title: "Web development",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    image: "https://i.ibb.co/kG2StKq/coding-1.png",
  },
];

const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide Awesome" colored="Services" />

      {/* user mui grid */}
      <Grid
        sx={{
          my: "4rem",
        }}
        container
        spacing={4}
      >
        {serviceImages.map((service, index) => {
          const { title, description, image } = service;
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Service
                sx={{ height: "300px" }}
                titleText={title}
                titleDesc={description}
                image={image}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
