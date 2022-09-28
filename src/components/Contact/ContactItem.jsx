import React from 'react'
import { AddressItem, Icon, Text } from '../Styles/Contact.styled'

const ContactItem = ({item}) => {

  const {icon, text} = item;
  console.log(item)
  return (
   
        <AddressItem>
          {icon}
           
            <Text>{text}</Text>
        </AddressItem>
   
  )
}

export default ContactItem