import styled, { css } from 'styled-components';

const Button = css`
  background-color: #03045e;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: clamp(1rem, 0vw + 1rem, 1rem);
`;

export const IntroButton = styled.button`
  ${Button}
  padding: 15px;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 18px;

  @media only screen and (max-width: 768px) {
  
    /* font-size: 16px; */
    padding:12px;
  }
`;

export const ServiceButton = styled.button`
  ${Button}
  width: 150px;
  font-size: 20px;
  padding: 10px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    width: 150px;
    font-size: 18px;
    padding:12px;
  }
`;

export const FeatureButton = styled.button`
  ${Button}
  width: 160px;
  padding: 15px 20px;
  font-size: 18px;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    width: 150px;
    padding:12px;
  }
`;

export const PriceCards = styled.button`
  ${Button}
  font-size: 16px;
  padding: 10px; ;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const ContactButton = styled.button`
  ${Button}
  padding: 10px;
  margin-top: 20px;
  font-size: 18px;
  @media only screen and (max-width: 768px) {
    padding: 5px;
    font-size: 14px;
  }
`;
