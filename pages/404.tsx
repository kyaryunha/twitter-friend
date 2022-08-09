import type {NextPage} from 'next'
import Link from 'next/link';
import {StyledSubTitle, StyledTitle} from "../styles/page.style";

const Home: NextPage = () => {
    return (
        <>
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
