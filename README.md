# VSCode <-> Github 연동하기

https://github.com/kyuchung/nrcs.git

1. VSCode를 새로 시작

![Screenshot 2024-07-25 at 1 45 05 PM](https://github.com/user-attachments/assets/a26f8fc2-6a72-4884-ae78-498e05d9bd51)

2. Clone Git Repository 또는 F1 - Git Clone - Clone from Github을 선택

VSCode와 Github가 연동이 되어 있을 경우 연동된 목록이 나오거나, 그렇지 않을 경우 연동 진행

![스크린샷_2023-04-19_093839](https://github.com/user-attachments/assets/b1e72e83-4c58-40e0-b30e-5f13ee181a9e)

![스크린샷_2023-04-19_095544](https://github.com/user-attachments/assets/df6d9f65-5465-4317-b25b-d34cc7e47459)

계정 로그인 및 연동을 진행 후 kyuchung/nrcs 를 선택 후 원하는 디렉토리에 체크아웃 진행, 체크아웃 시에 작업할 브랜치를 yourname_develop으로 하거나

그렇지 않을 경우 아래와 같이 개발 작업용 branch를 VSCode 에서 생성진행

![Screenshot 2024-07-25 at 1 50 41 PM](https://github.com/user-attachments/assets/5899dec0-6219-4374-832a-6f0c998c034a)

![Screenshot 2024-07-25 at 1 50 57 PM](https://github.com/user-attachments/assets/9fbeb0dc-ea58-4014-a5ac-373b7aed2f8c)

origin/ 붙은 브랜치의 경우 원격이기 때문 Github를 기준으로 보고, 그렇지 않은 경우 본인의 로컬에 다운받은 브랜치이기 때문에 항상 최신화를 해 놓는 것이 중요하다

작업할 브랜치명 입력
![Screenshot 2024-07-25 at 1 56 24 PM](https://github.com/user-attachments/assets/9020c701-8238-4f5a-9383-fe92be23cdcb)

완쪽 하단에 현재 로컬에 작업중인 브랜치명 확인 및 "Publish Branch"를 선택하여 Github에 반영 진행
![Screenshot 2024-07-25 at 1 56 38 PM](https://github.com/user-attachments/assets/2df842d8-2301-406d-b6ee-d96fbdd097c8)

Github에 브랜치가 생성되었음을 확인 가능
![Screenshot 2024-07-25 at 1 59 06 PM](https://github.com/user-attachments/assets/181ef7be-08a0-4b88-a1d8-de9a3d1fa607)


작업진행중 소스 Commit 및 Merge
1. 수정된 소스 확인 및 수정 코멘트와 Stage로 진행 + 버튼 선택

![Screenshot 2024-07-25 at 2 02 03 PM](https://github.com/user-attachments/assets/b7f6a5c9-0383-49b5-adcc-a4f7a21eaa00)

![Screenshot 2024-07-25 at 2 02 11 PM](https://github.com/user-attachments/assets/467cbc23-57d6-45c1-91c6-f294add5373d)

![Screenshot 2024-07-25 at 2 02 28 PM](https://github.com/user-attachments/assets/1c5f5328-58bc-491e-b2df-9bf2bdcef44b)

![Screenshot 2024-07-25 at 2 02 42 PM](https://github.com/user-attachments/assets/b6049cce-5818-44e2-91ef-a522d2ebb9ae)

![Screenshot 2024-07-25 at 2 02 50 PM](https://github.com/user-attachments/assets/1eb3f939-0cd3-4f83-b183-65700a26485a)


2. Github 사이트로 이동 Pull request 작업 진행

![Screenshot 2024-07-25 at 2 03 15 PM](https://github.com/user-attachments/assets/9c6126cb-f1a6-41c8-b3d4-e016cc8364fe)

![Screenshot 2024-07-25 at 2 03 35 PM](https://github.com/user-attachments/assets/d95e5527-60b9-4187-b6c7-3c671600b172)


현재 작업을 진행하는 최종 타겟 브랜치는 main -> 최종 소스 반영 브랜치입니다. 본인이 작업한 브랜치를 main으로 결합시키는 절차 입니다.

아래와 같이 기존 소스가 작업한 브랜치의 경우 문제 없을 경우 아래의 절차로 머지가 성공합니다.

![Screenshot 2024-07-25 at 2 07 53 PM](https://github.com/user-attachments/assets/c41e9178-1378-4277-9124-85438c50a556)

![Screenshot 2024-07-25 at 2 08 06 PM](https://github.com/user-attachments/assets/9994363e-a479-40ef-b45d-3a6fd6e0ee86)

![Screenshot 2024-07-25 at 2 08 19 PM](https://github.com/user-attachments/assets/8d32c897-9cf9-4a2b-981a-66f6319e9f65)

중요! 작업을 진행하는 도중 main을 Pull 하여 작업진행중인 개발자들의 소스의 최신화를 진행하는 것이 중요합니다.

Pull From -> main 브랜치 선택하여 본인이 작업중인 소스와 최종화를 맞추고 Pull request를 통해 머지를 진행하는 것이 중요합니다.




# nrcs

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


vue3 + vite + pinia + axis + bootstrap5 + aggrid + 에디터 및 기타 콤포넌트

https://v3-docs.vuejs-korea.org/guide/typescript/overview.html

https://velog.io/@ahn970/Vue3-Pinia-Axios

https://ko.vitejs.dev/guide/env-and-mode

https://velog.io/@jishu/javascript-crypto-js%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-sha256-%EC%95%94%ED%98%B8%ED%99%94

https://icea.tistory.com/47







https://jasonwatmore.com/post/2022/07/25/vue-3-pinia-user-registration-and-login-example-tutorial#list-vue

https://stackblitz.com/edit/vue-3-pinia-registration-login-example?file=index.html

https://github.com/danilovl/vue3-examples/blob/master/package.json

ReadMe Modify Check
#   J U N G  
 