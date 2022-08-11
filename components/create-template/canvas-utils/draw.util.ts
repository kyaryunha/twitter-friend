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

export const drawImage = (ctx:any, src:string, x:number, y:number, w:number, h:number) => {
    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, x, y, w, h);
    };
    img.src = src;
}