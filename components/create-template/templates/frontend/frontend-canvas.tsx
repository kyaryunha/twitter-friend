import {NextPage} from "next";
import {useStores} from "../../../../stores";
import {observer} from "mobx-react";
import {StyledCanvas} from "../../../../styles/create-template.style";
import {
    drawBasicFrame,
    drawContents,
    drawDislikes,
    drawFarewells,
    drawFollows,
    drawGithubAndUrls,
    drawIntroduce,
    drawLikes,
    drawTwitter,
} from "../../canvas-utils/layers";
import {useEffect, useRef} from "react";
import {developmentsContentsTextArr} from "../../../../utils/questions.text";
import {drawStacks} from "../../canvas-utils/development-layer";
import {MenuText} from "../../../../utils";

const FrontendCanvas: NextPage = observer(() => {
    const {frontendQuestionStore:questionStore, themeColorStore} = useStores();
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef&&canvasRef.current;
        if (canvas) {
            // @ts-ignore
            const ctx = canvas.getContext("2d");
            drawBasicFrame({
                ctx,
                color: themeColorStore.main,
            });
            drawTwitter({
                ctx,
                x: 70,
                y: 60,
                color: themeColorStore.main,
                twitterId: questionStore.twitterId,
                twitterNickname: questionStore.twitterNickname
            });
            drawGithubAndUrls({
                ctx,
                x: 1050,
                y: 75,
                githubId: questionStore.githubId,
                url1: questionStore.url1,
                url2: questionStore.url2,
            });
            drawStacks({
                ctx,
                x: 90,
                y: 190,
                color: themeColorStore.main,
                title: "기술 스택",
                menu: MenuText.frontend,
                selectedStacks: questionStore.selectedFrontendStacks,
            })
            drawContents({
                ctx,
                x: 90,
                y: 430,
                color: themeColorStore.main,
                colorNo: themeColorStore.no,
                contents: questionStore.contents,
                textArr: developmentsContentsTextArr,
            });
            drawFollows({
                ctx,
                x: 90,
                y: 550,
                color: themeColorStore.main,
                colorNo: themeColorStore.no,
                follows: questionStore.follows,
            });
            drawFarewells({
                ctx,
                x: 90,
                y: 670,
                color: themeColorStore.main,
                colorNo: themeColorStore.no,
                farewells: questionStore.farewells,
            });
            drawLikes({
                ctx,
                x: 850,
                y: 190,
                color: themeColorStore.main,
                likes: questionStore.likes,
            });
            drawDislikes({
                ctx,
                x: 850,
                y: 360,
                color: themeColorStore.main,
                dislikes: questionStore.dislikes,
            });
            drawIntroduce({
                ctx,
                x: 850,
                y: 530,
                color: themeColorStore.main,
                introduce: questionStore.introduce,
            });
        }
    }, [
        questionStore.twitterNickname,
        questionStore.twitterId,
        questionStore.githubId,
        questionStore.selectedFrontendStacks,
        questionStore.url1,
        questionStore.url2,
        [...questionStore.contents],
        questionStore.likes,
        questionStore.dislikes,
        questionStore.introduce,
        [...questionStore.follows],
        [...questionStore.farewells],
        themeColorStore.main
    ]);

    // @ts-ignore
    return (
        <StyledCanvas width="1600" height="836" onContextMenu={(e) => {e.preventDefault();}} ref={canvasRef}/>
    )
});

export default FrontendCanvas;
