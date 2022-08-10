import {
    StyledButton,
    StyledCheckbox,
    StyledInputText,
    StyledLabel, StyledOption,
    StyledQuestion,
    StyledQuestions,
    StyledSelect,
    StyledTextarea
} from "../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../stores";
import {FC, useState} from "react";
import {contentsTextArr, farewellsTextArr, followsTextArr} from "../../utils/questions.text";
import {MenuText} from "../../utils";
import {AtcoderTiers, CodeforcesTiers, SolvedAcTiers} from "../../utils/online-judge.constant";

type QuestionsProps = {
    menu: string,
}
const AlgorithmQuestions: FC<QuestionsProps> = observer(({menu}) => {
    const {algorithmQuestionsStore}=useStores();
    const [twitterNickname, setTwitterNickname] = useState("");
    const [twitterId, setTwitterId] = useState("");
    const [bojId, setBojId] = useState("");
    const [solvedacTier, setSolvedacTier] = useState(0);
    const [codeforcesId, setCodeforcesId] = useState("");
    const [codeforcesTier, setCodeforcesTier] = useState(0);
    const [atcoderId, setAtcoderId] = useState("");
    const [atcoderTier, setAtcoderTier] = useState(0);
    const [githubId, setGithubId] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [contents, setContents] = useState(Array(contentsTextArr.length).fill(false));
    const [likes, setLikes] = useState("");
    const [dislikes, setDislikes] = useState("");
    const [introduce, setIntroduce] = useState("");
    const [follows, setFollows] = useState(Array(followsTextArr.length).fill(false));
    const [farewells, setFarewells] = useState(Array(farewellsTextArr.length).fill(false));
    const handleClick = () => {
        let likesArr = likes.split('\n');
        let dislikesArr = dislikes.split('\n');
        let introduceArr = introduce.split('\n');
        algorithmQuestionsStore.update({
            twitterNickname,
            twitterId,
            bojId,
            solvedacTier,
            codeforcesId,
            codeforcesTier,
            atcoderId,
            atcoderTier,
            githubId,
            url1,
            url2,
            contents,
            likes: likesArr,
            dislikes: dislikesArr,
            introduce: introduceArr,
            follows,
            farewells,
        })
    };
    const handleCheck = (type:string, idx:number, checked: boolean) => {
        if (type === "contents") {
            setContents((prevArr) => {
                let newArr = prevArr;
                newArr[idx] = checked;
                return newArr;
            });
        }
        else if (type === "follows") {
            setFollows((prevArr) => {
                let newArr = prevArr;
                newArr[idx] = checked;
                return newArr;
            });
        }
        else if(type === "farewells") {
            setFarewells((prevArr) => {
                let newArr = prevArr;
                newArr[idx] = checked;
                return newArr;
            });
        }
    };
    const handleChange = (type:string, value:number) => {
        if (type === "solvedacTier") {
            setSolvedacTier(value);
        }
        else if (type === "codeforcesTier") {
            setCodeforcesTier(value);
        }
        else if(type === "atcoderTier") {
            setAtcoderTier(value);
        }
    };
    return (
        <StyledQuestions>
            <StyledQuestion>
                트위터 닉네임 및 아이디을 입력해주세요!
            </StyledQuestion>
            <StyledLabel>
                트위터 닉네임
                <StyledInputText type="text" placeholder="까룬" value={twitterNickname} onChange={(e) =>setTwitterNickname(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                트위터 ID
                <StyledInputText type="text" placeholder="shinhyun_main" value={twitterId} onChange={(e) =>setTwitterId(e.target.value)} />
            </StyledLabel>
            {
                menu === MenuText.algorithm &&
                <>
                    <StyledQuestion>
                        온라인 저지 핸들을 입력해주세요! (BOJ / 코포 / 앳코더)
                    </StyledQuestion>
                    <StyledLabel>
                        BOJ
                        <StyledInputText type="text" placeholder="kyaryunha_cpp (없으면 공백)" value={bojId} onChange={(e) =>setBojId(e.target.value)} />
                    </StyledLabel>
                    <StyledLabel>
                        BOJ(solvedac) 티어
                        <StyledSelect onChange={(e) => handleChange("solvedacTier", parseInt(e.currentTarget.value))} value={solvedacTier} color={SolvedAcTiers[solvedacTier][1]}>
                            {
                                SolvedAcTiers.map((tier,idx) => {
                                    return <StyledOption key={`solvedac-${tier[0]}`} value={idx} color={tier[1]}>
                                        {tier[0]}
                                    </StyledOption>
                                })
                            }
                        </StyledSelect>
                    </StyledLabel>

                    <StyledLabel>
                        Codeforces
                        <StyledInputText type="text" placeholder="shin_hyun (없으면 공백)" value={codeforcesId} onChange={(e) =>setCodeforcesId(e.target.value)} />
                    </StyledLabel>
                    <StyledLabel>
                        Codeforces 티어
                        <StyledSelect onChange={(e) => handleChange("codeforcesTier", parseInt(e.currentTarget.value))} value={codeforcesTier} color={CodeforcesTiers[codeforcesTier][1]}>
                            {
                                CodeforcesTiers.map((tier,idx) => {
                                    return <StyledOption key={`solvedac-${tier[0]}`} value={idx} color={tier[1]}>
                                        {tier[0]}
                                    </StyledOption>
                                })
                            }
                        </StyledSelect>
                    </StyledLabel>

                    <StyledLabel>
                        Atcoder
                        <StyledInputText type="text" placeholder="kyaryunha (없으면 공백)" value={atcoderId} onChange={(e) =>setAtcoderId(e.target.value)} />
                    </StyledLabel>
                    <StyledLabel>
                        Atcoder 티어
                        <StyledSelect onChange={(e) => handleChange("atcoderTier", parseInt(e.currentTarget.value))} value={atcoderTier} color={AtcoderTiers[atcoderTier][1]}>
                            {
                                AtcoderTiers.map((tier,idx) => {
                                    return <StyledOption key={`solvedac-${tier[0]}`} value={idx} color={tier[1]}>
                                        {tier[0]}
                                    </StyledOption>
                                })
                            }
                        </StyledSelect>
                    </StyledLabel>

                </>
            }
            <StyledQuestion>
                깃헙 / 웹사이트(최대 2개)를 표시할까요?
            </StyledQuestion>
            <StyledLabel>
                깃헙
                <StyledInputText type="text" placeholder="kyaryunha (없으면 공백)" value={githubId} onChange={(e) =>setGithubId(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                웹사이트1
                <StyledInputText type="text" placeholder="www.kyaryunha.com (없으면 공백)" value={url1} onChange={(e) =>setUrl1(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                웹사이트2
                <StyledInputText type="text" placeholder="twitter-friend.vercel.app (없으면 공백)" value={url2} onChange={(e) =>setUrl2(e.target.value)} />
            </StyledLabel>
            <StyledQuestion>
                트윗 주요 콘텐츠
            </StyledQuestion>
            {
                contentsTextArr.map((text, idx) => {
                    return <StyledCheckbox key={`checkbox-contents-${idx}`}>
                        <input type="checkbox" id={`contents-${idx}`} onChange={(e) => handleCheck("contents", idx, e.target.checked)}/>
                        <label htmlFor={`contents-${idx}`}>{text}</label>
                    </StyledCheckbox>
                })
            }
            <StyledQuestion>
                좋아하는 것을 적어주세요!
            </StyledQuestion>
            <StyledLabel>
                <StyledTextarea placeholder="프론트엔드, 벡엔드" value={likes} onChange={(e) =>setLikes(e.target.value)} />
            </StyledLabel>
            <StyledQuestion>
                싫어하는 것을 적어주세요!
            </StyledQuestion>
            <StyledLabel>
                <StyledTextarea placeholder="프론트엔드, 벡엔드" value={dislikes} onChange={(e) =>setDislikes(e.target.value)} />
            </StyledLabel>
            <StyledQuestion>
                팔로하는 경우
            </StyledQuestion>
            {
                followsTextArr.map((text, idx) => {
                    return <StyledCheckbox key={`checkbox-follows-${idx}`}>
                        <input type="checkbox" id={`follows-${idx}`} onChange={(e) => handleCheck("follows", idx, e.target.checked)}/>
                        <label htmlFor={`follows-${idx}`}>{text}</label>
                    </StyledCheckbox>
                })
            }
            <StyledQuestion>
                이별시
            </StyledQuestion>
            {
                farewellsTextArr.map((text, idx) => {
                    return <StyledCheckbox key={`checkbox-farewells-${idx}`}>
                        <input type="checkbox" id={`farewells-${idx}`} onChange={(e) => handleCheck("farewells", idx, e.target.checked)}/>
                        <label htmlFor={`farewells-${idx}`}>{text}</label>
                    </StyledCheckbox>
                })
            }
            <StyledQuestion>
                소개글을 입력해주세요!
            </StyledQuestion>
            <StyledLabel>
                <StyledTextarea placeholder="개발자는 멍멍하고 짖어요!" value={introduce} onChange={(e) =>setIntroduce(e.target.value)} />
            </StyledLabel>
            <StyledButton onClick={handleClick}>
                Create
            </StyledButton>
        </StyledQuestions>
    )
});
export default AlgorithmQuestions;
