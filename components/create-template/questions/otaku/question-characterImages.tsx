import {observer} from "mobx-react";
import {StyledInputFile, StyledLabel, StyledQuestion} from "../../../../styles/create-template.style";
import {FC} from "react";
import {OtakuQuestionsStoreTypes} from "../../../../stores/otaku";
const QuestionProfileImage: FC<OtakuQuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    좋아하는 캐릭터 사진을 올려주세요. (*가로가 너무 길면 안됩니다) <button onClick={() => store.updateCharacterImages(-1, null)}>지우기</button>
                </StyledQuestion>
                <StyledLabel>
                    첫 번째 사진
                    <StyledInputFile type="file"
                           accept="image/png, image/jpeg, image/jpg"
                           onChange={(e) =>store.updateCharacterImages(0, e.currentTarget.files&&e.currentTarget.files[0])}
                    >
                    </StyledInputFile>
                </StyledLabel>
                <StyledLabel>
                    두 번째 사진
                    <StyledInputFile type="file"
                           accept="image/png, image/jpeg, image/jpg"
                           onChange={(e) =>store.updateCharacterImages(1, e.currentTarget.files&&e.currentTarget.files[0])}
                    >
                    </StyledInputFile>
                </StyledLabel>
                <StyledLabel>
                    세 번째 사진
                    <StyledInputFile type="file"
                           accept="image/png, image/jpeg, image/jpg"
                           onChange={(e) =>store.updateCharacterImages(2, e.currentTarget.files&&e.currentTarget.files[0])}
                    >
                    </StyledInputFile>
                </StyledLabel>
            </>
        )
    }
);

export default QuestionProfileImage;

