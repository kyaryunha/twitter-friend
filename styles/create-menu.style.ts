import styled from "@emotion/styled";
import {MediaQuery} from "./media-query";


export const StyledMenuList = styled.div`
  margin: 30px 0;
`;

export const StyledMenuItem = styled.a`
  display: block;
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
  padding: 15px;
  font-size: 120%;
  margin: 10px 0;
  ${MediaQuery[0]} {
    display: inline-block;
    margin: 10px 20px 10px 0;
  }
  &:hover {
    cursor: pointer;
    background-color: rgb(29, 155, 240, 0.9);
    transition:  background-color 0.2s;
  }
`;
