import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  section {
    padding: 0 5rem;
    width: 100%;
    min-height: 100vh;
  }

  .me {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 4rem;

    .profile {
      display: flex;
      align-items: center;

      gap: 1rem;

      .icon {
        width: 128px;
        height: 128px;

        border-radius: 50%;
      }

      .informations {
        .name {
          font-size: 32px;
        }

        .nickname {
          opacity: 0.8;
          font-size: 20px;
          font-weight: 200;
        }
      }
    }

    .description {
      p {
        font-size: 18px;
        word-spacing: -3px;
      }
    }

    .sociais {
      display: flex;
      gap: 1rem;

      .link {
        transition: all 300ms ease-in;

        img {
          width: 28px;
          height: 28px;
        }

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }

  .projects {
    h3 {
      font-size: 28px;
      margin-bottom: 1rem;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      gap: 4rem;
    }

    padding-top: 2rem;
    padding-bottom: 2rem;

    background: #111117;
    border-top: 1px solid #2f2f2f;
    border-bottom: 1px solid #2f2f2f;
  }

  .titlecolor {
    display: inline;
    background-image: linear-gradient(90deg, #00cdff, #89e8ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media only screen and (max-width: 700px) {
    .me {
      gap: 2rem;
      padding: 0 1rem;

      .profile {
        .icon {
          width: 78px;
          height: 78px;
        }

        .informations {
          .name {
            font-size: 28px;
          }

          .nickname {
            font-size: 18px;
          }
        }
      }

      .description {
        p {
          font-size: 16px;
          word-spacing: -3px;
        }
      }

      .sociais {
        justify-content: center;
        align-items: center;
      }
    }

    .projects {
      h3 {
        width: 100%;
        text-align: center;
      }
      .list {
        justify-content: center;
        align-items: center;
        gap: 2rem;
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;

  background: #111117;
  .credits {
    p {
      strong {
      }
    }
  }
`
