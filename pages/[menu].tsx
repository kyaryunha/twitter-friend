import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {MenuText, MenuUrl} from "../utils";
import {useEffect} from "react";
import CreateTemplate from "../components/create-template";
import Head from 'next/head';

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
            <Head>
                <title>
                    트친소 짤 생성기 - {typeof menu === "string" && MenuText[menu]}
                </title>
            </Head>
            {
                // @ts-ignore
                typeof menu === "string" && <CreateTemplate menu={MenuText[menu]} />
            }
        </>
    )
};

export default Menu
