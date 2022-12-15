### Build

#### db objects (thinking):

- aside-image [{}{}{}]\* props using db?

- new-post {[]}
  - {h3 /title}, \*?
  - {h4 /highlight},
  - {img, imgsource, alt, figcaption},
  - {paragraphs /[]}

#### props para darkmode? (nope)

- [x] isDark é uma prop em Navbar.vue, boolean
- [x] isDark recebe false em App.vue
- [x] Trazer botão de .lightMode para App.vue e no methods usar um if/else pra alterar a classe dinamicamente

~~O método que troca fica em navbar ou em app?~~

~~Em App.vue vai uma função que observa isDark e adiciona ou remove classe usando getElement/querySelector, ou~~

~~Em App.vue vai um v-if/v-else que observa isDark e usa a div#app com a classe correspondente, ou~~

#### New content

components forms:

- [_] environment
- [_] services
- [_] faq

- [_] submit evento to json-server data

### Styles

#### Colors to var (light set)

/_bg navbar/h1/h2/h3_/
--bg-titles: #83895D;

/_bg h4_/
--bg-sub: #8886;

/_text navbar, h1, h2, h3_/
--txt-titles: ##f3f7e0;

--bg-body: gradient; linear-gradient(90deg, # 0%, #) 1%, # 99%, # 100%);
--bg-main-content: #fff;

--bg-hover: #dde3bdaa
--txt-hover: #324028;

--txt-color: #1D2618;

--shaddow-button: -1px 1px 5px #2d3d2585; /using
--shadow-main: -2px 2px 10px rgb(0 0 0 / 50%);

--shaddow-titles: -1px 1px 5px #2d3d2585; /set all\*\*
--shaddow-box: -1px 1px 5px #2d3d2585;

#### Colors to var (dark set)

--bg-titles: #1D2618; //no change?
--txt-titles: ##f3f7e0; //+ bg body?

--bg-hover: #4e7367cc
--bg-main-content: #000;
--bg-body: gradient; linear-gradient(90deg, # 0%, #) 1%, # 99%, # 100%);
--shaddow-button: -1px 1px 5px #2d3d2585; /using
--main-shadow: -2px 2px 10px rgb(0 0 0 / 50%);

#### SEO

invert h4 with h5 (and h5 to h4)

- [x] aside
- [_] main

set width for all images

- [_] ...

set alt for all images

- [_] ...

change svg to png compressed

- [_] ...

create png (compressed)

- [_] base link
- [_] docs link

/ use
nav a a:hover {
color: ##324028;
background: #dde3bdaa;
border: 1px double var(--bg-color);
border-radius: 0.75rem;
padding: 0.5em;
}
