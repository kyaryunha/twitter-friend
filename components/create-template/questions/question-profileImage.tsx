import {observer} from "mobx-react";
import {StyledInputFile, StyledLabel, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";
const QuestionProfileImage: FC<QuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    프로필 사진을 올려주세요. (정사각형 권장) <button onClick={() => store.updateProfileImage(null)}>지우기</button>
                </StyledQuestion>
                <StyledLabel>
                    <StyledInputFile type="file"
                           accept="image/png, image/jpeg, image/jpg"
                           onChange={(e) =>store.updateProfileImage(e.currentTarget.files&&e.currentTarget.files[0])}
                    >
                    </StyledInputFile>
                </StyledLabel>
            </>
        )
    }
);

export default QuestionProfileImage;

