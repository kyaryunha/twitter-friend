# Twitter Friend

## Introduction

트친소란 트위터에서 SNS 친구를 구할 때, 스스로를 소개하는 것이다.

사진 형태의 자기소개서와 올리는 경우가 많으며, 계정의 주제에 맞는 자기소개서 형식의 이미지를 다운 받아 직접 작성하는 방식이 널리 쓰인다. 

이미지를 편집하는 것은 그림판을 쓰기엔 불편하고 다른 프로그램을 쓰기엔 이미지 편집에 익숙하지 않은 사람들이 많다.

이에 입력을 통해 쉽게 트친소 이미지를 생성해 다운받을 수 있는 사이트를 만들었다. 

## Website URL

<https://twitter-friend.vercel.app/>

## Templates

계정의 주제에 따라 트친소 이미지의 형식도 달라진다.
이에 여러 주제에 맞는 템플릿을 만들고 있다.

템플릿마다 아래와 같은 정보를 적을 수 있다.
- 트친소(기본) 
  - 트위터 닉네임, 트위터 ID, 깃헙, 웹사이트1, 웹사이트2, 트윗 주요 콘텐츠, 좋아하는 것, 싫어하는 것, 소개글 
- 알고리즘 트친소
  - 트친소(기본) + 온라인 저지(백준, 코드포스, 앳코더)
- 프론트엔드 트친소 (제작 예정)
  - 트친소(기본) + 기술 스택 (변경 및 추가 가능성 있음)

## Development Stacks

- React(Next.js), MobX, Emotion, Canvas, Vercel, Typescript, Google Analytics
  
## How to run 

```bash
# install 
yarn install
# development run 
yarn dev
# production run
yarn run build
yarn start
```

## Authors

Development: twitter @ shinhyun_main

Idea: twitter @ horse_sensei
