import styled from 'styled-components'

export const Header = styled.header`
  background: #00cdff;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #fff;
    font-size: 1.4rem;
  }

  .itens li {
    padding: 21px 20px;
  }

  .itens {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
  }

  .itens .title {
    font-weight: bold;
  }

  .resto {
    display: flex;
    justify-content: space-between;
  }

  .resto a {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 700px) {
    weight: 100%;

    h1 {
      font-size: 1rem;
    }

    .itens {
      margin: 0;
    }

    .itens li {
      padding: 21px 20px;
    }

    .resto {
      display: none;
    }
  }
`

export const Main = styled.main`
  display: grid;
`

export const SectionHome = styled.section`
  margin: 20% 15% 0 15%;

  .container {
    display: flex;
    justify-content: center;
  }

  .container .texts {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10%;
  }

  .container .texts h1 {
    display: inline;
    font-size: 64px;
  }

  .texts h1 .title-blue {
    filter: brightness(0);

    display: inline;
    background-image: linear-gradient(90deg, #056881, #00cdff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: colorCycle 8s ease-in-out infinite;
    /* color: #00CDFF; */
  }

  .container .texts p {
    font-weight: normal;
    font-size: 20px;
    width: 400px;
    display: flex;
    align-items: center;
  }

  .container img {
    width: 200px;
    height: 200px;
    animation: shadowColorCycle 8s ease-in-out infinite;
    box-shadow: 0px 8px 18px -6px #00cdff, 0px 12px 42px -4px #00cdff;
    border-radius: 254.5px;
  }

  @keyframes shadowColorCycle {
    0%,
    100% {
      box-shadow: none;
    }

    11% {
      box-shadow: 0px 8px 18px -6px #00cdff, 0px 12px 42px -4px #00cdff;
    }
  }

  @keyframes colorCycle {
    0%,
    55% {
      filter: brightness(0);
    }

    11%,
    33% {
      filter: none;
    }
  }

  @media only screen and (max-width: 700px) {
    .container {
      display: block;
    }

    .container img {
      display: block;
      margin: 0 auto;
    }

    .container .texts {
      display: block;
      margin: 0 auto;
      margin-top: 30px;
    }

    .container .texts h1 {
      display: block;
      font-size: 40px;
      text-align: center;
    }

    .container .texts p {
      width: 100%;
      text-align: center;
    }
  }
`

export const SectionPortfolio = styled.section`
  margin: 20% 0;
  background: #ededed;
  padding: 3rem 1rem;

  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    background: #00cdff;
    color: #fff;
    max-width: 20rem;
    border-radius: 8px;

    padding: 1rem;

    margin: 1rem;

    img {
      width: 280px;
      border-radius: 8px;
    }

    strong {
      font-size: 1.4rem;
      margin-top: 0.5rem;
    }

    p {
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-width: 700px) {
  }
`
