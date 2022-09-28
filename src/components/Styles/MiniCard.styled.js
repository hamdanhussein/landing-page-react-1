import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  padding: 20px;
  display:flex;
  flex-direction:column;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
  box-shadow:  0px 0px 17px -11px rgba(0,0,0,0.58);
  align-items:center;

  @media only screen and (max-width: 468px) {
    width: 50px;
  }

`;

export const Text = styled.span`
margin-top: 10px;
text-align:center;

@media only screen and (max-width: 468px) {
  font-size: 14px;
}
`
