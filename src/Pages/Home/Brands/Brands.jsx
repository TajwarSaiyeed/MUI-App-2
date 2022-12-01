import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const brands = [
  "https://i.ibb.co/Tg4JqZ7/image-5.png",
  "https://i.ibb.co/k8yD6bM/image-6.png",
  "https://i.ibb.co/z87wk33/image-7.png",
  "https://i.ibb.co/MnNkbHW/image-8.png",
  "https://i.ibb.co/vw9B9hh/image-9.png",
];

const BrandsWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "4rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& img": {
    height: "60px",
  },
  //   "@media (max-width: 768px)": {
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    "& img": {
      marginBottom: "1rem",
    },
  },
}));

const Brands = () => {
  return (
    <BrandsWrapper>
      {brands.map((brand, index) => (
        <img src={brand} alt="brand" key={index} />
      ))}
    </BrandsWrapper>
  );
};

export default Brands;
