import type {NextPage} from 'next'
import Link from 'next/link';
import {StyledTitle} from "../styles/page.style";
import Introduce from "../components/introduce";
import CreateMenu from "../components/create-menu";

const Home: NextPage = () => {
  return (
    <>
        <Introduce />
        <CreateMenu />

    </>
  )
};

export default Home
