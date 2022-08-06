import {NextPage} from "next";
import {observer} from "mobx-react";
import {useStores} from "../stores";
import {CreateMenuEnum} from "../types";
import CreateMenu from "./create-menu";
import CreateTemplate from "./create-template";
const Introduce: NextPage = observer(() => {
    const {createMenuStore} = useStores();
    return (
        <>
            {
                createMenuStore && createMenuStore.menu === CreateMenuEnum.INDEX &&
                <>원하는 템플릿을 선택해 짤을 만들어 봐요!</>
            }
        </>
    )
});
export default Introduce;
