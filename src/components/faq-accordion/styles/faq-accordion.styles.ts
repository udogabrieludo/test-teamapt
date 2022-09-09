import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'



export const Container = styled.div`
display:flex;
flex-direction:column;
position: relative;
width:100%;
gap: 10px;
max-width: 500px;
margin: auto;
margin-top:3rem;
;
`

export const Inner = styled.div`
width:100%;

`


export const TitleWrap = styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content:space-between;
height: 50px;
padding-top: 1rem;
width:100%;
font-size: 1.3rem;
text-transform:capitalize; 
border-top: 1px solid ${Color.gray};
color: ${Color.purple100};
line-height: normal;
font-weight: 600;
svg{
    cursor: pointer;
  
}


@media (max-width:600px){
    font-size: 1rem;
}
`

export const Content = styled.div`
padding: 1rem 0;
color: #5d5d5d;
width:100%;
font-size:1.1rem;

`