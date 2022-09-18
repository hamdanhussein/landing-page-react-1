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
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";

const AddressItems = [
  {
    icon: <MdLocationOn fontSize='30px' color='crimson'/>,
    text: '123 IT Park Lahug, Cebu City, Cebu, Philippines',
  },
  {
    icon: <MdPhone fontSize='30px' color='crimson'/>,
    text: '+63 32 480-8990',
  },
  {
    icon: <MdEmail fontSize='30px' color='crimson'/>,
    text: 'contact@agency.com',
  },
];
const Contact = () => {
  return (
    <Container>
      <Wrapper>
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
              <ContactButton>Submit</ContactButton>
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
