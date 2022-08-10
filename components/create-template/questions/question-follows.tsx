import {observer} from "mobx-react";
import {StyledCheckbox, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreProps} from "../../../stores/questions.store";
import {followsTextArr} from "../../../utils/questions.text";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreProps>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    팔로하는 경우
                </StyledQuestion>
                {
                    followsTextArr.map((text, idx) => {
                        return <StyledCheckbox key={`checkbox-follows-${idx}`}>
                            <input type="checkbox" id={`follows-${idx}`} onChange={(e) => store.updateFollow(idx, e.target.checked)}/>
                            <label htmlFor={`follows-${idx}`}>{text}</label>
                        </StyledCheckbox>
                    })
                }
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;
