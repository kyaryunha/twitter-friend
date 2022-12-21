import {observer} from "mobx-react";
import {StyledLabel, StyledQuestion, StyledTextarea} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    소개글을 입력해주세요!
                </StyledQuestion>
                <StyledLabel>
                    <StyledTextarea placeholder="ex. 개발자는 멍멍하고 짖어요! (길게 쓰면 겹칠수 있으니, 내용을 줄이거나 엔터를 눌러주세요)" value={store.introduce} onChange={(e) =>store.updateIntroduce(e.target.value)} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;

