import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
`;

export const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-weight: 800;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 800;
  color: gray;
  
  :hover {
    color: #03045e;
  }
  `

export const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: #850e35;
    color: white;
    font-weight: 800;
    border-radius: 10px;
    cursor:pointer;

    :hover {
      background-color: #03045e;
      border-color:  #03045e;
      -webkit-transition:  0.3s 0s ease-in;
      -moz-transition:  0.3s 0s ease-in;
      -o-transition:  0.3s 0s ease-in;
      transition:  0.3s 0s ease-in;

    }
`