import type {NextPage} from 'next'
import Link from 'next/link';
import {StyledTitle} from "../styles/page.style";
import Introduce from "../components/introduce";
import CreateMenu from "../components/create-menu";
import CreateTemplate from "../components/create-template";
import {useStores} from "../stores";
import {CreateMenuEnum} from "../types";
import {observer} from "mobx-react";

const Home: NextPage = observer(() => {
    const { createMenuStore } = useStores();
    const handleClick = (menu: CreateMenuEnum) => {
        createMenuStore.update(menu);
    };
  return (
    <>
        <StyledTitle>
            <Link href="/">
                <a onClick={() => handleClick(CreateMenuEnum.INDEX)}>트친소 짤 생성기</a>
            </Link>
        </StyledTitle>
        <Introduce />
        {
            createMenuStore && createMenuStore.menu === CreateMenuEnum.INDEX && <CreateMenu />
        }
        {
            createMenuStore && createMenuStore.menu !== CreateMenuEnum.INDEX && <CreateTemplate />
        }

    </>
  )
});

export default Home
