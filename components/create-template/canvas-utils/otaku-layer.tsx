import {createImage, ctxFont, ctxInit, drawImage, drawNormalText, drawTitle, getWH} from "./draw.util";
import {couplingTextArr} from "../../../utils/questions.text";

type drawGenreNameProps = {
    ctx: any,
    x: number,
    y: number,
    color:string,
    genreName?: string,
}

export const drawGenreName = ({ctx, x, y, color, genreName}:drawGenreNameProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    // 닉넴 & 아이디 표기
    if (genreName) {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctxFont(ctx, 40);
        let genreNameText = `# ${genreName} 트친소`
        ctx.fillText(genreNameText, nx, ny);
    }
}

type drawCouplingsProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    colorNo: string,
    couplings: boolean[],
};

export const drawCouplings = ({ctx, x, y, color, colorNo, couplings} : drawCouplingsProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "커플링", nx, ny, color);
    ny += 50;
    couplingTextArr.map((text:string, idx:number) => {
        drawNormalText(ctx, text, nx, ny, couplings[idx]?color:colorNo);
        nx += ctx.measureText(text).width + 15;
    });
}

type drawCharacterImagesProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    characterImages: (File|null)[]
}

export const drawCharacterImages = async ({ctx, x, y, color, characterImages}: drawCharacterImagesProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    ny += 50;
    for(let i = 0; i < 3; i++) {
        if (characterImages[i] !== null) {
            // @ts-ignore
            let img = await createImage(URL.createObjectURL(characterImages[i]));
            let {w, h} = getWH(img, -1, 200);
            drawImage(ctx, img, nx, ny, w, h);
            nx += w + 15;
        }
    }
}

type drawGenreLogoProps = {
    ctx: any,
    x: number,
    y: number,
    genreLogo: File|null
}

export const drawGenreLogo = async ({ctx, x, y, genreLogo}: drawGenreLogoProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    if (genreLogo !== null) {
        let img = await createImage(URL.createObjectURL(genreLogo));
        let {w, h} = getWH(img, -1, 80);
        drawImage(ctx, img, nx-w, ny, w, h);
    }
}
