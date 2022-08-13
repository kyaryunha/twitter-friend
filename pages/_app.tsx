import Head from "next/head";
import * as gtag from "../utils/gtag";
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react';
import Footer from "../components/footer";
import {StyledMainDiv, StyledTitle} from '../styles/page.style';
import {FC, useEffect} from "react";
import TagManager from "react-gtm-module";
import {useRouter} from "next/router";
import Link from "next/link";


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter();
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            const handleRouteChange = (url:any) => {
                gtag.pageview(url);
            };
            router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router.events]);
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            TagManager.initialize({ gtmId: 'GTM-M78S5P5' });
        }
    }, []);
    return <>
        <Global
            styles={css`
              @font-face {
                font-family: 'Pretendard Variable';
                font-weight: 400;
                font-style: normal;
                font-display: swap;
                src: local('Pretendard Variable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations');
              }
              body {
                margin: 0;
                padding: 0;
                background-color: rgb(21, 32, 43);
                overflow-x: hidden;
              }
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font: inherit;
                font-family: 'Pretendard Variable', sans-serif;
              }
            `}
        />
        <Head>
            <title>트친소 짤 생성기</title>
            <meta name="description" content="트친소 짤 생성기" />
        </Head>
        <StyledMainDiv>
            <StyledTitle>
                <Link href="/">
                    <a>트친소 짤 생성기</a>
                </Link>
                <Link href="https://github.com/kyaryunha/twitter-friend">
                    <a target="_blank">
                        <img src="github-light.png"  alt="github logo"/>
                    </a>
                </Link>
            </StyledTitle>
            <Component {...pageProps} />
            <Footer />
        </StyledMainDiv>
    </>
}

export default MyApp;