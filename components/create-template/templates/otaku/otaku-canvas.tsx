import {NextPage} from "next";
import {useStores} from "../../../../stores";
import {observer} from "mobx-react";
import {StyledCanvas} from "../../../../styles/create-template.style";
import {
    drawBasicFrame,
    drawContents,
    drawFarewells,
    drawFollows,
    drawIntroduce,
    drawProfileImage,
    drawTwitter,
} from "../../canvas-utils/layers";
import {useEffect, useRef} from "react";
import {otakuContentsTextArr} from "../../../../utils/questions.text";
import {drawCharacterImages, drawCouplings, drawGenreLogo, drawGenreName} from "../../canvas-utils/otaku-layer";

const OtakuCanvas: NextPage = observer(() => {
    const {otakuQuestionStore:questionStore, themeColorStore} = useStores();
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
            drawGenreName({
                ctx,
                x: questionStore.profileImage == null? 70: 300,
                y: 80,
                color: themeColorStore.main,
                genreName: questionStore.genreName,
            });
            drawGenreLogo({
                ctx,
                x: 1550,
                y: 40,
                genreLogo: questionStore.genreLogo,
            });
            drawTwitter({
                ctx,
                x: questionStore.profileImage == null? 70: 280,
                y: 100,
                color: themeColorStore.main,
                twitterId: questionStore.twitterId,
                twitterNickname: questionStore.twitterNickname
            });
            drawProfileImage({
                ctx,
                x: 70,
                y: 60,
                profileImage: questionStore.profileImage
            });
            drawCouplings({
                ctx,
                x: 90,
                y: 310,
                color: themeColorStore.main,
                colorNo: themeColorStore.no,
                couplings: questionStore.couplings,
            })
            drawContents({
                ctx,
                x: 90,
                y: 430,
                color: themeColorStore.main,
                colorNo: themeColorStore.no,
                contents: questionStore.contents,
                textArr: otakuContentsTextArr,
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
            drawCharacterImages({
                ctx,
                x: 850,
                y: 160,
                color: themeColorStore.main,
                characterImages: questionStore.characterImages
            })
            drawIntroduce({
                ctx,
                x: 850,
                y: 530,
                color: themeColorStore.main,
                introduce: questionStore.introduce,
            });
        }
    }, [
        questionStore.genreName,
        questionStore.genreLogo,
        questionStore.twitterNickname,
        questionStore.twitterId,
        questionStore.profileImage,
        [...questionStore.characterImages],
        [...questionStore.couplings],
        [...questionStore.contents],
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

export default OtakuCanvas;
