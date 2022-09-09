import styled from 'styled-components'
import { Color } from '../../../assets/theme'


type Props = {
    bgColor?:string
}

export const FooterWrapper = styled.div`
width:100% ;
background:${Color.purple};
color:${Color.white};

`

export const FooterDiv = styled.div`
width:100% ;
font-size:1.2rem;

`
export const Inner = styled.div`
display: flex;
width: 100%;
justify-content:space-between;
flex-wrap: wrap;
gap:5px ;
padding:4rem 0;
@media(max-width:640px){
justify-content: left;
}
`

export const FooterList = styled.div`
flex:0 0 16%;
&:first-child{
    flex:0 0 28%;
}
h4{
    padding-bottom:1rem;
}

svg{
    cursor: pointer;
    transition: all 250ms ease-in-out;
&:hover{
    transform: scale(1.2);
}
}
@media(max-width:768px){
flex:0 0 22%;
}

@media(max-width:640px){
&:first-of-type{
flex: 0 0 100%;
}
flex:0 0 30%;
justify-content: left;
}

@media(max-width:480px){
flex:0 0 45%;
}


`

export const FooterListItems  = styled.div`
a{
    text-decoration: none;
    color:${Color.white};
    p{
    padding-bottom:1rem;
    font-weight:400;
   
}
}


`
export const FooterLogo = styled.div`

`
export const SocialIcons = styled.div`
display: flex;
gap:20px;
margin-top:3rem;

`

export const CopyRight  = styled.div`

border-top: 1px solid ${Color.purple100};
width:40%;
padding:2rem;
text-align: center;
color:#77758e;
margin:0 auto;
`

export const FooterCardWrapper = styled.div`
display:flex;
justify-content:space-between;
margin-top:-8rem;
`

export const FooterCard = styled.div<Props>`
display:flex;
align-items:center;
justify-content:center;
height: 300px; 
flex: 0 0 24%; 
background: ${({bgColor})=>bgColor};
overflow: hidden;
img{
    object-fit: cover;
}

`