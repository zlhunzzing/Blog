# HTML 문서 상단의 !DOCTYPE html 이란?

DOCTYPE은 문서 표준의 유형을 정의하기 위한 것이다. 웹 표준이 생겨나기 이전의 웹은 표준을 사용할 수 없었기 때문에 웹을 올바르게 표시할 수 있도록 브라우저는 새로운 표준 준수 사이트와 이전의 레거시 사이트를 다르게 처리하는 모드를 도입했다.

웹 브라우저의 엔진에는 호환 모드(quirks mode), 거의 표준 모드(almost standards mode), 표준 모드(standards mode)의 세 가지 방식이 존재한다. 호환 모드에서는 기존 방식으로 제작된 웹사이트들을 표현하기 위해 *네비게이터4(Navigator4: 넷스케이프에서 개발한 현재는 사라진 웹 브라우저)와 인터넷 익스플로러 5의 비표준 동작을 에뮬레이션(=복제ㆍ모방)한다. 완전 표준 모드(full standards mode; 이하 표준 모드)에서는 HTML과 CSS에 의해 웹페이지가 표시된다. 거의 표준 모드는 소수와 호환 모드 요소만 지원한다.

<!DOCTYPE html>은 HTML5에서 웹 페이지를 표준 모드로 렌더링한다는 의미이다. 다른 DOCTYPE을 사용하게 된다면 해당 페이지가 표준 모드가 아닌 호환 모드나 거의 표준 모드로 렌더링 될 수 있는 위험이 있다. DOCTYPE은 문서의 첫 부분에 작성해야 한다. 인터넷 익스플로러 9 또는 그 이전 버전에서는 DOCTYPE 이전에 주석 등 다른 무언가가 작성된 상태라면 해당 문서를 호환 모드로 렌더링하게 된다.

### - 참고문서

"문서 타입 정의" MDN, last modified: 2020년 12월 9일, https://developer.mozilla.org/ko/docs/Glossary/Doctype, accessed: 2022년 7월 22일

"호환 모드와 표준 모드" MDN, last modified: 2021년 7월 28일, https://developer.mozilla.org/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode, accessed: 2022년 7월 22일

<Comment />