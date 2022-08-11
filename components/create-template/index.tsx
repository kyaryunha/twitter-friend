import {observer} from "mobx-react";
import AlgorithmQuestions from "./templates/algorithm/algorithm-questions";
import {StyledCreateTemplate} from "../../styles/create-template.style";
import {FC} from "react";
import { StyledSubTitle } from "../../styles/page.style";
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
                    {/*@ts-ignore*/}
                    <SvgBoard svg={<AlgorithmSvg />} />
                </>
            }
            {
                menu === "기본" && <>
                    <BasicQuestions menu={menu}/>
                    {/*@ts-ignore*/}
                    <SvgBoard svg={<BasicSvg />} />
                </>
            }
        </StyledCreateTemplate>
        )
    }
);

export default CreateTemplate;
