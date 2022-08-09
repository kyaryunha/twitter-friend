import {observer} from "mobx-react";
import AlgorithmQuestions from "./algorithm-questions";
import {StyledCreateTemplate} from "../../styles/create-template.style";
import AlgorithmSvg from "./algorithm-svg";
import {FC} from "react";
import { StyledSubTitle } from "../../styles/page.style";
type CreateTemplateProps = {
    menu: string,
}
const CreateTemplate: FC<CreateTemplateProps>  = observer(({menu}) => {
        return (
            <>
                <StyledSubTitle>
                    {menu} 트친소 짤 생성기
                </StyledSubTitle>
                정보들을 입력해주세요!
                <StyledCreateTemplate>
                    {
                        menu === "알고리즘" && <>
                            <AlgorithmQuestions menu={menu}/>
                            <AlgorithmSvg />
                        </>
                    }
                </StyledCreateTemplate>
            </>
        )
    }
);

export default CreateTemplate;
