import styled from "@emotion/styled";
import {MediaQuery} from "./media-query";


export const StyledMainDiv = styled.div`
  color: white;
  padding: 20px;
  margin: 20px 5px;
  ${MediaQuery[0]} {
    margin: 100px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 200%;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid white;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const StyledSubTitle = styled.div`
  font-size: 160%;
  margin: 25px 0;
`;

type StyledDivProps = {
  margin?: string | number,
}
export const StyledDiv = styled.div<StyledDivProps>`
  ${(props) => `${(props.margin && `margin: ${props.margin}`)}`};
`;

export const StyledFooter = styled.div`
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid white;
`;
