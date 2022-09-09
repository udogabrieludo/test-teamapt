import styled from "styled-components/macro";

type stackProps={
    width: string;
    padding: string;
    mr:string;
    pr:string;
    pt:string;
    pb:string;
    pl:string;
    direction: string;
    alignItems: string;
    justifyContent: string;
    gap:string ;
    minDirection:string;
    maxWidth?:string;
    flexWrap?:string;
}

export const StackWrapper= styled.div<stackProps>`
display: flex;
flex-direction:${({direction})=>direction ? direction : 'column'};
width:${({width})=>width? width: 'auto%'};
padding:${({padding})=>padding };
padding-top:${({pt})=>pt};
padding-right:${({pr})=>pr};
padding-bottom:${({pb})=>pb};
padding-left:${({pl})=>pl};
max-width:${({maxWidth})=>maxWidth };
align-items:${({alignItems})=>alignItems };
justify-content:${({justifyContent})=>justifyContent };
gap:${({gap})=>gap};
flex-wrap:${({flexWrap})=>flexWrap};
margin-right:${({mr})=>mr};

@media(max-width:768px){
    h1{
        font-size:1.3rem;
    }
flex-direction:${({minDirection})=>minDirection};
}
`