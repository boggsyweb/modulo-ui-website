import { keyframes, css } from '@emotion/react';

export const FadeIn = () =>
  css`
    animation: ${keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `} 0.2s ease-in-out;
  `;

export const FadeOut = () =>
  css`
    animation: ${keyframes`
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    `} 0.3s ease-in-out;
  `;
