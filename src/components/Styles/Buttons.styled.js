import styled, { css } from 'styled-components';

const Button = css`
  background-color: #03045e;
  color: white;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const IntroButton = styled.button`
  ${Button}
  padding: 15px;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 18px;
`;

export const ServiceButton = styled.button`
  ${Button}
  width: 200px;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const FeatureButton = styled.button`
  ${Button}
  width: 160px;
  padding: 15px 20px;
  font-size: 18px;
  margin-top: 20px;
`;

export const PriceCards = styled.button`
  ${Button}
  font-size: 16px;
  padding: 15px; ;
`;

export const ContactButton = styled.button`
  ${Button}
  padding: 15px;
  margin-top: 20px;
  font-size: 18px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;
