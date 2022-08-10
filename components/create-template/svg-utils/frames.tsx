import {IconGithub, IconTwitter, StyledSvgText, StyledSvgTspan} from "../../../styles/create-svg.style";
import {
    algorithmContentsTextArr,
    contentsTextArr,
    farewellsTextArr,
    followsTextArr
} from "../../../utils/questions.text";

type SvgBasicFrameProps = {
    color:string,
}
export const SvgBasicFrame = ({color}:SvgBasicFrameProps) => {
    return <>
        <rect x={0} y={0} width={1600} height={836} fill="white" />
        <rect x={30} y={30} width={1540} height={776} stroke={color} strokeWidth={2} fill="transparent"/>
        <StyledSvgText x={1050} y={25} fontSize={25}>
            트친소 짤 생성기 - twitter-friend.vercel.app
        </StyledSvgText>
        <line x1="800" y1="159" x2="800" y2="750" stroke={color} strokeWidth={2}  />
    </>
}

type SvgTwitterProps = {
    color:string,
    twitterId: string,
    twitterNickname: string,
}
export const SvgTwitter = ({color, twitterId, twitterNickname}:SvgTwitterProps) => {
    return <>
        <IconTwitter x={0} y={0} width={50} height={50} color={color}/>
        <StyledSvgText x={70} y={40} fontSize={50}>
            {twitterNickname ? twitterNickname : "닉네임"}
            (@{twitterId ? twitterId : "트위터ID"})
        </StyledSvgText>
    </>
}


type SvgGithubAndUrlsProps = {
    githubId: string,
    url1: string,
    url2: string,
}
export const SvgGithubAndUrls = ({githubId, url1, url2}: SvgGithubAndUrlsProps) => {
    return <>
        {
            githubId && <>
                <IconGithub x={0} y={0} width={30} height={30}/>
                <StyledSvgText x={40} y={25} fontSize={30}>
                    {githubId}
                </StyledSvgText>
            </>
        }
        <StyledSvgText x={0} y={25}>
            {
                url1 && <tspan x={0} dy={30}>
                    {url1}
                </tspan>
            }
            {
                url2 && <tspan x={0} dy={30}>
                    {url2}
                </tspan>
            }
        </StyledSvgText>
    </>
}

type SvgContentsProps = {
    contents: boolean[],
    color: string,
    colorNo: string,
    textArr: string[],
}
export const SvgContents = ({contents, color, colorNo, textArr}:SvgContentsProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;트윗 성향&nbsp;
        </StyledSvgText>
        <StyledSvgText y={50}>
            {
                textArr.map((text:string, idx:number) => {
                    if(contents[idx]) return <StyledSvgTspan key={`svg-content-${idx}`} fill={color} fontWeight="bold">
                        {text} &nbsp;
                    </StyledSvgTspan>
                    else return <StyledSvgTspan key={`svg-content-${idx}`} fill={colorNo}>
                        {text} &nbsp;
                    </StyledSvgTspan>
                })
            }
        </StyledSvgText>
    </>
}

type SvgFollowsProps = {
    follows: boolean[],
    color: string,
    colorNo: string,
}
export const SvgFollows = ({follows, color, colorNo}:SvgFollowsProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;팔로하는 경우&nbsp;
        </StyledSvgText>
        <StyledSvgText y={50}>
            {
                followsTextArr.map((text, idx) => {
                    if(follows[idx]) return <StyledSvgTspan key={`svg-content-${idx}`} fill={color} fontWeight="bold">
                        {text} &nbsp;
                    </StyledSvgTspan>
                    else return <StyledSvgTspan key={`svg-content-${idx}`} fill={colorNo}>
                        {text} &nbsp;
                    </StyledSvgTspan>
                })
            }
        </StyledSvgText>
    </>
}

type SvgFarewellsProps = {
    farewells: boolean[],
    color: string,
    colorNo: string,
}

export const SvgFarewells = ({farewells, color, colorNo}:SvgFarewellsProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;이별시&nbsp;
        </StyledSvgText>
        <StyledSvgText y={50}>
            {
                farewellsTextArr.map((text, idx) => {
                    if(farewells[idx]) return <StyledSvgTspan key={`svg-content-${idx}`} fill={color} fontWeight="bold">
                        {text} &nbsp;
                    </StyledSvgTspan>
                    else return <StyledSvgTspan key={`svg-content-${idx}`} fill={colorNo}>
                        {text} &nbsp;
                    </StyledSvgTspan>
                })
            }
        </StyledSvgText>
    </>
}


type SvgLikesProps = {
    likes: string,
}
export const SvgLikes = ({likes}:SvgLikesProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;좋아하는 것&nbsp;
        </StyledSvgText>
        {
            likes.split('\n').map((text:string, idx:number) => {
                return <StyledSvgText y={50+(idx*35)} key={`svg-likes-${idx}-${text}`}>
                    {text} &nbsp;
                </StyledSvgText>
            })
        }
    </>
}

type SvgDislikesProps = {
   dislikes: string,
}
export const SvgDislikes = ({dislikes}:SvgDislikesProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;싫어하는 것&nbsp;
        </StyledSvgText>
        {
            dislikes.split('\n').map((text:string, idx:number) => {
                return <StyledSvgText y={50+(idx*35)} key={`svg-dislikes-${idx}-${text}`}>
                    {text} &nbsp;
                </StyledSvgText>
            })
        }
    </>
}

type SvgIntroduceProps = {
    introduce: string,
}
export const SvgIntroduce = ({introduce}:SvgIntroduceProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;소개글&nbsp;
        </StyledSvgText>
        {
            introduce.split('\n').map((text:string, idx:number) => {
                return <StyledSvgText y={50+(idx*35)} key={`svg-information-${idx}-${text}`}>
                    {text} &nbsp;
                </StyledSvgText>
            })
        }
    </>
}
