import {observer} from "mobx-react";
import {StyledInputText, StyledLabel, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";
const QuestionTwitterNicknameAndId: FC<QuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    트위터 닉네임 및 아이디을 입력해주세요!
                </StyledQuestion>
                <StyledLabel>
                    트위터 닉네임
                    <StyledInputText type="text" placeholder="까룬" value={store.twitterNickname} onChange={(e) =>(store.updateTwitterNickname(e.target.value))} />
                </StyledLabel>
                <StyledLabel>
                    트위터 ID
                    <StyledInputText type="text" placeholder="shinhyun_main" value={store.twitterId} onChange={(e) =>(store.updateTwitterId(e.target.value))} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionTwitterNicknameAndId;
