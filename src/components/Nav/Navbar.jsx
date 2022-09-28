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

  return (
    <Container toggle={toggle}>
      <Wrapper
        as={motion.nav}
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 1.2 }}
      >
        <LeftContainer>
          <Logo toggle={toggle}>Agency</Logo>
        </LeftContainer>

        <RightContainer>
          <LinkContainer>
            <Link>Home</Link>
            <Link>Feature</Link>
            <Link>Services</Link>
            <Link>Pricing</Link>
            <Link>Contacts</Link>

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
        >
          <ExtendedLink>Home</ExtendedLink>
          <ExtendedLink>Feature</ExtendedLink>
          <ExtendedLink>Services</ExtendedLink>
          <ExtendedLink>Pricing</ExtendedLink>
          <ExtendedLink>Contacts</ExtendedLink>
        </ExtendedContainer>
      )}
    </Container>
  );
};

export default Navbar;
