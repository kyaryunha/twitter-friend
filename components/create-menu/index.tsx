import {NextPage} from "next";
import {StyledMenuItem, StyledMenuList } from "../../styles/create-menu.style";
import {useStores} from "../../stores";
import {CreateMenuEnum} from "../../types";
const CreateMenu: NextPage = () => {
    const { createMenuStore } = useStores();
    const handleClick = (menu: CreateMenuEnum) => {
        createMenuStore.update(menu);
    };
    return (
        <StyledMenuList>
            <StyledMenuItem onClick={() => handleClick(CreateMenuEnum.ALGORITHM)}>
                알고리즘 트친소
            </StyledMenuItem>
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.FRONTEND)}>*/}
            {/*    프론트엔드 트친소*/}
            {/*</StyledMenuItem>*/}
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.BACKEND)}>*/}
            {/*    벡엔드 트친소*/}
            {/*</StyledMenuItem>*/}
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.MACHINE_LEARNING)}>*/}
            {/*    머신러닝 트친소*/}
            {/*</StyledMenuItem>*/}
            {/*<StyledMenuItem onClick={() => handleClick(CreateMenuEnum.BLOCKCHAIN)}>*/}
            {/*    블록체인 트친소*/}
            {/*</StyledMenuItem>*/}
        </StyledMenuList>
    )
}
export default CreateMenu;
