import {
    StyledQuestions,
} from "../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../stores";
import {FC} from "react";
import {MenuText} from "../../utils";
import QuestionTwitterNicknameAndId from "./questions/question-twitter-nickname-and-id";
import QuestionOnlineJudge from "./questions/algorithm/question-online-judge";
import QuestionGithubAndWebsites from "./questions/question-github-and-websites";
import QuestionContents from "./questions/question-contents";
import QuestionLikes from "./questions/question-likes";
import QuestionDislikes from "./questions/question-dislikes";
import QuestionFollows from "./questions/question-follows";
import QuestionFarewells from "./questions/question-farewells";
import QuestionIntroduce from "./questions/question-introduce";
type QuestionsProps = {
    menu: string,
}
const AlgorithmQuestions: FC<QuestionsProps> = observer(({menu}) => {
    const {algorithmQuestionsStore}=useStores();
    return (
        <StyledQuestions>
            <QuestionTwitterNicknameAndId store={algorithmQuestionsStore}/>
            {
                menu === MenuText.algorithm &&
                <QuestionOnlineJudge store={algorithmQuestionsStore} />
            }
            <QuestionGithubAndWebsites store={algorithmQuestionsStore} />
            <QuestionContents store={algorithmQuestionsStore} />
            <QuestionLikes store={algorithmQuestionsStore} />
            <QuestionDislikes store={algorithmQuestionsStore} />
            <QuestionFollows store={algorithmQuestionsStore} />
            <QuestionFarewells store={algorithmQuestionsStore} />
            <QuestionIntroduce store={algorithmQuestionsStore} />
        </StyledQuestions>
    )
});
export default AlgorithmQuestions;
