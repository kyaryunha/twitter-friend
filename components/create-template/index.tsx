import {observer} from "mobx-react";
import AlgorithmQuestions from "./templates/algorithm/algorithm-questions";
import {StyledCreateTemplate} from "../../styles/create-template.style";
import {FC} from "react";
import BasicQuestions from "./templates/basic/basic-questions";
import CanvasBoard from "./canvas-board";
import AlgorithmCanvas from "./templates/algorithm/algorithm-canvas";
import BasicCanvas from "./templates/basic/basic-canvas";
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
                    <CanvasBoard canvas={<AlgorithmCanvas />} menu={menu}/>
                </>
            }
            {
                menu === "기본" && <>
                    <BasicQuestions menu={menu}/>
                    {/*@ts-ignore*/}
                    <CanvasBoard canvas={<BasicCanvas />} menu={menu}/>
                </>
            }
        </StyledCreateTemplate>
        )
    }
);

export default CreateTemplate;
