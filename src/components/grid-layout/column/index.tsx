import React from "react";
import { ColumnProps } from "../type";
import { ColumnDiv } from "./styles/column-style";

const Column: React.FC<ColumnProps> = ({children,...restProps }) => {
  return (
    <ColumnDiv {...restProps}>
      {children}
    </ColumnDiv>
  );
};

export default Column;


