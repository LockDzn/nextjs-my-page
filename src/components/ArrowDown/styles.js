import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: arrow-movement 2s ease-in-out infinite;

  position: relative;
  top: 120px;

  svg {
    path {
      fill: none;
      stroke: #ffffff;
    }
  }

  @keyframes arrow-movement {
    0% {
      opacity: 0;
      transform: translate3d(0px, -20px, 0px);
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
