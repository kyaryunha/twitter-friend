import {observer} from "mobx-react";
import {StyledLabel, StyledQuestion, StyledTextarea} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    좋아하는 것을 적어주세요!
                </StyledQuestion>
                <StyledLabel>
                    <StyledTextarea placeholder="프론트엔드, 벡엔드 (길게 쓰면 겹칠수 있으니, 내용을 줄이거나 엔터를 눌러주세요)" value={store.likes} onChange={(e) =>store.updateLikes(e.target.value)} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;
