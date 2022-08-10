import styled from "@emotion/styled";
import {BREAKPOINTS, MediaQuery} from "./media-query";

export const StyledCreateTemplate = styled.div`
  display: block;
  ${MediaQuery[1]} { 
    display: flex;
  }
`;
export const StyledQuestions = styled.div`
  ${MediaQuery[1]} { 
    width: ${BREAKPOINTS[0]};
  }
`;
export const StyledCreateSvg = styled.div`
  ${MediaQuery[1]} { 
    width: 100%;
  }
`;

export const StyledSvg = styled.svg`
  user-select: none;
`;
export const StyledQuestion = styled.div`
  margin: 30px 0;
  font-size: 120%;
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 10px 20px;
`;

export const StyledInputText = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 2px 5px;

  &:focus {
    outline: none;
  }
`;
export const StyledSelect = styled.select`
  margin-left: 8px;
  padding: 2px 5px;
  font-weight: bold;
  ${(props) => `${(props.color && `color: ${props.color}`)}`};
  &:focus {
    outline: none;
  }
`;
export const StyledOption = styled.option`
  ${(props) => `${(props.color && `color: ${props.color}`)}`};
`;
export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 2px 5px;
  &:focus {
    outline: none;
  }
`;
export const StyledCheckbox = styled.div`
  display: inline-flex;
  input {
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    cursor: pointer;
    accent-color: rgb(29, 155, 240, 0.9);
    clip-path: circle(45% at 50% 50%);
    &:hover {
      transition:  opacity 0.2s;
    };
  }
  label {
    margin-top: 2px;
    margin-right: 15px;
    height: 30px;
  }
`;
export const StyledButton = styled.button`
  display: block;
  color: white;
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
  padding: 10px;
  font-size: 120%;
  margin: 30px 0;
  &:hover {
    cursor: pointer;
    background-color: rgb(29, 155, 240, 0.9);
    transition:  background-color 0.2s;
  }
`;
