## 기능요구사항

### 기획서

- 카카오 페이지의 구성은 좌측그림과 같은 내용을 구성한다.
- 디자인/레이아웃은 최근카카오페이지의 UI를 최대한 비슷하게 제작한다.

1. ‘웹툰' 버튼을 누를때만 콘텐츠를 보여준다.
   웹툰을 제외한 ‘홈',’웹소설' 등은 dummy 화면을 제공한다.
1. 두번째 카테고리의 모든 탭UI는 정상적으로 동작한다.
   즉, 현재의 카카오페이지와 동일하게 콘텐츠를 노출한다.
1. ‘요일' 카테고리가 노출되는 경우 요일별로 탭UI가 동작한다.
   1,2,3 에 노출되는 탭 UI는 모두 새로운 페이지의 링크로 이동하지 않고, 현재 화면에서 콘텐츠가 렌더링되어 노출된다.
1. 모든 이미지와 텍스트는 HTML에 하드코딩하지 않고 데이터로 메모리에 보관하고 있다가 필요한 시점에 렌더링에 사용된다.
   (서버와 통신을 할 필요가 없음)
1. 검색이나 로그인등 상단 영역은 UI만 노출하고 기능은 동작하지 않는다.

- 기획서에서 동적인 탭UI 기능은 개발하지 않고 정적인 HTML,CSS 화면 구성만 한다.

## 프로그래밍 요구사항

### HTML

- HTML는 용도에 맞는 tag를 찾아서 사용한다.
- HTML5 Layout 태그를 활용한다.

### CSS

- 모든 엘리먼트들은 가지런히 배치해야하고, 일정한 간격을 유지하도록 한다.
- 배치를 할때 flex 속성을 사용한다.

## 추가 요구 사항

### CSS

- [ ] Flexbox 사용법에 대해서 별도로 정리한다.

### git, github

- commit 단위를 작게 나눈다
- [ ] commit 로그를 작성하는 좋은 사례를 찾아본다
- 매일매일 git push 를 통해서 원격 저장소에 코드를 올린다.

## 추가학습거리

- [ ] HTML 시멘틱 태그에 대해서 알아본다.
- [ ] 웹접근성이 무엇인지 알아본다.
