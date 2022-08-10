import {observer} from "mobx-react";
import {StyledLabel, StyledQuestion, StyledTextarea} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreProps} from "../../../stores/questions.store";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreProps>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    좋아하는 것을 적어주세요!
                </StyledQuestion>
                <StyledLabel>
                    <StyledTextarea placeholder="프론트엔드, 벡엔드" value={store.likes} onChange={(e) =>store.updateLikes(e.target.value)} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;
