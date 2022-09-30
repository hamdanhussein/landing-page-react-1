import styled, { css } from 'styled-components';

const FormAlignment = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Transition = css`
  -webkit-transition: 0.3s 0s ease-in;
  -moz-transition: 0.3s 0s ease-in;
  -o-transition: 0.3s 0s ease-in;
  transition: 0.3s 0s ease-in;
`;
export const Container = styled.div`
  
  width: 100%;
  height: 100%;
  
  margin-top: 20px;
  background: url('https://www.toptal.com/designers/subtlepatterns/uploads/triangle-mosaic.png');
  background-repeat: repeat;
`;

export const Wrapper = styled.div`
 
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  /* @media only screen and (max-width: 768px) {
    width: 100%;
  } */
`;

export const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1280px) {
    margin-top: 50px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.span`
  font-size: 20px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftForm = styled.div`
  ${FormAlignment}
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    height: 80%;
    margin-right: 0;
  }
`;

export const RightForm = styled.div`
  ${FormAlignment}
`;

export const Input = styled.input`
  width: 280px;
  padding: 18px;
  color: #0b132b;
  font-size: 15px;

  :focus-within {
    border-color: #ee6983;
    outline: none;
    ${Transition}
  }

  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 8px;
  }
`;

export const TextArea = styled.textarea`
  width: 280px;
  height: 80%;
  padding: 20px;

  :focus-within {
    border-color: #ee6983;
    outline: none;
    ${Transition}
  }

  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  margin: 60px;
  margin-top: 0;

  @media only screen and (max-width: 1024px) {
    text-align:center;
    margin: 20px;
  }
`;
