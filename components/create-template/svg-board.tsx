import {observer} from "mobx-react";
import {StyledButton, StyledSvgBoard} from "../../styles/create-template.style";
import {NextPage} from "next";
import {StyledDiv, StyledSubTitle } from "../../styles/page.style";
import {useStores} from "../../stores";

// @ts-ignore
export const SvgBoard: NextPage = observer(({ svg }) => {
    const {themeColorStore} = useStores();
    const handleClick = async () => {
        const svgData = document.getElementById("target-svg");
        // TODO
    };
    return <>
        <StyledSvgBoard>
            <StyledSubTitle>
                이미지
            </StyledSubTitle>
            <StyledDiv margin="15px 0">
                테마색변경: <input type="color" value={themeColorStore.main} onChange={(e)=>themeColorStore.updateThemeColorMain(e.target.value)}/>
            </StyledDiv>
            {svg}
            <StyledButton onClick={handleClick}>이미지 다운로드(png)</StyledButton>
        </StyledSvgBoard>
    </>
});

export default SvgBoard;
