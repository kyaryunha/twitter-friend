import {observer} from "mobx-react";
import {StyledCheckbox, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";
type QuestionGithubAndWebsitesProps = QuestionsStoreTypes & {
    textArr: string[],
};
const QuestionGithubAndWebsites: FC<QuestionGithubAndWebsitesProps>  = observer(({store, textArr}) => {
        return (
            <>
                <StyledQuestion>
                    트윗 주요 콘텐츠
                </StyledQuestion>
                {
                    textArr.map((text, idx) => {
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
