import {observer} from "mobx-react";
import {StyledButton, StyledCanvasBoard} from "../../styles/create-template.style";
import {NextPage} from "next";
import {StyledDiv, StyledSubTitle } from "../../styles/page.style";
import {useStores} from "../../stores";
import {event} from "../../utils/gtag";

// @ts-ignore
export const CanvasBoard: NextPage = observer(({ canvas }) => {
    const {themeColorStore} = useStores();
    const handleClick = async () => {
        var link = document.createElement('a');
        link.download = 'twitter-friend.png';
        link.href = document.getElementsByTagName('canvas')[0].toDataURL()
        link.click();
		
		event({
			action: "다운로드 버튼 클릭",
			category: "Event",
			label: "트친소 이미지 다운로드",
			value: "",
		})
    };
    return <>
        <StyledCanvasBoard>
            <StyledSubTitle>
                이미지
            </StyledSubTitle>
            <StyledDiv margin="15px 0">
                테마색변경: <input type="color" value={themeColorStore.main} onChange={(e)=>themeColorStore.updateThemeColorMain(e.target.value)}/>
            </StyledDiv>
            {canvas}
            <StyledButton onClick={handleClick}>이미지 다운로드(png)</StyledButton>
        </StyledCanvasBoard>
    </>
});

export default CanvasBoard;
