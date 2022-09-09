import styled from "styled-components/macro";
import { Color } from "../../../assets/theme";

export const CardWrapper = styled.div`
display: flex;
position: relative;
width: 32%;
flex: 0 0 32%;
justify-content: center;
flex-direction: column;
align-items: center;
overflow: hidden;
cursor: pointer;
.show-cart{
    position:absolute;
    width:15px;
    transition:1s ease;
    transform: translateX(50px);
    right:0;
    .cart-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: ${Color.orange};
        border-radius: 50%;
        position: relative;
        cursor:pointer ;
    };
    .like-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border: 1px solid ${Color.orange};
        border-radius: 50%;
        position: relative;
        cursor:pointer ;
        margin-top:.4rem;
    } 
}
&:hover{
   .show-cart{
    transform: translateX(-50px);
   }
}

`
export const Body = styled.div`
background:${Color.white};
width:100%;
height:300px ;
display:flex;
justify-content: center;
align-items: center;
padding:2rem 0;


`
export const Title = styled.div`
font-size:1.3rem;
color:${Color.purple100};
text-align:center ;
`
export const Text = styled.div`
color:${Color.gray};
text-align:center ;
padding:.5rem 0;
font-size:1.2rem;
`

export const Footer = styled.div`
padding:1.3rem;

`
