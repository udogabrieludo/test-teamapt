import styled from 'styled-components'
import { Color } from '../../../assets/theme';

type Props = {
    disabled?: boolean;
    width?:string;
    variant?:string;
    height?:string;
    color?:string;
    borderColor?:string;
    size?:string,
    noborder?:boolean;
    align?:string;
    gap?:string;
    margin?:string;
    weight?:string;
}

export const ButtonContainer = styled.button<Props>`
display:flex;
justify-content:center;
align-items:center;
background:${({variant})=>variant ? variant: Color.orange};
cursor:${({disabled})=>disabled? 'not-allowed': 'pointer' };
width:${({width})=>width? width: '100%'};
height:${({height})=>height? height: '55px'};
color: ${({color})=>color ? color:`${Color.default}`};
border:none;
font-size:${({size})=>size ? size: '1rem'};
border-radius:30px;
font-weight:${({weight})=>weight};
transition: background-color .5s linear;
border:${({borderColor,variant, color,noborder})=>color ? `1px solid ${noborder? 'transparent':borderColor?borderColor:color}`: variant ? `1px solid ${variant}`:`1px solid ${Color.orange}`};
gap:.2rem;
&:hover {
background:${({color})=>color ? 'transperent': Color.orange100} ;
color: ${({color,variant})=>color?color:variant ? variant: Color.default};
};
`

export const Group= styled.div<Props>`
display: flex;
align-items: center;
justify-content:${({align})=>align};
width:${({width})=>width? width: '100%'};
gap:${({gap})=>gap? gap:'.5rem'} ;
flex-wrap: wrap;
margin:${({margin})=>margin};
`
