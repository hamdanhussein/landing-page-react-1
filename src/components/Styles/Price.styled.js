import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

    @media only screen and (max-width: 1280px) {
        padding: 40px 20px;
      
    }
    
    @media only screen and (max-width: 768px) {
        flex-direction:column;
        padding:40px 0;
       
    }
`