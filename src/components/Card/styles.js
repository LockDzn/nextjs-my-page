import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #00cdff;
  color: #fff;
  max-width: 20rem;
  border-radius: 8px;

  padding: 1rem;

  margin: 1rem;

  img {
    width: 285px;
    border-radius: 8px;
  }

  strong {
    font-size: 1.4rem;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
  }

  .tools {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    strong {
      font-size: 1rem;
    }
  }

  .buttons {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;

      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }

    .demo {
      border: solid 1px #fff;
      border-radius: 4px;
      padding: 0.2rem;

      transition: all 0.2s ease;

      &:hover {
        background: #fff;
        color: #5f5f5f;
        font-weight: normal;
      }
    }

    .source {
      border: solid 1px #fff;
      border-radius: 4px;
      background: #fff;
      color: #5f5f5f;
      font-weight: normal;
      padding: 0.2rem;

      transition: all 0.2s ease;

      &:hover {
        background: transparent;
        font-weight: bold;
        color: #fff;
      }
    }
  }
`
