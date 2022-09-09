import React from "react";
import { Color } from "../../../assets/theme";
import { Container } from "../../grid-layout";
import { FooterCard, FooterCardWrapper } from "../styles/footer.style";
import img1 from "../../../assets/images/img-1.png"
import img8 from "../../../assets/images/img-8.png"
import img9 from "../../../assets/images/img-9.png"
import { AnimationOnScroll } from "react-animation-on-scroll";

const SampleProducts = () => {
  return (
    <Container>
       <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
      <FooterCardWrapper>
     
        <FooterCard bgColor={Color.lightBlue}         
        >
          <img src={img1} alt={'img-1'} />
        </FooterCard>
        <FooterCard bgColor={Color.orange}         
        >
           <img src={img8} alt={'img-8'} />
        </FooterCard>


      
        <FooterCard bgColor={Color.purple200}         
        >
           <img src={img9} alt={'img-4'} />
        </FooterCard>
      

       
       <FooterCard bgColor={Color.orange}         
        ></FooterCard>
       
      
      </FooterCardWrapper>
      </AnimationOnScroll>
    </Container>
  );
};

export default SampleProducts;
