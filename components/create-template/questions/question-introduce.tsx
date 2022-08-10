import {observer} from "mobx-react";
import {StyledLabel, StyledQuestion, StyledTextarea} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreProps} from "../../../stores/questions.store";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreProps>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    소개글을 입력해주세요!
                </StyledQuestion>
                <StyledLabel>
                    <StyledTextarea placeholder="개발자는 멍멍하고 짖어요!" value={store.introduce} onChange={(e) =>store.updateIntroduce(e.target.value)} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;

