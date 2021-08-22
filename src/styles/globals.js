import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono';
    background: #1e1e29;
    color: #e1e1e6;
  }

  li {
    list-style-type: none;
  }

  .blue-text-background {
    display: inline-block;
    background-image: linear-gradient(90deg, #00cdff, #89e8ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
