import styled from "@emotion/styled";
import {BREAKPOINTS, MediaQuery} from "./media-query";
import exp from "constants";

export const StyledCreateTemplate = styled.div`
  display: block;
  ${MediaQuery[1]} { 
    display: flex;
  }
`;
export const StyledQuestions = styled.div`
  ${MediaQuery[1]} { 
    width: ${`${BREAKPOINTS[0]}px`};
    margin-right: 20px;
  }
  ${MediaQuery[2]} {
    width:  ${`${BREAKPOINTS[1]}px`};
  }
`;
export const StyledCanvasBoard = styled.div`
  ${MediaQuery[1]} {
    width: 100%;
  }
`;

export const StyledCanvas = styled.canvas`
  display: block;
  user-select: none;
  background: wheat;
  width: 100%;
  //width: 400px;
  //height: 209px;
`;
export const StyledQuestion = styled.div`
  margin: 30px 0;
  font-size: 120%;
`;

export const StyledStacksUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
  border-radius: 16px;
  border: 1px solid rgb(56, 68, 77);
  background-color: rgb(30, 39, 50);
  padding: 5px;
  user-select: none;
`;
export const StyledStacksli = styled.li`
  display: inline-flex;
  cursor:pointer;
  img, svg {
    background-color: white;
    color: black;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin: 3px 5px;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  display: block;
  margin: 10px 0 10px 20px;
`;

type StyledInputTextProps = {
  margin ?: string,
};
export const StyledInputText = styled.input<StyledInputTextProps>`
  display: block;
  width: 100%;
  ${(props) => `margin: ${(props.margin ? props.margin:`10px 0`)};`};
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
    cursor: pointer;
    accent-color: rgb(29, 155, 240, 0.9);
    clip-path: circle(45% at 50% 50%);
    &:hover {
      transition:  opacity 0.2s;
    };
  }
  label {
    margin-top: 2px;
    padding-left: 5px;
    margin-right: 10px;
    height: 30px;
  }
`;
type SelectedImgProps = {
  width?: string,
  height?: string,
  checked?: boolean,
};
export const StyledImg = styled.img<SelectedImgProps>`
  background-color: white;
  ${(props) => `width: ${props.width ? props.width:`30px`};`};
  ${(props) => `height: ${props.height ? props.height:`30px`};`};
  border-radius: 3px;
  margin: 5px;
  ${(props) => `${props.checked && "opacity: 0.15;"}`};
  cursor: pointer;
`;
export const StyledButton = styled.button`
  color: white;
  background-color: rgb(29, 155, 240);
  border: 0;
  border-radius: 10px;
  padding: 10px;
  font-size: 120%;
  margin: 30px 20px 30px 0;

  &:hover {
    cursor: pointer;
    background-color: rgb(29, 155, 240, 0.9);
    transition: background-color 0.2s;
  }
`;

export const StyledStacksImg = styled.div`
  margin: 10px 0 10px 20px;
`;

export const StyledRecommends = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.95);
  user-select: none;
`;

export const StyledRecommend = styled.div`
  display: flex;
  align-items: center;
  color: black;
  padding: 3px;
  border-bottom: 1px solid black;
  cursor: pointer;
`;
