import styled from "@emotion/styled";
import {MediaQuery} from "./media-query";


export const StyledMainDiv = styled.div`
  color: white;
  padding: 20px;
  margin: 20px 50px;
  ${MediaQuery[0]} {
    margin: 100px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 200%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
`;
