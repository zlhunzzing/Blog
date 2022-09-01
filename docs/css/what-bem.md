# BEM이란?

BEM(Block, Element, Modifier)은 컴포넌트 기반 웹 개발 접근방식이다. UI를 독립적인 Block들로 나누는 방식으로, 복잡한 UI에서 쉽고 빠르게 인터페이스를 개발할 수 있고, 기존 코드를 재사용하기 편리하다.

## Block
블록은 재사용할 수 있는 기능적으로 독립적인 구성 요소이다. HTML에서 블록은 class 속성으로 표시된다.

- 블록 이름은 상태(어떻게 생겼는지 ㅡ red 혹은 big)가 아니라 목적(무엇인지 ㅡ menu 혹은 button)을 나타낸다.
```
<!-- 바른 예. `error`는 의미론적으로 사용되어짐 -->
<div class="error"></div>

<!-- 틀린 예. 외관을 설명하고 있음 --> 
<div class="red-text"></div>
```

## Element
엘리먼트는 별도로 쓸 수 없는 블록의 합성 부품이다.

- 엘리먼트 이름은 상태(어떤 유형, 어떻게 생겼는지 ㅡ red, big, etc.)가 아니라 목적(이게 무엇인지 ㅡ item, text, etc.)을 설명한다.
- 엘리먼트의 전체 이름 구조는 block-name__element-name이다. 엘리먼트 이름은 언더바 두 개(__)로 블록 이름과 구분된다.
```
<!-- 바른 예. 전체 엘리먼트의 이름 구조는 다음 패턴을 따름.
--> 
<form class="search-form">
    <div class="search-form__content">
        <!-- `search-form` 블록의 `input` 요소 -->
        <input class="search-form__input">
        <!-- `search-form` 블록의 `button` 요소-->
        <button class="search-form__button">Search</button>
    </div>
</form>

<!-- 틀린 예. 전체 엘리먼트의 이름 구조는 다음 패턴을 따르지 않음. --> 
<form class="search-form">
    <div class="search-form__content">
        <!-- 권장사항: `search-form__input` or
                    search-form__content-input` -->
        <input class="search-form__content__input">
        <!-- 권장사항: `search-form__button` or
                   `search-form__content-button` -->
        <button class="search-form__content__button">Search</button>
    </div>
</form>
```

## Modifier
모디파이어는 블록이나 엘리먼트의 모양, 상태 또는 동작을 정의하는 개체이다.

- 모디파이어 이름은 모양(어떤 크기, 어떤 테마 등 ㅡ size_s, theme_islands), 상태(어떻게 다른지 ㅡ disabled, focused) 및 동작(어떻게 동작하는가 또는 어떻게 사용자에게 반응하는가 ㅡ directions_left-top)을 설명한다.
- 모디파이어 이름은 대시(-)로 블록 또는 엘리먼트 이름과 구분된다.
- 모다파이어의 이름 구조는 다음 패턴을 따른다.
  - block-name_modifier-name
  - block-name__element-name_modifier-name
```
<!-- `search-form` 블록에는 `focused` Boolean 모디파이어가 있습니다. --> 
<form class="search-form search-form_focused">
    <input class="search-form__input">
    <!-- ` button` 요소에는 `disabled` Boolean 모디파이어가 있습니다. --> 
    <button class="search-form__button search-form__button_disabled">Search</button>
</form>
```

BEM을 사용함으로써 의미를 쉽게 파악하고, 블록 단위의 독립적인 구성을 통해 확장성 있게 개발할 수 있다.

### 참고문서

"Quick start" bem.info, https://en.bem.info/methodology/quick-start, accessed: 2022년 9월 1일

<Comment />