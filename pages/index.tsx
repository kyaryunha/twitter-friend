import type {NextPage} from 'next'
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
