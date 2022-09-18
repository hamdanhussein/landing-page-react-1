import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 50%;
  height: 100vh;
  display:flex;
  align-items:center;

`;

export const Image = styled.img`
  width: 100%;
  height: 90%;
  margin-left: -50px;

  
`;

export const Title = styled.span`
  font-size: 70px;
  line-height: 1.2;
`;

export const Subtitle = styled.span`
font-size: 24px;
font-style: italic;
color: #1c2541;
margin-top: 30px;
`;

export const Desc = styled.p`
font-size: 20px;
color: #3a506b;
margin-top: 30px;`;



export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
