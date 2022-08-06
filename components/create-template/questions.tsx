import {NextPage} from "next";
import {StyledQuestion} from "../../styles/create-template.style";
import {observer} from "mobx-react";
import {useStores} from "../../stores";
import {CreateMenuEnum} from "../../types";

const Questions: NextPage = observer(() => {
    const {createMenuStore}=useStores();
    return (
        <div>
            <StyledQuestion>
                트위터 닉네임 및 핸들을 입력해주세요!
            </StyledQuestion>
            <input/> <input/>
            {
                createMenuStore && createMenuStore.menu === CreateMenuEnum.ALGORITHM &&
                <>
                    <StyledQuestion>
                        OJ 핸들을 입력해주세요! (BOJ / 코포 / 앳코더)
                    </StyledQuestion>
                    <input/> <input/> <input/>
                </>
            }
            {
                createMenuStore && createMenuStore.menu === CreateMenuEnum.ALGORITHM &&
                <>
                    <StyledQuestion>
                        솔브드 티어를 표시할까요?
                    </StyledQuestion>
                    <input/>
                </>
            }
            {
                createMenuStore && createMenuStore.menu === CreateMenuEnum.FRONTEND &&
                <>
                    <StyledQuestion>
                        기술 스택을 입력해주세요!
                    </StyledQuestion>
                    <input/>
                </>
            }
            <StyledQuestion>
                깃헙 / 웹사이트(최대 2개)를 표시할까요?
            </StyledQuestion>
            <input/><input/><input/>
            <StyledQuestion>
                그 외에도 주로 파는 분야가 있으면 적어주세요!
            </StyledQuestion>
            <input/>
            <StyledQuestion>
                간략히 소개글을 입력하고 싶으면 입력해주세요!
            </StyledQuestion>
            <input/>
            <StyledQuestion>
                트윗 주요 콘텐츠
            </StyledQuestion>
            <select>

            </select>
        </div>
    )
});
export default Questions;
