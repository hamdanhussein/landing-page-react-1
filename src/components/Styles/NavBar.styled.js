import styled from 'styled-components';
// import { Link as LinkRouter } from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'

export const Container = styled.nav`
 
  height: ${props => (props.toggle ? '100vh' : '50px')};
  background-color: ${props => props.toggle ? '#850e35' : '#fff'};
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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

export const Logo = styled(LinkScroll)`
  font-weight: 800;
  font-size: 20px;
  padding-left: 30px;
  color: #03045e;
  cursor: pointer;
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

export const Link = styled(LinkScroll)`
  font-size: 18px;
  font-weight: 800;
  margin-right: 30px;
  color: #000;
  cursor:pointer;

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
    /* display:none; */
    display: ${'none' || (props => props.close && 'none')};
  }
`;


export const ExtendedLink = styled(LinkScroll)`
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
