import {observer} from "mobx-react";
import AlgorithmQuestions from "./templates/algorithm/algorithm-questions";
import {StyledCreateTemplate} from "../../styles/create-template.style";
import {FC} from "react";
import SvgBoard from "./svg-board";
import AlgorithmSvg from "./templates/algorithm/algorithm-svg";
import BasicQuestions from "./templates/basic/basic-questions";
import BasicSvg from "./templates/basic/basic-svg";
type CreateTemplateProps = {
    menu: string,
}
const CreateTemplate: FC<CreateTemplateProps>  = observer(({menu}) => {
    return (
        <StyledCreateTemplate>
            {
                menu === "알고리즘" && <>
                    <AlgorithmQuestions menu={menu}/>
                    <SvgBoard menu={menu}/>
                </>
            }
            {
                menu === "기본" && <>
                    <BasicQuestions menu={menu}/>
                    <SvgBoard menu={menu} />
                </>
            }
        </StyledCreateTemplate>
        )
    }
);

export default CreateTemplate;
