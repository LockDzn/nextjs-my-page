import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #1e1e29;
  color: #e1e1e6;

  max-width: 20rem;
  border-radius: 4px;
  border: 1px solid #2f2f2f;

  padding: 1rem;

  .image {
    width: 285px;
    border-radius: 4px;
  }

  .title {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .description {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.5rem;
  }

  .tools {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    strong {
      font-size: 0.8rem;
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
