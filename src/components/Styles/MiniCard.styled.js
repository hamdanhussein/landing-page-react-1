import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  padding: 20px;
  display:flex;
  flex-direction:column;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
  box-shadow:  0px 0px 17px -11px rgba(0,0,0,0.58);
  align-items:center;
  -webkit-transition: transform 0.3s 0s ease-in;
  -moz-transition: transform 0.3s 0s ease-in;
  -o-transition: transform 0.3s 0s ease-in;
  transition: transform 0.3s 0s ease-in;

  :hover {
    transform:scale(1.2);
  
  }
`;

export const Text = styled.span`
margin-top: 10px;
text-align:center;
`
