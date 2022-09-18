import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
//   padding: 20px;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  width: 60%;
  font-size: 50px;
`;

export const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

export const Info = styled.div`
  width: 60%;
  margin-top: 30px;
  display: flex;
  justify-content:space-between;
  align-items:center;
`;



export const Contact = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const Phone = styled.span`
  color: #f0667d;
  font-weight: 700;

`;

export const ContactText = styled.span`
  color: gray;
  margin-top: 10px;
`;

export const Right = styled.div`
  width: 40%;
`;


export const Image = styled.img`
  width: 100%;
 height: 100%;
 object-position: -305px 58px ;
 object-fit: cover;
`;


