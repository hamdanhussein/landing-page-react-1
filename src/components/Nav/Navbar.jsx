import React from 'react';
import {
  Container,
  Wrapper,
  Logo,
  OpenNavLinks,
  ExtendedContainer,
  ExtendedLink,
  LeftContainer,
  RightContainer,
  LinkContainer,
  Link,
} from '../Styles/NavBar.styled';
import { extendedNavbarAnimation } from '../Animation/Animation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdDehaze, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false)

  const closeMenu = () => {
    setToggle((click) => !click)
  }

  return (
    <Container toggle={toggle}>
      <Wrapper
        as={motion.nav}
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 1.2 }}
      >
        <LeftContainer>
          <Logo toggle={toggle} to="/" spy={true} smooth={true} offset={-100} duration={500}>Techly</Logo>
        </LeftContainer>
        <RightContainer>
          <LinkContainer>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
            <Link to="feature" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Feature</Link>
            <Link to="services" spy={true} smooth={true} offset={-50} duration={500}>Services</Link>
            <Link to="pricing" spy={true} smooth={true} offset={-50} duration={500}>Pricing</Link>
            <Link to="contacts" spy={true} smooth={true} offset={-50} duration={500}>Contacts</Link>

            <OpenNavLinks
              onClick={() => {
                setToggle(toggle => !toggle);
              }}
            >
              {toggle ? (
                <MdClose fontSize='30' color='#fff' />
              ) : (
                <MdDehaze fontSize='30' color='#000' />
              )}
            </OpenNavLinks>
          </LinkContainer>
        </RightContainer>
      </Wrapper>

      {toggle && (
        <ExtendedContainer
          as={motion.div}
          initial='hidden'
          animate='show'
          variants={extendedNavbarAnimation}
          close={click}
        >
          <ExtendedLink className='active' to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} >Home</ExtendedLink>
          <ExtendedLink to="feature" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}>Feature</ExtendedLink>
          <ExtendedLink to="services" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}>Services</ExtendedLink>
          <ExtendedLink to="pricing" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}>Pricing</ExtendedLink>
          <ExtendedLink to="contacts" spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu}>Contacts</ExtendedLink>
        </ExtendedContainer>
      )}
    </Container>
  );
};

export default Navbar;
