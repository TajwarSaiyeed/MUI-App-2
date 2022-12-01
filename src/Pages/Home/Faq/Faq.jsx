import { Box } from "@mui/system";
import React from "react";
import CreativeAccordion from "../../../components/CreativeAccordion/CreativeAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box sx={{ my: 5 }}>
      <SectionTitle title="Frequently asked" colored="Questions" />
      <Box sx={{ my: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <CreativeAccordion
          title="How do I pay for the Essentials or Premium plan?"
          description="You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
        <CreativeAccordion
          title="How do I pay for the Essentials or Premium plan?"
          description="You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
        <CreativeAccordion
          title="How do I pay for the Essentials or Premium plan?"
          description="You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
      </Box>
    </Box>
  );
};

export default Faq;
