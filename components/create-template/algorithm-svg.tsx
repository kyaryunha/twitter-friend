import {NextPage} from "next";
import {useStores} from "../../stores";
import {observer} from "mobx-react";
import {StyledCreateSvg, StyledSvg} from "../../styles/create-template.style";
import {IconGithub, IconTwitter, StyledSpan, StyledSvgText, StyledSvgTspan} from "../../styles/create-svg.style";
import {contentsTextArr, farewellsTextArr, followsTextArr} from "../../utils/questions.text";
import {AtcoderTiers, CodeforcesTiers, SolvedAcTiers} from "../../utils/online-judge.constant";

const AlgorithmSvg: NextPage = observer(() => {
    const {algorithmQuestionsStore} = useStores();
    const themeColor = {
        main: "rgb(29, 155, 240)",
        no: "#777",
    };
    return (
        <StyledCreateSvg>
            이미지 <br /> <br />
            <StyledSvg viewBox="0 0 1600 836" width="100%">
                <defs>
                    <filter id="background-filter" x="0" y="0" width="1" height="1" >
                        <feFlood floodColor={themeColor.main} />
                        <feComposite in="SourceGraphic" operator="xor"/>
                    </filter>
                </defs>
                <defs>
                    <filter id="ok-filter" x="0" y="0" width="1" height="1" >
                        <feFlood floodColor={"red"} />
                        <feComposite in="SourceGraphic" operator="xor"/>
                    </filter>
                </defs>
                <defs>
                    <linearGradient id="master-filter" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" style={{stopColor:"rgb(124, 249, 255)", stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:"rgb(180, 145, 255)", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"rgb(255, 124, 168)",stopOpacity:1}} />
                    </linearGradient>
                </defs>
                <g>
                    <rect x={0} y={0} width={1600} height={836} fill="white" />
                    <rect x={30} y={30} width={1540} height={776} stroke={themeColor.main} strokeWidth={2} fill="transparent"/>
                    <StyledSvgText x={1050} y={25} fontSize={25}>
                        트친소 짤 생성기 - twitter-friend.vercel.app
                    </StyledSvgText>
                    <line x1="800" y1="159" x2="800" y2="750" stroke={themeColor.main} strokeWidth={2}  />
                </g>
                <g transform="translate(70,60)">
                    <IconTwitter x={0} y={0} width={50} height={50}/>
                    <StyledSvgText x={70} y={40} fontSize={50}>
                        {algorithmQuestionsStore.twitterNickname ? algorithmQuestionsStore.twitterNickname : "닉네임"}
                        (@{algorithmQuestionsStore.twitterId ? algorithmQuestionsStore.twitterId : "트위터ID"})
                    </StyledSvgText>
                </g>
                <g transform="translate(1050,50)">
                    {
                        algorithmQuestionsStore.githubId && <>
                            <IconGithub x={0} y={0} width={30} height={30}/>
                            <StyledSvgText x={40} y={25} fontSize={30}>
                                {algorithmQuestionsStore.githubId}
                            </StyledSvgText>
                        </>
                    }
                    <StyledSvgText x={0} y={25}>
                        {
                            algorithmQuestionsStore.url1 && <tspan x={0} dy={30}>
                                {algorithmQuestionsStore.url1}
                            </tspan>
                        }
                        {
                            algorithmQuestionsStore.url2 && <tspan x={0} dy={30}>
                                {algorithmQuestionsStore.url2}
                            </tspan>
                        }
                    </StyledSvgText>
                </g>
                <g transform="translate(70,190)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;온라인 저지&nbsp;
                    </StyledSvgText>
                </g>
                <g transform="translate(70,220)">
                    {algorithmQuestionsStore.bojId && <image x={0} y={0} href="oj/boj.png" height="40" width="40"/>}
                    {algorithmQuestionsStore.codeforcesId && <image x={0} y={(algorithmQuestionsStore.bojId?40:0)} href="oj/codeforces.png" height="38" width="38"/>}
                    {algorithmQuestionsStore.atcoderId && <image x={0} y={(algorithmQuestionsStore.bojId?40:0)+(algorithmQuestionsStore.codeforcesId?40:0)} href="oj/atcoder.png" height="40" width="40"/>}
                    <StyledSvgText x={0} y={-10}>
                        {
                            algorithmQuestionsStore.bojId && <StyledSvgTspan x={50} dy={40} fill={algorithmQuestionsStore.solvedacTier==1?"url(#master-filter)":SolvedAcTiers[algorithmQuestionsStore.solvedacTier][1]}>
                                <StyledSvgTspan fontWeight="bold">
                                    {algorithmQuestionsStore.bojId}
                                </StyledSvgTspan>
                                {
                                    algorithmQuestionsStore.solvedacTier !== 0 && ` (${SolvedAcTiers[algorithmQuestionsStore.solvedacTier][0]})`
                                }
                            </StyledSvgTspan>
                        }
                        {
                            algorithmQuestionsStore.codeforcesId && <StyledSvgTspan x={50} dy={40} fill={CodeforcesTiers[algorithmQuestionsStore.codeforcesTier][1]}>
                                {
                                    algorithmQuestionsStore.codeforcesTier === 1 ? <>
                                        <StyledSvgTspan fill="black" fontWeight="bold">
                                            {algorithmQuestionsStore.codeforcesId[0]}
                                        </StyledSvgTspan>
                                        <StyledSvgTspan fontWeight="bold">
                                            {algorithmQuestionsStore.codeforcesId.slice(1)}
                                        </StyledSvgTspan>
                                    </>
                                    :<StyledSvgTspan fontWeight="bold">
                                            {algorithmQuestionsStore.codeforcesId}
                                    </StyledSvgTspan>
                                }
                                {
                                    algorithmQuestionsStore.codeforcesTier !== 0 && <>&nbsp;(
                                            {
                                                algorithmQuestionsStore.codeforcesTier === 1 ? <>
                                                    <StyledSvgTspan fill="black">
                                                        {CodeforcesTiers[algorithmQuestionsStore.codeforcesTier][0][0]}
                                                    </StyledSvgTspan>
                                                    <StyledSvgTspan>
                                                        {CodeforcesTiers[algorithmQuestionsStore.codeforcesTier][0].slice(1)}
                                                    </StyledSvgTspan>
                                                </>
                                                : CodeforcesTiers[algorithmQuestionsStore.codeforcesTier][0]
                                            }
                                            )
                                        </>
                                }
                            </StyledSvgTspan>
                        }
                        {
                            algorithmQuestionsStore.atcoderId && <StyledSvgTspan x={50} dy={40} fill={AtcoderTiers[algorithmQuestionsStore.atcoderTier][1]}>
                                <StyledSvgTspan fontWeight="bold">
                                    {algorithmQuestionsStore.atcoderId}
                                </StyledSvgTspan>
                                {
                                    algorithmQuestionsStore.atcoderTier !== 0 && ` (${AtcoderTiers[algorithmQuestionsStore.atcoderTier][0]})`
                                }
                            </StyledSvgTspan>
                        }
                    </StyledSvgText>
                </g>
                <g transform="translate(70,390)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;트윗 성향&nbsp;
                    </StyledSvgText>
                    <StyledSvgText y={50}>
                        {
                            contentsTextArr.map((text, idx) => {
                                if(algorithmQuestionsStore.contents[idx]) return <StyledSvgTspan key={`svg-content-${idx}`} fill={themeColor.main} fontWeight="bold">
                                            {text} &nbsp;
                                        </StyledSvgTspan>
                                else return <StyledSvgTspan key={`svg-content-${idx}`} fill={themeColor.no}>
                                    {text} &nbsp;
                                </StyledSvgTspan>
                            })
                        }
                    </StyledSvgText>
                </g>
                <g transform="translate(70,530)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;팔로하는 경우&nbsp;
                    </StyledSvgText>
                    <StyledSvgText y={50}>
                        {
                            followsTextArr.map((text, idx) => {
                                if(algorithmQuestionsStore.follows[idx]) return <StyledSvgTspan key={`svg-content-${idx}`} fill={themeColor.main} fontWeight="bold">
                                    {text} &nbsp;
                                </StyledSvgTspan>
                                else return <StyledSvgTspan key={`svg-content-${idx}`} fill={themeColor.no}>
                                    {text} &nbsp;
                                </StyledSvgTspan>
                            })
                        }
                    </StyledSvgText>
                </g>
                <g transform="translate(70,670)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;이별시&nbsp;
                    </StyledSvgText>
                    <StyledSvgText y={50}>
                        {
                            farewellsTextArr.map((text, idx) => {
                                if(algorithmQuestionsStore.farewells[idx]) return <StyledSvgTspan key={`svg-content-${idx}`} fill={themeColor.main} fontWeight="bold">
                                    {text} &nbsp;
                                </StyledSvgTspan>
                                else return <StyledSvgTspan key={`svg-content-${idx}`} fill={themeColor.no}>
                                    {text} &nbsp;
                                </StyledSvgTspan>
                            })
                        }
                    </StyledSvgText>
                </g>
                <g transform="translate(850,190)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;좋아하는 것&nbsp;
                    </StyledSvgText>
                    {
                        algorithmQuestionsStore.likes.map((text, idx) => {
                            return <StyledSvgText y={50+(idx*35)} key={`svg-content-${text}`}>
                                {text} &nbsp;
                            </StyledSvgText>
                        })
                    }
                </g>
                <g transform="translate(850,360)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;싫어하는 것&nbsp;
                    </StyledSvgText>
                    {
                        algorithmQuestionsStore.dislikes.map((text, idx) => {
                            return <StyledSvgText y={50+(idx*35)} key={`svg-content-${text}`}>
                                {text} &nbsp;
                            </StyledSvgText>
                        })
                    }
                </g>
                <g transform="translate(850,530)">
                    <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
                        &nbsp;소개글&nbsp;
                    </StyledSvgText>
                    {
                        algorithmQuestionsStore.introduce.map((text, idx) => {
                            return <StyledSvgText y={50+(idx*35)} key={`svg-content-${text}`}>
                                {text} &nbsp;
                            </StyledSvgText>
                        })
                    }
                </g>
            </StyledSvg>
        </StyledCreateSvg>
    )
});

export default AlgorithmSvg;
