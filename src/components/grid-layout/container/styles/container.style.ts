import styled from "styled-components/macro";

type Props = {
 fluid?:boolean,
 bgColor?:string,
 justifyContent:string;
 height?:string;
 borderRadius:Boolean,
 align:string,
 bgImage:string;
 margin: string,
 padding:string,
 minHeight:string,
 bgSize:string,
 bgImg:string,
 bgImgPosition:string,
}

export const ContainerDiv = styled.div<Props>`
display:flex;
flex-direction:column;
width:100%;
margin:${({margin})=>margin? margin:'0 auto'};
max-width:${({fluid})=> fluid ? '100%' : '1180px'};
padding:${({padding})=>padding?padding:'0 0.75rem'};

`