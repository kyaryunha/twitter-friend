import {createImage, ctxInit, drawImage, drawTitle} from "./draw.util";
import {MenuText} from "../../../utils";
import {FrontendStacks, StacksFilename, StacksFolder} from "../../../utils/stacks.constant";

type drawStacks = {
    ctx: any,
    x: number,
    y: number,
    title: string,
    color: string,
    menu: string,
    selectedStacks: number[],
};

export const drawStacks = async ({ctx, x, y, color, title, menu, selectedStacks}:drawStacks) => {
    let nx = x;
    let ny = y;
    ctxInit(ctx);
    drawTitle(ctx, `${title}`, nx, ny, color);
    ny += 50;
    let stacksArr:string[] = [];
    if (menu === MenuText.frontend) {
        stacksArr = FrontendStacks;
    }
    let cnt = 0;
    selectedStacks.map(async (selectedIdx: number, idx:number) => {
        let img = await createImage(`${StacksFolder}${StacksFilename[stacksArr[selectedIdx]]}`);
        drawImage(ctx, img, nx, ny,40, 40);
        nx += 45;
        cnt += 1;
        if (cnt % 15 === 0) {
            ny += 45;
            nx = x;
        }
    });
};
