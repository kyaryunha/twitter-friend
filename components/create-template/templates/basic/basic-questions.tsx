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
import {algorithmContentsTextArr, contentsTextArr} from "../../../../utils/questions.text";
type QuestionsProps = {
    menu: string,
}
const BasicQuestions: FC<QuestionsProps> = observer(({menu}) => {
    const {basicQuestionsStore}=useStores();
    return (
        <StyledQuestions>
            <QuestionTwitterNicknameAndId store={basicQuestionsStore}/>
            <QuestionGithubAndWebsites store={basicQuestionsStore} />
            <QuestionContents store={basicQuestionsStore} textArr={contentsTextArr} />
            <QuestionLikes store={basicQuestionsStore} />
            <QuestionDislikes store={basicQuestionsStore} />
            <QuestionFollows store={basicQuestionsStore} />
            <QuestionFarewells store={basicQuestionsStore} />
            <QuestionIntroduce store={basicQuestionsStore} />
        </StyledQuestions>
    )
});
export default BasicQuestions;
