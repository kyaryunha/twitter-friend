import AlgorithmQuestions from "./templates/algorithm/algorithm-questions";
import SvgBoard from "./svg-board";
import BasicQuestions from "./templates/basic/basic-questions";
import AlgorithmSvg from "./templates/algorithm/algorithm-svg";
import BasicSvg from "./templates/basic/basic-svg";

const SelectedSvg = () => {
    return <>
        {
            menu === "알고리즘" && <AlgorithmSvg />
        }
        {
            menu === "기본" && <BasicSvg />
        }
    </>
}

export default SelectedSvg