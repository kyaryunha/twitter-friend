import {
    StyledQuestions,
} from "../../../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../../../stores";
import {FC} from "react";
import QuestionTwitterNicknameAndId from "../../questions/question-twitter-nickname-and-id";
import QuestionOnlineJudge from "../../questions/algorithm/question-online-judge";
import QuestionGithubAndWebsites from "../../questions/question-github-and-websites";
import QuestionContents from "../../questions/question-contents";
import QuestionLikes from "../../questions/question-likes";
import QuestionDislikes from "../../questions/question-dislikes";
import QuestionFollows from "../../questions/question-follows";
import QuestionFarewells from "../../questions/question-farewells";
import QuestionIntroduce from "../../questions/question-introduce";
import {algorithmContentsTextArr} from "../../../../utils/questions.text";
import {StyledSubTitle} from "../../../../styles/page.style";
type QuestionsProps = {
    menu: string,
}
const AlgorithmQuestions: FC<QuestionsProps> = observer(({menu}) => {
    const {algorithmQuestionsStore:questionsStore}=useStores();
    return (
        <StyledQuestions>
            <StyledSubTitle>
                {menu} 트친소 짤 생성기
            </StyledSubTitle>
            정보들을 입력해주세요!
            <QuestionTwitterNicknameAndId store={questionsStore}/>
            <QuestionOnlineJudge store={questionsStore} />
            <QuestionGithubAndWebsites store={questionsStore} />
            <QuestionContents store={questionsStore} textArr={algorithmContentsTextArr} />
            <QuestionLikes store={questionsStore} />
            <QuestionDislikes store={questionsStore} />
            <QuestionFollows store={questionsStore} />
            <QuestionFarewells store={questionsStore} />
            <QuestionIntroduce store={questionsStore} />
        </StyledQuestions>
    )
});
export default AlgorithmQuestions;
