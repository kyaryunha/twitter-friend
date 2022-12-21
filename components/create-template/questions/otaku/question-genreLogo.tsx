import {observer} from "mobx-react";
import {StyledInputFile, StyledLabel, StyledQuestion} from "../../../../styles/create-template.style";
import {FC} from "react";
import {OtakuQuestionsStoreTypes} from "../../../../stores/otaku";
const QuestionGenreLogo: FC<OtakuQuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    장르 로고 사진을 올려주세요. <button onClick={() => store.updateGenreLogo(null)}>지우기</button>
                </StyledQuestion>
                <StyledLabel>
                    <StyledInputFile type="file"
                           accept="image/png, image/jpeg, image/jpg"
                           onChange={(e) =>store.updateGenreLogo(e.currentTarget.files&&e.currentTarget.files[0])}
                    >
                    </StyledInputFile>
                </StyledLabel>
            </>
        )
    }
);

export default QuestionGenreLogo;

