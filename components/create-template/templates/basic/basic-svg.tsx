import {NextPage} from "next";
import {useStores} from "../../../../stores";
import {observer} from "mobx-react";
import {StyledSvg} from "../../../../styles/create-template.style";
import {BackgroundFilter, MasterFilter, OkFilter} from "../../svg-utils/filters";
import {
    SvgBasicFrame,
    SvgContents, SvgDislikes,
    SvgFarewells,
    SvgFollows,
    SvgGithubAndUrls, SvgIntroduce, SvgLikes,
    SvgTwitter
} from "../../svg-utils/frames";
import {contentsTextArr} from "../../../../utils/questions.text";

const BasicSvg: NextPage = observer(() => {
    const {basicQuestionsStore:questionStore, themeColorStore} = useStores();
    return (
        <StyledSvg viewBox="0 0 1600 836" width="100%" id="target-svg">
            <BackgroundFilter color={themeColorStore.main} />
            <OkFilter />
            <MasterFilter />
            <g>
                <SvgBasicFrame color={themeColorStore.main}/>
            </g>
            <g transform="translate(70,70)">
                <SvgTwitter color={themeColorStore.main} twitterId={questionStore.twitterId} twitterNickname={questionStore.twitterNickname}/>
            </g>
            <g transform="translate(1050,50)">
                <SvgGithubAndUrls githubId={questionStore.githubId} url1={questionStore.url1} url2={questionStore.url2} />
            </g>
            <g transform="translate(70,190)">
                <SvgContents color={themeColorStore.main} colorNo={themeColorStore.no} contents={[...questionStore.contents]} textArr={contentsTextArr}/>
            </g>
            <g transform="translate(70,360)">
                <SvgFollows color={themeColorStore.main} colorNo={themeColorStore.no} follows={[...questionStore.follows]}/>
            </g>
            <g transform="translate(70,530)">
                <SvgFarewells color={themeColorStore.main} colorNo={themeColorStore.no} farewells={[...questionStore.farewells]}/>
            </g>
            <g transform="translate(850,190)">
                <SvgLikes likes={questionStore.likes} />
            </g>
            <g transform="translate(850,360)">
                <SvgDislikes dislikes={questionStore.dislikes} />
            </g>
            <g transform="translate(850,530)">
                <SvgIntroduce introduce={questionStore.introduce} />
            </g>
        </StyledSvg>
    )
});

export default BasicSvg;