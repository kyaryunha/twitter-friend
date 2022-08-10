import {observer} from "mobx-react";
import {StyledCheckbox, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreProps} from "../../../stores/questions.store";
import {farewellsTextArr} from "../../../utils/questions.text";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreProps>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    이별시
                </StyledQuestion>
                {
                    farewellsTextArr.map((text, idx) => {
                        return <StyledCheckbox key={`checkbox-farewells-${idx}`}>
                            <input type="checkbox" id={`farewells-${idx}`} onChange={(e) => store.updateFarewell(idx, e.target.checked)}/>
                            <label htmlFor={`farewells-${idx}`}>{text}</label>
                        </StyledCheckbox>
                    })
                }
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;
