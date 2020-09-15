import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export const IconFont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 2056025 */
    src: url('//at.alicdn.com/t/font_2056025_u5iul54dpan.eot');
    src: url('//at.alicdn.com/t/font_2056025_u5iul54dpan.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2056025_u5iul54dpan.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2056025_u5iul54dpan.woff') format('woff'),
    url('//at.alicdn.com/t/font_2056025_u5iul54dpan.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2056025_u5iul54dpan.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: 'iconfont' !important;
    font-size: normal;
    font-size: 16px;
  }
`

export const ShowTransition = createGlobalStyle`
  .show-enter {
    opacity: 0.01;
    transform: scale(0.9) translateY(50%);
  }
  .show-enter-active {
      opacity: 1;
      transform: scale(1) translateY(0%);
      transition: all 300ms ease-out;
  }
  .show-exit {
      opacity: 1;
      transform: scale(1) translateY(0%);
  }
  .show-exit-active {
      opacity: 0.01;
      transform: scale(0.9) translateY(50%);
      transition: all 300ms ease-out;
  }
`