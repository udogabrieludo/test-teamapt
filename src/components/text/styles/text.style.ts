import styled from "styled-components/macro";

type textProps = {
    color?: string,
    size?: string,
    weight?: string,
    padding?: string;
    margin?: string;
    align?:string;
    width?: string;
    opacity?: string;
    bgColor?: string;
    cursor?:string;
    lineHeight?:string;
}

export const TextStyle = styled.div<textProps>`
display:flex;
align-items:center;
color:${({color})=>color};
font-size:${({size})=>size};
font-weight:${({weight})=>weight};
padding:${({padding})=>padding};
margin:${({margin})=>margin};
text-align:${({align})=>align};
max-width: ${({width})=>width};
opacity: ${({opacity})=>opacity};
background:${({bgColor})=>bgColor};
border-radius: 5px;
line-height:${({lineHeight})=>lineHeight} !important;
cursor:${({cursor})=>cursor};

`
