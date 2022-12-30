import React from "react";
import { PropagateLoader } from "react-spinners";
import * as S from "./styles";
export const Loading = () => {
  return (
    <S.Container>
      <PropagateLoader color="#333" />
    </S.Container>    
  );
};

export default Loading;
