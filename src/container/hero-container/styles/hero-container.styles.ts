import styled from "styled-components/macro";
import { Color } from "../../../assets/theme";


export const HeroWrapper = styled.div`
height:100%;

img{    
margin-bottom: -1rem;
}
span{
    color:${Color.purple}
}
p{
    line-height: 1.5;
    width:100%;
    max-width:420px;
    font-size:1.2rem;
    color:${Color.gray};
    margin:2rem 0;
}
`