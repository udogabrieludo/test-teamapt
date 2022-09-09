import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
    justifyContent?: string;
    show?:boolean;
    position?:string;
}

export const BrandStatWrapper = styled.div`

min-height:600px;
position:relative;
padding:3rem 0;
&:before {
    content:"";
    height:100%;
    width:75%;
    position:absolute;
    top:0;
    left:0;
    z-index:0;
    background: ${Color.orange200};
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


`
export const ImageRoundedCard = styled.div<Props>`
        height : ${({show})=>show ? '580px':'0'};
        width : ${({show})=>show ? '400px':'0'};
        background: ${Color.orange};   
        overflow: hidden;
        transition: width 1.8s, height 1.8s;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 50% 50% 50% 50%/30% 30% 30% 30%;
img{
    margin-bottom:-5rem;
}
     

`

export const ImageBox= styled.div`
width: 550px;
height: 600px;
display: flex;
align-items: center;
`

export const StatsBox= styled.div`
display: flex;
gap:30px;
margin-top:2rem;

`
export const StatsItem = styled.div<Props>`
position: relative;
width: 115px;
height: 180px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
position: relative;
padding:0 3rem;
text-align: center;
line-height:1.1;
z-index:1;
}

&:before {
content:" ";
position: absolute;
width: 100%;
height: 100%;
transform: ${({position})=>position ==='top'? `rotate(208deg)`: `rotate(28deg)`};
background: linear-gradient(to top, rgb(255 0 0 / 0%), rgb(255 255 255));
border-radius: 50% 50% 0% 00%/30% 30% 30% 30%;

}

`