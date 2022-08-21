import type {NextPage} from 'next'
import Link from 'next/link';
import {StyledSubTitle, StyledTitle} from "../styles/page.style";
import Head from "next/head";
import {MenuText} from "../utils";

const Home: NextPage = () => {
    return (
        <>

            <Head>
                <title>
                    트친소 짤 생성기 - 404 Not Found
                </title>
            </Head>
            <StyledTitle>
                <Link href="/">
                    <a>트친소 짤 생성기</a>
                </Link>
            </StyledTitle>
            <StyledSubTitle>
                404 Not Found
            </StyledSubTitle>
        </>
    )
};

export default Home
