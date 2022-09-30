import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media only screen and (min-width: 768px) {
    /* padding: 100px 0; */
   
  }

`;

export const Left = styled.div`
  display: none;

  @media only screen and (min-width: 1025px) {
    width: 50%;
    display: flex;
    align-items: center;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Right = styled.div`
width: 80%;
margin: auto;
padding: 50px 0;
 
@media only screen and (min-width: 468px) {
    width: 70%;
  }

  @media only screen and (min-width: 1025px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px 50px 0;

  }
`;

export const Title = styled.span`
  font-size: clamp(3.05rem, 4.44vw + 0.21rem, 4.21rem);
  line-height: 1.2;
`;

export const Subtitle = styled.span`
  font-size:  clamp(1.56rem, 0.82vw + 1.04rem, 1.78rem);
  font-style: italic;
  color: #1c2541;
  margin-top: 30px;
`;

export const Desc = styled.p`
  font-size: clamp(1.25rem, 0.32vw + 1.05rem, 1.33rem);
  color: #3a506b;
  margin-top: 30px;
`;
