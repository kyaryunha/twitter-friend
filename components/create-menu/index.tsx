import {NextPage} from "next";
import {StyledMenuItem, StyledMenuList } from "../../styles/create-menu.style";
import Link from "next/link";
import {MenuText} from "../../utils";
const CreateMenu: NextPage = () => {
    return (
        <StyledMenuList>
            <Link href="/basic">
                <StyledMenuItem>
                    트친소 ({MenuText.basic})
                </StyledMenuItem>
            </Link>
            <Link href="/otaku">
                <StyledMenuItem>
                    트친소 ({MenuText.otaku})
                </StyledMenuItem>
            </Link>
            <Link href="/algorithm">
                <StyledMenuItem>
                    {MenuText.algorithm} 트친소
                </StyledMenuItem>
            </Link>
            <Link href="/frontend">
                <StyledMenuItem>
                    {MenuText.frontend} 트친소
                </StyledMenuItem>
            </Link>
            {/*<Link href="/pokemon">*/}
            {/*    <StyledMenuItem>*/}
            {/*        {MenuText.pokemon} 트친소*/}
            {/*    </StyledMenuItem>*/}
            {/*</Link>*/}
        </StyledMenuList>
    )
}
export default CreateMenu;
