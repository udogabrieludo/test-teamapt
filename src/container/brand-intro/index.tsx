import React,{useState} from 'react'
import { Container } from '../../components/grid-layout'
import { BrandIntroWrapper,ImageRoundedCard, Inner } from './styles/brand-intro.styles'
import Img3 from '../../assets/images/img-3.png'
import AnimatedCard from './animated-card'
import BrandContents from './brand-intro-contents'
import { AnimationOnScroll } from "react-animation-on-scroll";



const BrandIntroContainer = () => {

const [show,setShow] = useState(false);

const handleShow=(visible: {[key: string]: boolean}) => {
  
    if (visible.inViewport) {
        setShow(true)
      }else if(visible.inViewport){
        setShow(true)
      }else{
        
      }
  
}

  return (
  
    <AnimationOnScroll
      
      animateOnce={true}
      afterAnimatedIn={handleShow}
      initiallyVisible={true}
      duration={0}
      offset={100}
      animateIn="fadeInDown">
    <BrandIntroWrapper>
      <Container>
       <Inner justifyContent={'flex-end'}>      
        <AnimatedCard />
      </Inner>
        <Inner >            
            <div style={{width:'550px', height:'600px',display:'flex', alignItems:'center'}}>
            <ImageRoundedCard show={show}>
               <img src={Img3} alt={'img-3'} />
            </ImageRoundedCard>
            </div>
            
            
             <BrandContents />     
        </Inner>
        
      </Container>
     
      </BrandIntroWrapper>
   
      </AnimationOnScroll>
  
    
  ) 
}

export default BrandIntroContainer