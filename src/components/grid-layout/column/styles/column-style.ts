import styled from 'styled-components';

type Props = {
  md?:string;
  sm?:string;
  xs?:string;
  xxs?:string;
}

export const ColumnDiv = styled.div<Props>`
display:flex;
width: ${({md})=>md ? md : '100%'};
flex:0 0 auto;

@media(max-width:992px){
    width: ${({md})=>md ? md : '100%'};
}
@media(max-width:768px){
    width: ${({sm})=>sm ? sm : '100%'};
}
@media(max-width:640px){
    width: ${({xs})=>xs ? xs : '100%'};
}
@media(max-width:360px){
    width: ${({xxs})=>xxs};
}

`