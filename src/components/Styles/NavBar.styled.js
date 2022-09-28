import styled from 'styled-components';

export const Container = styled.nav`
 
  height: ${props => (props.toggle ? '100vh' : '50px')};
  background-color: ${props => props.toggle ? '#850e35' : '#fff'};

  @media only screen and (min-width: 769px) {
      background-color: #fff;
      height: 60px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 25px;
  display: flex;
 
 
 
  
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
`;

export const Logo = styled.h1`
  font-weight: 800;
  font-size: 20px;
  padding-left: 30px;
  color: ${props => props.toggle ? '#fff' : '#000'};

  @media only screen and (min-width: 769px) {
    color: #000;
  }

`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
`;


export const LinkContainer = styled.ul`
  display: flex;
`;

export const Link = styled.li`
  font-size: 18px;
  font-weight: 800;
  margin-right: 30px;
  color: #000;

  :hover {
    color: #669966;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;


export const ExtendedLink = styled.li`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 30px;
  color: #fff;

  :hover {
    color: #669966;
  }

`;

export const OpenNavLinks = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: grid;
    place-content: center;
    padding-right: 30px;
    
  }
`;
