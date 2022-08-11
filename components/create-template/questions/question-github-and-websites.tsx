import {observer} from "mobx-react";
import {StyledInputText, StyledLabel, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {QuestionsStoreTypes} from "../../../stores/questions.store";

const QuestionGithubAndWebsites: FC<QuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
            <StyledQuestion>
            깃헙 / 웹사이트(최대 2개)를 표시할까요?
            </StyledQuestion>
            <StyledLabel>
                깃헙
                <StyledInputText type="text" placeholder="kyaryunha (없으면 공백)" value={store.githubId} onChange={(e) =>store.updateGithubId(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                웹사이트1
                <StyledInputText type="text" placeholder="www.kyaryunha.com (없으면 공백)" value={store.url1} onChange={(e) =>store.updateUrl1(e.target.value)} />
            </StyledLabel>
            <StyledLabel>
                웹사이트2
                <StyledInputText type="text" placeholder="twitter-friend.vercel.app (없으면 공백)" value={store.url2} onChange={(e) =>store.updateUrl2(e.target.value)} />
            </StyledLabel>
            </>
        )
    }
);

export default QuestionGithubAndWebsites;

