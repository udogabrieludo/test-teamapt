import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
    justifyContent?: string;
    show?:boolean;
}

export const BrandIntroWrapper = styled.div`

min-height:600px;
position:relative;
padding-bottom:5rem;
&:before {
    content:"";
    height:100%;
    width:65%;
    position:absolute;
    top:0;
    right:0;
    z-index:0;
    background: #f1e4ef;
}

`
export const Inner = styled.div<Props>`
display: flex;
position:relative;
z-index:1;
justify-content: ${({justifyContent})=>justifyContent};
.highlight{
color: ${Color.orange};
}

`
export const ImageCard = styled.div`
height: 150px;
background: ${Color.lightBlue};
width: 250px;
margin-top: -5rem;
border:4px solid ${Color.white};
.full-img{
    width:100%;
    height:100%;
    object-fit: cover;
}
.badge-text{
position:relative;
z-index:2; 
color:${Color.white}; 
font-weight:600;
margin-bottom:-1.5rem ;
};
.star-badge{
 display:flex; 
 align-items:center;
margin-left:-2.5rem;
margin-top:-2.5rem;
position:absolute;
animation: rotate 5s linear infinite;
@keyframes rotate {
  100% {transform: rotate(360deg);}
}
}
`
export const ImageRoundedCard = styled.div<Props>`
        height : ${({show})=>show ? '580px':'0'};
        width : ${({show})=>show ? '450px':'0'};
        background: ${Color.purple200};
        overflow: hidden;
        transition: width 1.8s, height 1.8s;
        margin:auto;
        border-radius: 45% 45% 0% 00%/30% 30% 30% 30%;

`