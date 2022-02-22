import ArrowRight from "@mui/icons-material/ArrowRight";
import React from "react";
import FlexBox from "./FlexBox";
import { H2 } from "./Typography";

const CategorySectionHeader = ({ title, icon }) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb={3}>
      <FlexBox alignItems="center">
        {icon && (
          <FlexBox mr={1} alignItems="center">
            {icon}
          </FlexBox>
        )}
        <H2 fontWeight="bold" lineHeight="1">
          {title}
        </H2>
      </FlexBox>
      <ArrowRight fontSize="small" color="inherit" />
    </FlexBox>
  );
};

export default CategorySectionHeader;
