import {observer} from "mobx-react";
import AlgorithmQuestions from "./templates/algorithm/algorithm-questions";
import {StyledCreateTemplate} from "../../styles/create-template.style";
import {FC} from "react";
import BasicQuestions from "./templates/basic/basic-questions";
import CanvasBoard from "./canvas-board";
import AlgorithmCanvas from "./templates/algorithm/algorithm-canvas";
import BasicCanvas from "./templates/basic/basic-canvas";
import {MenuText} from "../../utils";
import FrontendQuestions from "./templates/frontend/frontend-questions";
import FrontendCanvas from "./templates/frontend/frontend-canvas";
import OtakuQuestions from "./templates/otaku/otaku-questions";
import OtakuCanvas from "./templates/otaku/otaku-canvas";
type CreateTemplateProps = {
    menu: string,
}
const CreateTemplate: FC<CreateTemplateProps>  = observer(({menu}) => {
    return (
        <StyledCreateTemplate>
            {
                menu === MenuText.basic && <>
                    <BasicQuestions menu={menu}/>
                    {/*@ts-ignore*/}
                    <CanvasBoard canvas={<BasicCanvas />} menu={menu}/>
                </>
            }
            {
                menu === MenuText.otaku && <>
                    <OtakuQuestions menu={menu}/>
                    {/*@ts-ignore*/}
                    <CanvasBoard canvas={<OtakuCanvas />} menu={menu}/>
                </>
            }
            {
                menu === MenuText.algorithm && <>
                    <AlgorithmQuestions menu={menu}/>
                    {/*@ts-ignore*/}
                    <CanvasBoard canvas={<AlgorithmCanvas />} menu={menu}/>
                </>
            }
            {
                menu === MenuText.frontend && <>
                    <FrontendQuestions menu={menu}/>
                    {/*@ts-ignore*/}
                    <CanvasBoard canvas={<FrontendCanvas />} menu={menu}/>
                </>
            }
        </StyledCreateTemplate>
        )
    }
);

export default CreateTemplate;
