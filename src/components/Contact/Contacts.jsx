import React from 'react';
import { ContactButton } from '../Styles/Buttons.styled';
import {
  TextArea,
  Input,
  AddressContainer,
  Container,
  FormContainer,
  LeftForm,
  RightForm,
  Wrapper,
  Form,
  Title,
  AddressItem,
  Text,
} from '../Styles/Contact.styled';
import ContactItem from './ContactItem';
import { MdPhone, MdLocationOn, MdEmail } from 'react-icons/md';
import { contactAnimation } from '../Animation/Animation';
import { motion } from 'framer-motion';

const smallScreen  = window.screen.width <= 480 ? true : false;

const AddressItems = [
  {
    icon: <MdLocationOn fontSize='20px' color='crimson' />,
    text: '123 IT Park, Cebu, Philippines',
  },
  {
    icon: <MdPhone fontSize='20px' color='crimson' />,
    text: '+63 32 480-8990',
  },
  {
    icon: <MdEmail fontSize='20px' color='crimson' />,
    text: 'contact@agency.com',
  },
];
const Contact = () => {

 

  return (
    <Container>
      <Wrapper
        as={motion.div}
        variants={contactAnimation}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch{' '}
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Your Message' />
              <ContactButton
                as={motion.button}
                whileHover={{
                  backgroundColor: '#caf0f8',
                  outline: '#caf0f8',
                  outlineStyle: 'solid',
                  outlineColor: '#03045e',
                  outlineWidth: '2px',
                  color: '#03045e',
                }}
                transition={{ type: 'tween', ease: 'backIn' }}
              >
                Submit
              </ContactButton>
            </RightForm>
          </Form>
        </FormContainer>

        <AddressContainer>
          {AddressItems.map((item, i) => (
            <ContactItem key={i} item={item} />
          ))}
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
