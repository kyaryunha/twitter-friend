import {observer} from "mobx-react";
import {StyledCheckbox, StyledInputText, StyledLabel, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {contentsTextArr} from "../../../utils/questions.text";
import {QuestionsStoreProps} from "../../../stores/questions.store";
const QuestionGithubAndWebsites: FC<QuestionsStoreProps>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    트윗 주요 콘텐츠
                </StyledQuestion>
                {
                    contentsTextArr.map((text, idx) => {
                        return <StyledCheckbox key={`checkbox-contents-${idx}`}>
                            <input type="checkbox" id={`contents-${idx}`} onChange={(e) => store.updateContent(idx, e.target.checked)}/>
                            <label htmlFor={`contents-${idx}`}>{text}</label>
                        </StyledCheckbox>
                    })
                }
            </>
        )
    }
);

export default QuestionGithubAndWebsites;
