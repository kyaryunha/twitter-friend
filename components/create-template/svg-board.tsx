import {observer} from "mobx-react";
import {StyledButton, StyledSvgBoard} from "../../styles/create-template.style";
import {NextPage} from "next";
import {StyledDiv, StyledSubTitle } from "../../styles/page.style";
import {useStores} from "../../stores";
import AlgorithmSvg from "./templates/algorithm/algorithm-svg";
import {Canvg} from "canvg";
import html2canvas from "html2canvas";
import {useRef} from "react";
import domtoimage from 'dom-to-image';

// @ts-ignore
export const SvgBoard: NextPage = observer(({ svg, menu }) => {
    const {themeColorStore} = useStores();
    const handleClick = async () => {
        window.scrollTo(0, 0);
        const title = document.getElementById("title");
        const svgImage = document.getElementById("target-svg");
        console.log(svgImage);
        await html2canvas(title)
            .then((canvas) => {
                console.log("!!");
                // It will return a canvas element
                let img = canvas.toDataURL("image/png", 0.5);
            })
            .catch((e) => {
                console.log("??");
                console.log(e);
            });
    };
    return <>
        <StyledSvgBoard>
            <StyledSubTitle>
                이미지
            </StyledSubTitle>
            <StyledDiv margin="15px 0"   id="title">
                테마색변경: <input type="color" value={themeColorStore.main} onChange={(e)=>themeColorStore.updateThemeColorMain(e.target.value)}/>
            </StyledDiv>
            <AlgorithmSvg />
            {/*<SelectedSvg ref={svgRef} menu={menu} />*/}
            <StyledButton onClick={handleClick}>이미지 다운로드(png)</StyledButton>
        </StyledSvgBoard>
    </>
});

export default SvgBoard;
