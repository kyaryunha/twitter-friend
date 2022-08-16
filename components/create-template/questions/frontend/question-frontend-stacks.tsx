import {observer} from "mobx-react";
import {
    StyledCheckbox,
    StyledQuestion,
    StyledStacksli,
    StyledStacksUl,
} from "../../../../styles/create-template.style";
import {FC} from "react";
import {FrontendQuestionsStoreTypes} from "../../../../stores/frontend-questions.store";
import {FrontendStacks, StacksFilename, StacksFolder} from "../../../../utils/stacks.constant";
const QuestionFrontendStacks: FC<FrontendQuestionsStoreTypes>  = observer(({store}) => {
    return (
        <>
            <StyledQuestion>
                프론트엔드 기술스택을 선택해주세요!
            </StyledQuestion>
            여러개를 선택하고나서 ↔ 를 눌러 원하는 순서대로 표시할 수 있습니다
            <StyledStacksUl>
                {
                    store.selectedFrontendStacks.length === 0 && <>
                    현재 선택된게 없음
                    </>
                }
                {
                    store.selectedFrontendStacks.map((selectedIdx, idx) => {
                        // @ts-ignore
                        return <StyledStacksli key={`frontend-stacks-${idx}-${selectedIdx}`}>
                            {
                                idx !== 0 && <button onClick={() => store.updateOrder(selectedIdx)}>
                                    ↔
                                </button>
                            }
                            <img src={`${StacksFolder}${StacksFilename[FrontendStacks[selectedIdx]]}`} alt={FrontendStacks[selectedIdx]}/>
                            <span>{FrontendStacks[selectedIdx]}</span>
                            <button onClick={() => store.updateFrontendStacks(selectedIdx, false)}>
                                x
                            </button>
                        </StyledStacksli>
                    })
                }
                <StyledStacksli>
                    Search:
                    <input/>
                </StyledStacksli>
            </StyledStacksUl>
            {
                FrontendStacks.map((stacks, idx) => {
                    return <StyledCheckbox key={`checkbox-follows-${idx}`}>
                        <input
                            type="checkbox"
                            id={`follows-${idx}`}
                            onClick={(e) => store.updateFrontendStacks(idx, e.target.checked)}
                            checked={store.frontendStacks[idx] > 0}
                        />
                        <label htmlFor={`follows-${idx}`}>{stacks}</label>
                    </StyledCheckbox>
                })
            }
        </>
    )
});

export default QuestionFrontendStacks;
