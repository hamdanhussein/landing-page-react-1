import styled, { css } from 'styled-components';

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0, 64% 0%, 54% 100%, 100% 100%);
  background-color: #850e35;
`;


export const FeatureShape = styled.div`
${Shape}
clip-path: polygon(0 0, 54% 0%, 33% 100%, 0 100%);
  background-color: #ee6983;`

  export const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #ffc4c4;`


  export const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
    background-color: #850e35;`
