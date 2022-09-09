import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Color } from "../../../assets/theme";
import { FaqAccordion, Stack, Text } from "../../../components";
import { FaqData } from "../../../data";


const BrandContents = () => {
  return (
    
    <Stack
      padding={"0 0 0 6rem"}
      alignItems={"center"}
      width={"100%"}
      justifyContent={"center"} 
      maxWidth={"550px"}
    >
  <AnimationOnScroll
    animatePreScroll={true}
    initiallyVisible={true}
    animateOnce={true}
    duration={2}
     animateIn="animate__fadeInUp">
      <Stack mr={'2rem'}>
        <Text as={"span"} size={"3.2rem"} color={Color.purple100}>
          You have Questions{" "}
          <span className={'highlight'}>We have answers</span>.
        </Text>
        <FaqAccordion data={FaqData}/>   
      </Stack>
      </AnimationOnScroll>
    </Stack>
   
  );
};

export default BrandContents;
