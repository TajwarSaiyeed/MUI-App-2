import React from "react";
import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const CustormExpandIcon = () => {
  return (
    <div>
      <div className="expandMore">
        <Add />
      </div>
      <div className="expandLess">
        <Remove />
      </div>
    </div>
  );
};

const CreativeAccordion = ({ title, description }) => {
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        border: "1px solid #e0e0e0",
        p: 2,
        "& .MuiAccordionSummary-content": {
          color: "primary.main",
          "& p": {
            fontWeight: 600,
          },
        },
        "& .Mui-expanded": {
          color: "primary.green",
          "& .expandMore": {
            display: "none",
          },
          "& .expandLess": {
            display: "block",
            color: "primary.green",
          },
        },
      }}
    >
      <AccordionSummary
        sx={{
          "& .expandLess": {
            display: "none",
          },
        }}
        expandIcon={<CustormExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          color: "text.secondary",
        }}
      >
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreativeAccordion;
