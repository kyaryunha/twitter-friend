import {NextPage} from "next";
import { StyledFooter } from "../styles/page.style";
const Footer: NextPage = () => {
    return (
        <StyledFooter>
            Development: <a href="https://twitter.com/shinhyun_main" target="_blank" rel="noreferrer">@shinhyun_main</a>
            <br />
            Idea: <a href="https://twitter.com/horse_sensei" target="_blank" rel="noreferrer">@horse_sensei</a>
            <br />
            건의사항은 <a href="https://github.com/kyaryunha/twitter-friend/issues" target="_blank" rel="noreferrer">깃헙 Issue</a>로 남겨주세요.
            <br />
        </StyledFooter>
    )
}
export default Footer;
