import styled from "styled-components";


export const Container= styled.div`
 padding: 20px;
 margin-right: 50px;
 -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
  box-shadow:  0px 0px 17px -11px rgba(0,0,0,0.58);
  background-color: white;
  border-radius: 10px;
  display:flex;
  flex-direction:column;
  align-items:center;


  -webkit-transition: transform 0.3s 0s ease-in;
  -moz-transition: transform 0.3s 0s ease-in;
  -o-transition: transform 0.3s 0s ease-in;
  transition: transform 0.3s 0s ease-in;

  :hover {
    transform:scale(1.1);
  
  }
`

export const PriceContainer= styled.div`
display:flex;
align-items:center;
`

export const Price= styled.span`
font-weight: 700;
font-size: 50px;
`
export const Type= styled.button`
 padding: 10px;
 margin:10px 0;
 border: 1.5px solid crimson;
 color: crimson;
 background-color: white;
 border-radius: 20px;
`


export const List= styled.ul`

`

export const ListItem= styled.li`
 margin: 30px 0;
`

