import {observer} from "mobx-react";
import {StyledInputText, StyledLabel, StyledQuestion, StyledTextarea} from "../../../../styles/create-template.style";
import {FC} from "react";
import {OtakuQuestionsStoreTypes} from "../../../../stores/otaku";
const QuestionGenreName: FC<OtakuQuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    파는 장르가 무엇인가요? (xxx 트친소라 표기됩니다!)
                </StyledQuestion>
                <StyledLabel>
                    <StyledInputText type="text" placeholder="ex. 포켓몬" value={store.genreName} onChange={(e) =>store.updateGenreName(e.target.value)} />
                </StyledLabel>
            </>
        )
    }
);

export default QuestionGenreName;
