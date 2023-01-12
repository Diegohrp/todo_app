import { css, keyframes } from 'styled-components';

const Anim = keyframes`
0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

const loadingAnim = (
  time = '3s',
  type = 'ease-in-out',
  loop = 'infinite'
) =>
  css`
    animation: ${time} ${Anim} ${type} ${loop};
  `;

export { loadingAnim };
