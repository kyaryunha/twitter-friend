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
                    <StyledTextarea placeholder="개발자는 멍멍하고 짖어요! (길어지면 엔터를 눌러주세요)" value={store.introduce} onChange={(e) =>store.updateIntroduce(e.target.value)} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;

