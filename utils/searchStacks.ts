import {FrontendStacks} from "./stacks.constant";

export const textToSearchText = (keyword: string):string => {
    return keyword.toLowerCase().replace(/ /gi, '').replace(/\./gi, '');
};

export const FrontendSearchResult:{
    [key: string]: string,
} = {
    "js": "Javascript",
    "ts": "Typescript",
    "scss": "SASS",
    "webassembly": "Wasm",
    "mui": "Meterial UI",
    "xr": "Web XR",
};
FrontendStacks.forEach((key:string) => {
    const searchKey = textToSearchText(key);
    FrontendSearchResult[searchKey] = key;
});

export const frontendRecommends = (keyword: string):string[] => {
    const recommendsArr:string[] = [];
    const recommendsSet = new Set<string>();
    const keyLen = keyword.length;
    if (keyLen === 0) return recommendsArr;
    Object.keys(FrontendSearchResult).forEach((targetKey:string) => {
        if (targetKey.slice(0, keyLen) === keyword) {
            recommendsSet.add(FrontendSearchResult[targetKey]);
        }
    });
    recommendsSet.forEach((recommend) => {
        recommendsArr.push(recommend);
    });
    return recommendsArr;
}
