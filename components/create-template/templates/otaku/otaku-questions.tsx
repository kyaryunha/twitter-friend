import {
    StyledQuestions,
} from "../../../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../../../stores";
import {FC} from "react";
import QuestionTwitterNicknameAndId from "../../questions/question-twitter-nickname-and-id";
import QuestionContents from "../../questions/question-contents";
import QuestionFollows from "../../questions/question-follows";
import QuestionFarewells from "../../questions/question-farewells";
import QuestionIntroduce from "../../questions/question-introduce";
import {otakuContentsTextArr} from "../../../../utils/questions.text";
import { StyledSubTitle } from "../../../../styles/page.style";
import QuestionProfileImage from "../../questions/question-profileImage";
import QuestionCouplings from "../../questions/question-couplings";
import QuestionGenreName from "../../questions/otaku/question-genreName";
import QuestionCharacterImages from "../../questions/otaku/question-characterImages";
import QuestionGenreLogo from "../../questions/otaku/question-genreLogo";
type QuestionsProps = {
    menu: string,
}
const OtakuQuestions: FC<QuestionsProps> = observer(({menu}) => {
    const {otakuQuestionStore:questionsStore}=useStores();
    return (
        <StyledQuestions>
            <StyledSubTitle>
                {menu} 트친소 짤 생성기
            </StyledSubTitle>
            <QuestionTwitterNicknameAndId store={questionsStore} />
            <QuestionProfileImage store={questionsStore} />
            <QuestionGenreName store={questionsStore} />
            <QuestionGenreLogo store={questionsStore} />
            <QuestionCouplings store={questionsStore} />
            <QuestionContents store={questionsStore} textArr={otakuContentsTextArr} />
            <QuestionFollows store={questionsStore} />
            <QuestionFarewells store={questionsStore} />
            <QuestionCharacterImages store={questionsStore} />
            <QuestionIntroduce store={questionsStore} />
        </StyledQuestions>
    )
});
export default OtakuQuestions;
