import styled from "@emotion/styled";
import { Github } from '@emotion-icons/fa-brands/Github';
import { Twitter } from '@emotion-icons/fa-brands';

type StyledSvgTextProps = {
    fontSize?: number,
    fontWeight?: string,
}
export const StyledSvgText = styled.text<StyledSvgTextProps>`
  font-size: ${(props) => `${(props.fontSize ? props.fontSize : 28)}px`};
  ${(props) => `${(props.fontStyle && `font-style: ${props.fontStyle}`)}`};
  ${(props) => `${(props.fontWeight && `font-weight: ${props.fontWeight}`)}`};
`;

type StyledSvgTspanProps = {
    fill?: string,
    fontWeight?: string,
}
export const StyledSvgTspan = styled.tspan<StyledSvgTspanProps>`
  ${(props) => `${(props.fill && `fill: ${props.fill}`)}`};
  ${(props) => `${(props.fontWeight && `font-weight: ${props.fontWeight}`)}`};
`;

export const IconGithub = styled(Github)`
  width: 10px;
  height: 10px;
  color: black;
`;
export const IconTwitter = styled(Twitter)`
  color: rgb(29, 155, 240);
`;
