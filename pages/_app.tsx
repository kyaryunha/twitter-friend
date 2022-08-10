import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react';
import Footer from "../components/footer";
import { StyledMainDiv } from '../styles/page.style';
import {FC} from "react";
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
        <StyledMainDiv>
            <Component {...pageProps} />
            <Footer />
        </StyledMainDiv>
    </>
}

export default MyApp
