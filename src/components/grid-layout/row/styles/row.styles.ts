import styled from 'styled-components/macro'

type Props = {
    direction?: string;

}

export const RowDiv = styled.div<Props>`
width:100%;
display:flex;
flex-wrap:wrap;
flex-direction:${({direction})=> direction ? direction : 'row'};
padding:2rem 0 0 0; 
justify-content:space-between;

` 