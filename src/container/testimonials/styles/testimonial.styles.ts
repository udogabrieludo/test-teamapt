import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type Props = {
    justifyContent?: string;
    show?:boolean;
}

export const TestimonialWrapper = styled.div`

position:relative;
padding-bottom: 5rem;
margin-bottom: 5rem;

`
export const Inner = styled.div<Props>`
display: flex;
position:relative;
justify-content: ${({justifyContent})=>justifyContent};
/* &::before{
content:"";
    position: absolute;
    height: 450px;
    background: ${Color.white};
    z-index: 0;
    width: 80%;
    top:0px;
    
} */

`


export const ImageBox = styled.div`
position:absolute;
width:400px; 
height:480px;
display:flex; 
align-items:center;
right:0;
z-index:1;

`
export const ImageRoundedCard = styled.div<Props>`
  height : ${({show})=>show ? '360px':'0'};
  width : ${({show})=>show ? '360px':'0'};
  background: ${Color.orange};
  overflow: hidden;
  transition: width 1.8s, height 1.8s;
  margin:auto;
  border-radius: 50%;
  border: 8px solid #e6e6e6;

  
`

export const ReviewCard = styled.div<Props>`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
min-height: 480px;
background: ${Color.white};
z-index: 0;
opacity: ${({show})=>show ? '1':'0'};
transition:  width 2s;
width : ${({show})=>show ? '80%':'0%'};
overflow: hidden;

p{
  opacity: ${({show})=>show ? '1':'0'}; 
  width : ${({show})=>show ? '100%':'0%'};
 
}







`
export const ReviewInner= styled.div`
padding:0 5rem;
width: 100%;
max-width:600px;
blockquote {
    font-size: 2.5em;
    line-height: 2.5em;
}
blockquote:before {
  content: open-quote;
}
blockquote:before {
  display: inline-block;
  vertical-align: bottom;
  color:${Color.orange};
  font-size: 8em;
  top: .2em;
  position: relative;
}
`