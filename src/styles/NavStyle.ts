import { css } from '@emotion/react';

export const navStyle = css`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const linkStyle = css`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #04D9FF;
  }
`;