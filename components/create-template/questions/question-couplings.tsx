import {observer} from "mobx-react";
import {StyledCheckbox, StyledQuestion} from "../../../styles/create-template.style";
import {FC} from "react";
import {couplingTextArr} from "../../../utils/questions.text";
import {OtakuQuestionsStoreTypes} from "../../../stores/otaku";
const QuestionCoupling: FC<OtakuQuestionsStoreTypes>  = observer(({store}) => {
        return (
            <>
                <StyledQuestion>
                    커플링
                </StyledQuestion>
                {
                    couplingTextArr.map((text, idx) => {
                        return <StyledCheckbox key={`checkbox-couplings-${idx}`}>
                            <input
                                type="checkbox"
                                id={`couplings-${idx}`}
                                onChange={(e) => store.updateCouplings(idx, e.target.checked)}
                                checked={store.couplings[idx]}
                            />
                            <label htmlFor={`couplings-${idx}`}>{text}</label>
                        </StyledCheckbox>
                    })
                }
            </>
        )
    }
);

export default QuestionCoupling;
