import styled from 'styled-components'


export const Container = styled.div`

background-color: #03045e;
color: lightgray;
display:flex;
justify-content:center;
`

export const Wrapper = styled.div`
padding: 30px 20px;
display:flex;
justify-content:space-between;
`

export const List = styled.ul`
padding: 0;
margin: 0;
list-style: none;
display:flex;
width: 50%;

`

export const ListItem = styled.li`
margin-right: 20px;
cursor:pointer;

:hover {
    color: gray;
}
`

