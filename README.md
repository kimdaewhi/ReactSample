# React 기초 내용 학습

### 1_ReactBasic
1. **react-dom 이란?**
2. **바닐라 JS와 React 컴포넌트 렌더링 차이 확인**
3. **babel 컴파일러 사용법**
4. **Component 개념 및 Fragment**
5. **react의 이벤트 리스너**

6. **기본 앱(App), 기본 Hook**
7. **커스텀 Hook**
8. **Hook의 호출 시점 파악하기**
9. **컴포넌트 스타일링**

### 2_ReactBasic
1. **Node.js를 이용한 react 개발 환경 세팅**
  * **Node.js 설치**
  * **react 앱 생성하기 `npm create-react-app [App 이름]`**
    - ⭐ App 이름 Naming Rules : 첫글자 대문자 x, 공백/특수문자 x
  * **필요한 경우 개발 도구 설치(eslint, prettier). 필수는 아니지만 권장 사항임.**
  * **prettier, eslint(확장 도구) 설치 및 적용 방법은 하단에**

2. **react App 구조 살펴보기**
3. **rfc(함수형 컴포넌트) 사용법, rcc(클래스형 컴포넌트) 사용법 및 두 컴포넌트 비교**
4. **Props 개념 및 Props 활용하기**
5. **Hook의 생명주기 확인하기**
6. **Component의 부모/자식 간 이벤트 호출 시점 확인**
7. **List, Key 사용법**
8. **Form 사용법**
9. **HOC 및 여러가지 Hook 사용하기(useRef, useContext, useReducer, useMemo 등)**
10. **메모이제이션(Memoization) 개념 및 useCallback 함수**



### 🙏🏻 필수 사항은 아니지만 사용이 매우 권장됨!!

#### eslint 설치 및 사용법
- 터미널에 eslint 패키지 설치 ``npm install eslint --save-dev``
- ESLint 설정 파일 생성(.eslintrc.json) 및 내용 입력
  ``
  {
		"env": {
		  "browser": true,
		  "es6": true
		},
		"extends": [
		  "eslint:recommended"
		],
		"parserOptions": {
		  "ecmaVersion": 2018
		},
		"rules": {}
	}
  ``
