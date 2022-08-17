import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {MenuText, MenuUrl} from "../utils";
import {useEffect} from "react";
import CreateTemplate from "../components/create-template";

const Menu: NextPage = () => {
    const router = useRouter();
    const {menu} = router.query;
    useEffect(() => {
        if (typeof menu === "string" && !MenuUrl.includes(menu)) {
            router.push('/404');
        }
    }, [menu]);
    return (
        <>
            {
                // @ts-ignore
                typeof menu === "string" && <CreateTemplate menu={MenuText[menu]} />
            }
        </>
    )
};

export default Menu
