import styled from 'styled-components'

export const Container = styled.div`
display:flex;
`

export const Left = styled.div`
width: 50%;
height: 100vh;
position:relative;

`

export const Right = styled.div`
width: 50%;
`

export const Wrapper = styled.div`
padding: 50px;
display:flex;
flex-direction:column;
`
export const Title = styled.h1`
font-size: 50px;
`

export const Desc = styled.p`
font-size: 20px;
margin-top: 20px;
color: #3a506b;
`

export const ButtonText = styled.span`
margin-left: 5px;
`
export const Image = styled.img`
width: 110%;
height: 100%;
margin-left: 50px;
display: ${props => props.open && 'none'}
`

export const Video = styled.video`
  display: ${props => !props.open && 'none'};
  height: 300px;
  position:absolute;
  top: 0;
 right: 0;
  bottom:0;
  margin: auto;
`;



export const CardContainer = styled.div`
 display:flex;
 justify-content:space-between;
 margin-top: 50px;
`


