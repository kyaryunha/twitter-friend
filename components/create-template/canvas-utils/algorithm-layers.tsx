import {AtcoderTiers, CodeforcesTiers, SolvedAcTiers} from "../../../utils/online-judge.constant";
import {ctxInit, drawImage, drawNormalText, drawTitle} from "./draw.util";


type drawAlgorithmOJProps = {
    ctx: any,
    x: number,
    y: number,
    color: string,
    bojId: string,
    solvedacTier: number,
    codeforcesId: string,
    codeforcesTier: number,
    atcoderId: string,
    atcoderTier: number,
};
export const drawAlgorithmOJ = ({ctx, x, y, color, bojId, solvedacTier, codeforcesId, codeforcesTier, atcoderId, atcoderTier}: drawAlgorithmOJProps) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, "온라인저지", nx, ny, color);
    ny += 50;
    if (bojId) {
        drawImage(ctx, "oj/boj.png", nx, ny-30, 40, 40);
        ctx.fontWeight = "bold";
        if (solvedacTier===1) {
            let gradient = ctx.createLinearGradient(nx,ny+15,nx, ny-30);
            gradient.addColorStop(0,"#ff7ca8");
            gradient.addColorStop(0.5, "#b491ff");
            gradient.addColorStop(1,"#7cf9ff");
            ctx.fillStyle = gradient;
        }
        else {
            ctx.fillStyle = SolvedAcTiers[solvedacTier][1];
        }
        drawNormalText(ctx, bojId, nx+50, ny);
        if (solvedacTier !== 0) {
            let len = ctx.measureText(bojId).width;
            drawNormalText(ctx, ` (${SolvedAcTiers[solvedacTier][0]})`, nx+50+len, ny);
        }
        ny += 40;
    }
    if (codeforcesId) {
        drawImage(ctx, "oj/codeforces.png", nx, ny-35, 40, 40);
        ctx.fontWeight = "bold";
        if (codeforcesTier === 1) {
            ctx.fillStyle = "black";
            drawNormalText(ctx, codeforcesId[0], nx+50, ny);
            let len = ctx.measureText(codeforcesId[0]).width;
            ctx.fillStyle = CodeforcesTiers[codeforcesTier][1];
            drawNormalText(ctx, codeforcesId.slice(1), nx+50+len, ny);
        }
        else {
            ctx.fillStyle = CodeforcesTiers[codeforcesTier][1];
            drawNormalText(ctx, codeforcesId, nx+50, ny);
        }
        if (codeforcesTier !== 0) {
            if (codeforcesTier === 1) {
                let len1 = ctx.measureText(codeforcesId).width;
                ctx.fillStyle = CodeforcesTiers[codeforcesTier][1];
                drawNormalText(ctx," (", nx+50+len1, ny);
                let len2 = ctx.measureText(" (").width;
                ctx.fillStyle = "black";
                drawNormalText(ctx, `${CodeforcesTiers[codeforcesTier][0][0]}`, nx+50+len1+len2, ny);
                let len3 = ctx.measureText(`${CodeforcesTiers[codeforcesTier][0][0]}`).width;
                ctx.fillStyle = CodeforcesTiers[codeforcesTier][1];
                drawNormalText(ctx, `${CodeforcesTiers[codeforcesTier][0].slice(1)})`, nx+50+len1+len2+len3, ny);
            }
            else {
                let len = ctx.measureText(codeforcesId).width;
                drawNormalText(ctx, ` (${CodeforcesTiers[codeforcesTier][0]})`, nx+50+len, ny);
            }
        }
        ny += 40;
    }
    if (atcoderId) {
        drawImage(ctx, "oj/atcoder.png", nx, ny-30, 40, 40);
        ctx.fontWeight = "bold";
        ctx.fillStyle = AtcoderTiers[atcoderTier][1];
        drawNormalText(ctx, atcoderId, nx+50, ny);
        if (atcoderTier !== 0) {
            let len = ctx.measureText(atcoderId).width;
            drawNormalText(ctx, ` (${AtcoderTiers[atcoderTier][0]})`, nx+50+len, ny);
        }
    }
};
