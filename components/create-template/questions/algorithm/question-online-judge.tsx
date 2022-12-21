import {observer} from "mobx-react";
import {
    StyledInputText,
    StyledLabel,
    StyledOption,
    StyledQuestion,
    StyledSelect
} from "../../../../styles/create-template.style";
import {FC} from "react";
import {AlgorithmQuestionsStoreTypes} from "../../../../stores/questions/algorithm.store";
import {AtcoderTiers, CodeforcesTiers, SolvedAcTiers} from "../../../../utils/online-judge.constant";
const QuestionOnlineJudge: FC<AlgorithmQuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    온라인 저지 핸들을 입력해주세요! (BOJ / 코포 / 앳코더)
                </StyledQuestion>
                <StyledLabel>
                    BOJ
                    <StyledInputText type="text" placeholder="kyaryunha_cpp (없으면 공백)" value={store.bojId} onChange={(e) =>store.updateBojId(e.target.value)} />
                </StyledLabel>
                <StyledLabel>
                    BOJ(solvedac) 티어
                    <StyledSelect onChange={(e) => (store.updateSolvedacTier(parseInt(e.currentTarget.value)))} value={store.solvedacTier} color={SolvedAcTiers[store.solvedacTier][1]}>
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
                    <StyledInputText type="text" placeholder="shin_hyun (없으면 공백)" value={store.codeforcesId} onChange={(e) =>store.updateCodeforcesId(e.target.value)} />
                </StyledLabel>
                <StyledLabel>
                    Codeforces 티어
                    <StyledSelect onChange={(e) => (store.updateCodeforcesTier(parseInt(e.currentTarget.value)))} value={store.codeforcesTier} color={CodeforcesTiers[store.codeforcesTier][1]}>
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
                    <StyledInputText type="text" placeholder="kyaryunha (없으면 공백)" value={store.atcoderId} onChange={(e) =>store.updateAtcoderId(e.target.value)} />
                </StyledLabel>
                <StyledLabel>
                    Atcoder 티어
                    <StyledSelect onChange={(e) => (store.updateAtcoderTier(parseInt(e.currentTarget.value)))} value={store.atcoderTier} color={AtcoderTiers[store.atcoderTier][1]}>
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
        )
    }
);

export default QuestionOnlineJudge;
