import {StyledSvgText, StyledSvgTspan} from "../../../styles/create-svg.style";
import {AtcoderTiers, CodeforcesTiers, SolvedAcTiers} from "../../../utils/online-judge.constant";

type SvgAlgorithmOJProps = {
    bojId: string,
    solvedacTier: number,
    codeforcesId: string,
    codeforcesTier: number,
    atcoderId: string,
    atcoderTier: number,
};

export const SvgAlgorithmOJ = ({bojId, solvedacTier, codeforcesId, codeforcesTier, atcoderId, atcoderTier}:SvgAlgorithmOJProps) => {
    return <>
        <StyledSvgText x={0} y={0} fontSize={30} fontWeight="bold" filter="url(#background-filter)">
            &nbsp;온라인 저지&nbsp;
        </StyledSvgText>
        {bojId && <image x={0} y={20} href="oj/boj.png" height="40" width="40"/>}
        {codeforcesId && <image x={0} y={20+(bojId?40:0)} href="oj/codeforces.png" height="38" width="38"/>}
        {atcoderId && <image x={0} y={20+(bojId?40:0)+(codeforcesId?40:0)} href="oj/atcoder.png" height="40" width="40"/>}
        <StyledSvgText x={0} y={10}>
            {
                bojId && <StyledSvgTspan x={50} dy={40} fill={solvedacTier==1?"url(#master-filter)":SolvedAcTiers[solvedacTier][1]}>
                    <StyledSvgTspan fontWeight="bold">
                        {bojId}
                    </StyledSvgTspan>
                    {
                        solvedacTier !== 0 && ` (${SolvedAcTiers[solvedacTier][0]})`
                    }
                </StyledSvgTspan>
            }
            {
                codeforcesId && <StyledSvgTspan x={50} dy={40} fill={CodeforcesTiers[codeforcesTier][1]}>
                    {
                        codeforcesTier === 1 ? <>
                                <StyledSvgTspan fill="black" fontWeight="bold">
                                    {codeforcesId[0]}
                                </StyledSvgTspan>
                                <StyledSvgTspan fontWeight="bold">
                                    {codeforcesId.slice(1)}
                                </StyledSvgTspan>
                            </>
                            :<StyledSvgTspan fontWeight="bold">
                                {codeforcesId}
                            </StyledSvgTspan>
                    }
                    {
                        codeforcesTier !== 0 && <>&nbsp;(
                            {
                                codeforcesTier === 1 ? <>
                                        <StyledSvgTspan fill="black">
                                            {CodeforcesTiers[codeforcesTier][0][0]}
                                        </StyledSvgTspan>
                                        <StyledSvgTspan>
                                            {CodeforcesTiers[codeforcesTier][0].slice(1)}
                                        </StyledSvgTspan>
                                    </>
                                    : CodeforcesTiers[codeforcesTier][0]
                            }
                            )
                        </>
                    }
                </StyledSvgTspan>
            }
            {
                atcoderId && <StyledSvgTspan x={50} dy={40} fill={AtcoderTiers[atcoderTier][1]}>
                    <StyledSvgTspan fontWeight="bold">
                        {atcoderId}
                    </StyledSvgTspan>
                    {
                        atcoderTier !== 0 && ` (${AtcoderTiers[atcoderTier][0]})`
                    }
                </StyledSvgTspan>
            }
        </StyledSvgText>
    </>
}
