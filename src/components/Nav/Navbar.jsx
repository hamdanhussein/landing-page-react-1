import React from 'react';
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Menu,
  MenuItem,
  Button
} from '../Styles/NavBar.styled';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Agency</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Contacts</MenuItem>
        </Menu>
        </Left>
        
        <Button>Join Today</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
