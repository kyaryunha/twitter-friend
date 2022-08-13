import {observer} from "mobx-react";
import {StyledCheckbox, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";
import {followsTextArr} from "../../../utils/questions.text";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    팔로하는 경우
                </StyledQuestion>
                {
                    followsTextArr.map((text, idx) => {
                        return <StyledCheckbox key={`checkbox-follows-${idx}`}>
                            <input
                                type="checkbox"
                                id={`follows-${idx}`}
                                onChange={(e) => store.updateFollow(idx, e.target.checked)}
                                checked={store.follows[idx]}
                            />
                            <label htmlFor={`follows-${idx}`}>{text}</label>
                        </StyledCheckbox>
                    })
                }
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;
