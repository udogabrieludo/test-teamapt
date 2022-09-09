import React, {useState} from 'react'
import { Container, Inner, TitleWrap, Content } from './styles/faq-accordion.styles';
import { IconContext } from 'react-icons'
import {FiMinus, FiPlus} from 'react-icons/fi'
import { FaqProps } from './type';
import { Color } from '../../assets/theme';




const FaqAccordion = ({data}:FaqProps) => {

  const [show, setShow ] = useState<number | null>(0);

    const toggle = (index:number) =>{
        if(show === index){
            return setShow(null)}

        setShow(index);
    }

    return (
        <IconContext.Provider value={{color:Color.purple100, size:"25px"}}>
            <Container>          
                 < >
                     {data.map((data:{[key:string]:string}, index:number)=>(
                         <Inner key={index}>
                             <TitleWrap onClick={()=> toggle(index)} key={index}>
                                <div>{data?.question}</div> {show ===index  ? <FiMinus /> : <FiPlus />} 
                             </TitleWrap>
                             {show === index && (
                                  <Content>
                                  {data?.answers}
                              </Content>
                             )}
                         </Inner>
                     ))}            
                 </>
            </Container>
        </IconContext.Provider>
    )
}

export default FaqAccordion
