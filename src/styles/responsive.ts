import { css } from 'styled-components';

interface mobileProps {
  [key: string]: string | number;
}

export const mobile = (props: mobileProps) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
