import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  @media only screen and (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

export const Left = styled.div`
  display: none;

  /* @media only screen and (max-width: 1280px) {
    height: auto;
  
   } */

  @media only screen and (min-width: 1025px) {
    display:block;
    width: 50%;
    height: 100vh;
    position: relative;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* width: 100%;
  position:absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0; */

  display: ${props => props.open && 'none'};

  /* @media only screen and (max-width: 1280px) {
     margin-left:0;
  
   } */
`;

export const Video = styled.video`
  display: ${props => !props.open && 'none'};
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  @media only screen and (max-width: 768px) {
    width: 98%;
  }
`;

export const Right = styled.div`
  width: 98%;
  margin: auto;
  padding: 50px 0;

  @media only screen and (min-width: 468px) {
    width: 70%;
  }

  @media only screen and (min-width: 1025px) {
    width: 50%;
    padding-right: 30px;
    padding-top:20px;
  }
`;

export const Wrapper = styled.div`
  /* padding: 50px 30px 50px 0;
  */
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 55px;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const Desc = styled.p`
  font-size: clamp(1.25rem, 0.32vw + 1.05rem, 1.33rem);
  margin-top: 20px;
  color: #3a506b;
`;

export const ButtonText = styled.span`
  margin-left: 5px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  right: 5px;
  border: none;
  border-radius: 5px;
  top: 30%;
`;
