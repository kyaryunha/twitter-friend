import {
    StyledQuestions,
} from "../../../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../../../stores";
import {FC} from "react";
import QuestionTwitterNicknameAndId from "../../questions/question-twitter-nickname-and-id";
import QuestionGithubAndWebsites from "../../questions/question-github-and-websites";
import QuestionContents from "../../questions/question-contents";
import QuestionLikes from "../../questions/question-likes";
import QuestionDislikes from "../../questions/question-dislikes";
import QuestionFollows from "../../questions/question-follows";
import QuestionFarewells from "../../questions/question-farewells";
import QuestionIntroduce from "../../questions/question-introduce";
import {contentsTextArr, developmentsContentsTextArr} from "../../../../utils/questions.text";
import { StyledSubTitle } from "../../../../styles/page.style";
import QuestionFrontendStacks from "../../questions/frontend/question-frontend-stacks";
type QuestionsProps = {
    menu: string,
}
const FrontendQuestions: FC<QuestionsProps> = observer(({menu}) => {
    const {frontendQuestionStore:questionsStore}=useStores();
    return (
        <StyledQuestions>
            <StyledSubTitle>
                {menu} 트친소 짤 생성기
            </StyledSubTitle>
            <QuestionTwitterNicknameAndId store={questionsStore}/>
            <QuestionFrontendStacks store={questionsStore}/>
            <QuestionGithubAndWebsites store={questionsStore} />
            <QuestionContents store={questionsStore} textArr={developmentsContentsTextArr} />
            <QuestionLikes store={questionsStore} />
            <QuestionDislikes store={questionsStore} />
            <QuestionFollows store={questionsStore} />
            <QuestionFarewells store={questionsStore} />
            <QuestionIntroduce store={questionsStore} />
        </StyledQuestions>
    )
});
export default FrontendQuestions;
