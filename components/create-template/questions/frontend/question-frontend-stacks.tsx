import {observer} from "mobx-react";
import {
    StyledImg, StyledInputText, StyledLabel,
    StyledQuestion, StyledRecommend, StyledRecommends,
    StyledStacksImg,
    StyledStacksli,
    StyledStacksUl,
} from "../../../../styles/create-template.style";
import {FC, useState} from "react";
import {FrontendQuestionsStoreTypes} from "../../../../stores/frontend-questions.store";
import {FrontendStacks, StacksFilename, StacksFolder} from "../../../../utils/stacks.constant";
import {frontendRecommends, textToSearchText} from "../../../../utils/searchStacks";
const QuestionFrontendStacks: FC<FrontendQuestionsStoreTypes>  = observer(({store}) => {
    const [keyword, setKeyword] = useState<string>("");
    const [recommends, setRecommends] = useState<string[]>([]);
    const onChangeRecommends = (newKeyword: string) => {
        newKeyword = textToSearchText(newKeyword);
        setKeyword(newKeyword);
        const newRecommends = frontendRecommends(newKeyword);
        setRecommends(prevRecommends => newRecommends);
    };
    const onClickRecommend = (e:any, recommend:string) => {
        store.updateFrontendStacks(FrontendStacks.indexOf(recommend));
        setKeyword("");
        setRecommends(() =>[]);
    }

    const [dragStartIdx, setDragStartIdx] = useState<number>(-1);
    const onStackDragStart = (e: any, selectedIdx: number) => {
        setDragStartIdx(selectedIdx);
    };
    const onStackDragOver = (e: any) => {
        e.preventDefault();
    };
    const onStackDrop = (e: any, selectedIdx: number) => {
        store.updateByIdx(dragStartIdx, selectedIdx);
    };
    const onStackClick = (selectedIdx: number) => {
        store.updateByIdx(selectedIdx);
    };

    return (
        <>
            <StyledQuestion>
                프론트엔드 기술스택을 선택해주세요!
            </StyledQuestion>
            <StyledLabel>
                검색 혹은 클릭을 통해 선택할 수 있어요. <br />
                선택한 순서대로 표시되며, 드래그로 순서를 변경할 수 있고, 클릭하면 삭제됩니다. <br />
                <StyledInputText
                    margin="10px 0 0 0;"
                    type="text"
                    placeholder="HTML"
                    value={keyword}
                    onChange={(e) => {onChangeRecommends(e.target.value)}}
                    onBlur={() => {
                        setRecommends(() =>[]);
                    }}
                />
                {
                    keyword && !recommends && <StyledRecommends>
                        <StyledRecommend>
                            No Results Found
                        </StyledRecommend>
                    </StyledRecommends>
                }
                {
                    recommends && <StyledRecommends>
                        {
                            recommends.map((recommend, idx) => {
                                // @ts-ignore
                                return <StyledRecommend
                                    key={`recommend-${recommend}-${idx}`}
                                    onClick={(e) => onClickRecommend(e, recommend)}
                                    onMouseDown={(e)=>e.preventDefault()}
                                >
                                    <StyledImg
                                        src={`${StacksFolder}${StacksFilename[recommend]}`}
                                        alt={recommend}
                                        width="20px"
                                        height="20px"
                                    />
                                    {recommend}
                                    {store.frontendStacks[(FrontendStacks.indexOf(recommend))] ? " (selected)" : ""}
                                </StyledRecommend>
                            })
                        }
                    </StyledRecommends>
                }
            </StyledLabel>
            <StyledStacksUl>
                {
                    store.selectedFrontendStacks.length === 0 ? <>
                        현재 선택된게 없음
                    </>
                    : store.selectedFrontendStacks.map((selectedIdx, idx) => {
                            return <StyledStacksli
                                key={`frontend-stacks-${idx}-${selectedIdx}`}
                                onClick={()=>onStackClick(selectedIdx)}
                                onDragStart={(e) => onStackDragStart(e, selectedIdx)}
                                onDragOver={(e) => onStackDragOver(e)}
                                onDrop={(e)=>onStackDrop(e, selectedIdx)}
                            >
                                <img
                                    src={`${StacksFolder}${StacksFilename[FrontendStacks[selectedIdx]]}`}
                                    alt={FrontendStacks[selectedIdx]}
                                    title={FrontendStacks[selectedIdx]}
                                />
                            </StyledStacksli>
                        })
                }
            </StyledStacksUl>
            <StyledStacksImg>
                {
                    FrontendStacks.map((stacks, idx) => {
                        return <StyledImg
                            key={`checkbox-follows-${idx}`}
                            src={`${StacksFolder}${StacksFilename[stacks]}`}
                            alt={FrontendStacks[idx]}
                            onClick={() => store.updateFrontendStacks(idx)}
                            checked={store.frontendStacks[idx] > 0}
                            title={FrontendStacks[idx]}
                        />
                    })
                }
            </StyledStacksImg>
        </>
    )
});

export default QuestionFrontendStacks;
