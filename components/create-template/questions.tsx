import {NextPage} from "next";
import {
    StyledButton,
    StyledCheckbox,
    StyledInputText,
    StyledLabel,
    StyledQuestion,
    StyledSelect,
    StyledTextarea
} from "../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../stores";
import {CreateMenuEnum} from "../../types";
import {useState} from "react";
const Questions: NextPage = observer(() => {
    const {createMenuStore, questionsStore}=useStores();
    const [twitterNickname, setTwitterNickname] = useState("");
    const [twitterId, setTwitterId] = useState("");
    const [bojId, setBojId] = useState("");
    const [codeforcesId, setCodeforcesId] = useState("");
    const [atcoderId, setAtcoderId] = useState("");
    const [solvedacTier, setSolvedacTier] = useState("");
    const [githubId, setGithubId] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [contents, setContents] = useState({});
    const [fields, setFields] = useState("");
    const [introduce, setIntroduce] = useState("");
    const handleClick = () => {
        questionsStore.update({
            twitterNickname,
            twitterId,
            bojId,
            codeforcesId,
            atcoderId,
            solvedacTier,
            githubId,
            url1,
            url2,
            contents,
            fields: [],
            introduce,
        })
    };
    return (
        <>
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
                createMenuStore && createMenuStore.menu === CreateMenuEnum.ALGORITHM &&
                <>
                    <StyledQuestion>
                        OJ 핸들을 입력해주세요! (BOJ / 코포 / 앳코더)
                    </StyledQuestion>
                    <StyledLabel>
                        BOJ
                        <StyledInputText type="text" placeholder="kyaryunha_cpp" value={bojId} onChange={(e) =>setBojId(e.target.value)} />
                    </StyledLabel>
                    <StyledLabel>
                        Codeforces
                        <StyledInputText type="text" placeholder="shin_hyun" value={codeforcesId} onChange={(e) =>setCodeforcesId(e.target.value)} />
                    </StyledLabel>
                    <StyledLabel>
                        Atcoder
                        <StyledInputText type="text" placeholder="kyaryunha" value={atcoderId} onChange={(e) =>setAtcoderId(e.target.value)} />
                    </StyledLabel>
                </>
            }
            {
                createMenuStore && createMenuStore.menu === CreateMenuEnum.ALGORITHM &&
                <>
                    <StyledQuestion>
                        솔브드 티어를 표시할까요?
                    </StyledQuestion>
                    <StyledLabel>
                        티어
                        <StyledSelect>
                            <option defaultChecked={true}>
                                표시하지 않음
                            </option>
                        </StyledSelect>
                    </StyledLabel>
                </>
            }
            <StyledQuestion>
                깃헙 / 웹사이트(최대 2개)를 표시할까요?
            </StyledQuestion>
            <StyledLabel>
                깃헙
                <StyledInputText type="text" placeholder="kyaryunha" value={githubId} onChange={(e) =>setGithubId(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                웹사이트1
                <StyledInputText type="text" placeholder="www.kyaryunha.com" value={url1} onChange={(e) =>setUrl1(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                웹사이트2
                <StyledInputText type="text" placeholder="twitter-friend.vercel.app" value={url2} onChange={(e) =>setUrl2(e.target.value)} />
            </StyledLabel>
            <StyledQuestion>
                트윗 주요 콘텐츠
            </StyledQuestion>
            <StyledCheckbox><input type="checkbox" id="contents-1"/><label htmlFor="contents-1">일상트</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="contents-2"/><label htmlFor="contents-2">개발트</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="contents-2"/><label htmlFor="contents-2">욕트</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="contents-2"/><label htmlFor="contents-2">우울트</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="contents-2"/><label htmlFor="contents-2">19금트</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="contents-2"/><label htmlFor="contents-2">마음요정</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="contents-3"/><label htmlFor="contents-3">RT 많음</label></StyledCheckbox>
            <StyledQuestion>
                그 외에도 주로 파는 분야가 있으면 적어주세요!
            </StyledQuestion>
            <StyledLabel>
                <StyledTextarea placeholder="프론트엔드, 벡엔드" value={fields} onChange={(e) =>setFields(e.target.value)} />
            </StyledLabel>
            <StyledQuestion>
                간략히 소개글을 입력하고 싶으면 입력해주세요!
            </StyledQuestion>
            <StyledLabel>
                <StyledTextarea placeholder="개발자는 멍멍하고 짖어요!" value={introduce} onChange={(e) =>setIntroduce(e.target.value)} />
            </StyledLabel>
            <StyledQuestion>
                맞팔하는 경우
            </StyledQuestion>
            <StyledCheckbox><input type="checkbox" id="follow-1"/><label htmlFor="follow-1">트친소 알티</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="follow-2"/><label htmlFor="follow-2">트친소 마음</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="follow-3"/><label htmlFor="follow-3">멘션</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="follow-4"/><label htmlFor="follow-4">선팔</label></StyledCheckbox>
            <StyledQuestion>
                이별시
            </StyledQuestion>
            <StyledCheckbox><input type="checkbox" id="farewell-1"/><label htmlFor="farewell-1">블락</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="farewell-2"/><label htmlFor="farewell-2">블언블</label></StyledCheckbox>
            <StyledCheckbox><input type="checkbox" id="farewell-3"/><label htmlFor="farewell-3">언팔</label></StyledCheckbox>
            <StyledButton onClick={handleClick}>
                Create
            </StyledButton>
        </>
    )
});
export default Questions;
