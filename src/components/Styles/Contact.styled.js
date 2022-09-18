import styled, { css } from 'styled-components';



const FormAlignment = css`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Transition = css`
-webkit-transition:  0.3s 0s ease-in;
-moz-transition:  0.3s 0s ease-in;
-o-transition:  0.3s 0s ease-in;
transition:  0.3s 0s ease-in;
`
export const Container = styled.div`
  height: 90%;
  background: url("https://www.toptal.com/designers/subtlepatterns/uploads/triangle-mosaic.png");
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 50%;
`;

export const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:30px;
`;


export const Text = styled.span`
  font-size: 20px;
  margin-left: 10px;
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftForm = styled.div`
  ${FormAlignment}
  margin-right: 20px;
`;

export const RightForm = styled.div`
  ${FormAlignment}
`;

export const Input = styled.input`
  width: 200px;
  padding: 20px;
  color: #0b132b;
  font-size: 15px;

  :focus-within {
      border-color: #ee6983;
      outline:none;
     ${Transition}
     
  }
`;

export const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  :focus-within {
    border-color: #ee6983;
    outline:none;
    ${Transition}
}
`;



export const Title = styled.h1`
  margin: 60px;
  margin-top: 0;
`;
