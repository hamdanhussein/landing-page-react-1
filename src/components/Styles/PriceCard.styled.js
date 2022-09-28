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

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 25px;
   
  }
  
  }
`

export const PriceContainer= styled.div`
display:flex;
align-items:center;
`

export const Price= styled.span`
font-weight: 700;
font-size: 50px;

@media only screen and (max-width: 768px) {
  font-size: 30px;
}
`
export const Type= styled.button`
 padding: 10px;
 margin:10px 0;
 border: 1.5px solid crimson;
 color: crimson;
 background-color: white;
 border-radius: 20px;

 @media only screen and (max-width: 768px) {
  display:none;
 }
`


export const List= styled.ul`

`

export const ListItem= styled.li`
 margin: 30px 0;

 @media only screen and (max-width: 768px){
  margin: 10px;
  font-size: 12px;
 }
`

