import {observer} from "mobx-react";
import {StyledButton, StyledCanvasBoard} from "../../styles/create-template.style";
import {NextPage} from "next";
import {StyledDiv, StyledSubTitle } from "../../styles/page.style";
import {useStores} from "../../stores";
import {event} from "../../utils/gtag";
import {FC} from "react";

type CanvasBoardProps = {
    canvas: any,
    menu: string,
}
export const CanvasBoard: FC<CanvasBoardProps> = observer(({ canvas, menu }:CanvasBoardProps) => {
    const {themeColorStore} = useStores();
    const handleClickDownload = async () => {
        console.log(menu);
        let link = document.createElement('a');
        link.download = 'twitter-friend.png';
        link.href = document.getElementsByTagName('canvas')[0].toDataURL()
        link.click();
        if (process.env.NODE_ENV === "production") {
            event({
                action: "다운로드 버튼 클릭",
                category: "Event",
                label: `${menu} 트친소 이미지 다운로드`,
                value: "",
            });
        }
    };
    const handleClickTwitter = async () => {
        const url_default_tw_txt = `https://twitter.com/intent/tweet?text=%23${menu}_트친소 `;
        const url_default_tw_url = "&url=";
        const url_this_page = encodeURIComponent(location.href);
        const title_this_page = encodeURIComponent(document.title);
        const url_combine_tw = url_default_tw_txt + title_this_page + url_default_tw_url + url_this_page;
        window.open(url_combine_tw, '', 'scrollbars=no, width=600, height=600');
        if (process.env.NODE_ENV === "production") {
            event({
                action: "공유 버튼 클릭",
                category: "Event",
                label: `${menu} 트친소 공유`,
                value: "",
            });
        }
    }
    return <>
        <StyledCanvasBoard>
            <StyledSubTitle>
                이미지
            </StyledSubTitle>
            <StyledDiv margin="15px 0">
                테마색변경: <input type="color" value={themeColorStore.main} onChange={(e)=>themeColorStore.updateThemeColorMain(e.target.value)}/>
            </StyledDiv>
            {canvas}
            <StyledButton onClick={handleClickDownload}>이미지 다운로드(png)</StyledButton>
            <StyledButton onClick={handleClickTwitter}>트위터에 공유하기</StyledButton>
        </StyledCanvasBoard>
    </>
});

export default CanvasBoard;
