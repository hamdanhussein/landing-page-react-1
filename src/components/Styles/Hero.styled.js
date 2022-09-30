import styled from 'styled-components';

export const Container = styled.div`
  // height: calc(100vh - 50px);

  width: 90%;
  margin: auto;
  height: auto;
  padding: 100px 0;

  @media only screen and (min-width: 468px) {
    width: 70%;
  }

  @media only screen and (min-width: 1025px) {
    width: 90%;
    height: 100%;
    display: flex;
    padding: 0;
    align-items: center;
  }

`;

export const Left = styled.div`

  width: 100%;


  @media only screen and (min-width: 1025px) {
    width: 50%;
    margin-top: 70px;
  }

`;

export const Title = styled.h1`
  font-size: clamp(3.05rem, 4.44vw + 0.21rem, 4.21rem);
 
`;

export const Desc = styled.p`

  font-size: clamp(1.25rem, 0.32vw + 1.05rem, 1.33rem);
  margin-top: 20px;

 
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
 
  align-items: flex-start;

`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1280px) {
    margin-top: 35px;
  }
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

  position: relative;

  display: none;

  @media only screen and (min-width: 1025px) {
    display: block;
    width: 50%;
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 250px;
  object-fit: cover;
`;
