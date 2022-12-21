import {
    farewellsTextArr,
    followsTextArr
} from "../../../utils/questions.text";
import {createImage, ctxFont, ctxInit, drawImage, drawNormalText, drawTitle, getWH} from "./draw.util";

type drawBasicFrameProps = {
    ctx: any,
    color: string,
}

export const drawBasicFrame = ({ctx, color}: drawBasicFrameProps) => {
    ctxInit(ctx);
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.rect(0, 0, 1600, 836);
    ctx.fill();

    // 테두리
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.rect(30, 30, 1540, 776);
    ctx.stroke();

    // 출처 표기
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillText("트친소 짤 생성기 - twitter-friend.vercel.app", 1050, 25);

    // 중간 선
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.moveTo(800, 159);
    ctx.lineTo(800, 750);
    ctx.stroke();
}

type drawTwitterProps = {
    ctx: any,
    x: number,
    y: number,
    color:string,
    twitterId?: string,
    twitterNickname?: string,
}

export const drawTwitter = async ({ctx, x, y, color, twitterId, twitterNickname}:drawTwitterProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    let img = await createImage("twitter.png");
    drawImage(ctx, img, nx, ny, 70, 70);
    nx += 85;
    ny += 50;
    // 닉넴 & 아이디 표기
    if (twitterNickname) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctxFont(ctx, 40);
        ctx.fillText(twitterNickname, nx, ny);
        nx += ctx.measureText(twitterNickname).width;
    }
    if(twitterId) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctxFont(ctx, 40);
        ctx.fillText(` (@${twitterId})`, nx, ny);
    }
}

type drawProfileImageProps = {
    ctx: any,
    x: number,
    y: number,
    profileImage: File|null
}
export const drawProfileImage = async ({ctx, x, y, profileImage}: drawProfileImageProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    if (profileImage !== null) {
        let img = await createImage(URL.createObjectURL(profileImage));
        drawImage(ctx, img, nx, ny, 200, 200);
    }
}

type drawGithubAndUrlsProps = {
    ctx: any,
    x: number,
    y: number,
    githubId?: string,
    url1?: string,
    url2?: string,
};

export const drawGithubAndUrls = async ({ctx, x, y, githubId, url1, url2}: drawGithubAndUrlsProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    if (githubId) {
        let img = await createImage("github.png");
        drawImage(ctx, img, nx, ny-25, 30, 30);
        ctx.beginPath();
        ctxFont(ctx, 30);
        ctx.fillText(githubId, nx+40, ny);
        ny += 30;
    }
    ctxInit(ctx);
    if (url1) {
        drawNormalText(ctx, url1, nx, ny);
        ny += 30;
    }
    if (url2) {
        drawNormalText(ctx, url2, nx, ny);
    }
};

type drawContentsProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    colorNo: string,
    contents: boolean[],
    textArr: string[],
};

export const drawContents = ({ctx, x, y, color, colorNo, contents, textArr}:drawContentsProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "트윗 성향", nx, ny, color);
    ny += 50;
    textArr.map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny, contents[idx]?color:colorNo);
        nx += ctx.measureText(text).width + 15;
    });
};


type drawFollowsProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    colorNo: string,
    follows: boolean[],
};

export const drawFollows = ({ctx, x, y, color, colorNo, follows}:drawFollowsProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "팔로하는 경우", nx, ny, color);
    ny += 50;
    followsTextArr.map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny, follows[idx]?color:colorNo);
        nx += ctx.measureText(text).width + 15;
    });
};

type drawFarewellsProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    colorNo: string,
    farewells: boolean[],
};

export const drawFarewells = ({ctx, x, y, color, colorNo, farewells}:drawFarewellsProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "이별시", nx, ny, color);
    ny += 50;
    farewellsTextArr.map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny, farewells[idx]?color:colorNo);
        nx += ctx.measureText(text).width + 15;
    });
};

type drawLikesProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    likes: string,
};
export const drawLikes = ({ctx, x, y, color, likes}: drawLikesProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "좋아하는 것", nx, ny, color);
    ny += 50;
    ctxInit(ctx);
    likes.split('\n').map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny);
        ny += 35;
    });
} ;


type drawDislikesProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    dislikes: string,
};
export const drawDislikes = ({ctx, x, y, color, dislikes}: drawDislikesProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "싫어하는 것", nx, ny, color);
    ny += 50;
    ctxInit(ctx);
    dislikes.split('\n').map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny);
        ny += 35;
    });
};

type drawIntroduceProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    introduce: string,
};
export const drawIntroduce = ({ctx, x, y, color, introduce}: drawIntroduceProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "소개글", nx, ny, color);
    ny += 50;
    ctxInit(ctx);
    introduce.split('\n').map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny);
        ny += 35;
    });
};
