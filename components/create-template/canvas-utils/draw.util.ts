export const ctxFont = (ctx: any, num:number) => {
    ctx.font = `${num}px Pretendard Variable`
}

export const ctxInit = (ctx:any) => {
    ctxFont(ctx,25);
    ctx.fillStyle = "black";
    ctx.fontWeight = "normal";
}

export const drawTitle = (ctx:any, text:string, x:number, y:number, color:string) => {
    ctx.beginPath();
    ctxFont(ctx, 30);
    let len = ctx.measureText(text).width;
    ctx.fillStyle = color;
    ctx.rect(x-15, y-30, len+10, 38);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillText(text, x-10, y);
}

export const drawNormalText = (ctx: any, text:string, x:number, y:number, color?:string) => {
    ctx.beginPath();
    if (color) {
        ctx.fillStyle = color;
    }
    ctx.fillText(text, x, y);
}
export const createImage = (src:string):Promise<HTMLImageElement> => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => reject(err));
    img.src = src;
});

type WH = {
    w: number,
    h: number,
};
export const getWH = (img:HTMLImageElement, w:number, h:number):WH => {
    if (w === -1 && h === -1) {
        w = img.width;
        h = img.height;
    }
    if (w === -1) {
        w = h / img.height * img.width;
    }
    if (h === -1) {
        h = w / img.height * img.width;
    }
    return {w, h};
}

export const drawImage = (ctx:any, img:HTMLImageElement, x:number, y:number, w:number, h:number) => {
    ctx.drawImage(img, x, y, w, h);
}
