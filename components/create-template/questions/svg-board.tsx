import {observer} from "mobx-react";
import { StyledSvgBoard } from "../../../styles/create-template.style";
import {NextPage} from "next";
import {StyledDiv, StyledSubTitle } from "../../../styles/page.style";
import {useStores} from "../../../stores";

// @ts-ignore
export const SvgBoard: NextPage = observer(({ svg }) => {
    const {themeColorStore} = useStores();
    return <>
        <StyledSvgBoard>
            <StyledSubTitle>
                이미지
            </StyledSubTitle>
            <StyledDiv margin="15px 0">
                테마색변경: <input type="color" value={themeColorStore.main} onChange={(e)=>themeColorStore.updateThemeColorMain(e.target.value)}/>
            </StyledDiv>
            {svg}
        </StyledSvgBoard>
    </>
});

export default SvgBoard;
