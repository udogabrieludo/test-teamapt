import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Color } from "../../../assets/theme";
import { Stack, Text } from "../../../components";
import { statsData } from "../../../data";
import { StatsBox,StatsItem } from "../styles/brand-customer-stat.styles";

const BrandStatContents = () => {
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
        animateIn="animate__fadeInUp"
      >
        <Stack>
          <Text
            as={"span"}
            size={"3.5rem"}
            padding={"0 2rem 0 0"}
            color={Color.purple100}
          >
            We make going all natural{" "}
            <span className={"highlight"}>Beautiful</span>.
          </Text>
          <Text
            as={"p"}
            size={"1.1rem"}
            padding={"1rem 1rem 1rem 0"}
            color={Color.gray}
          >
            Made with nature's best ingredients-our products' transparent
            ingredient lists allow you to know.
          </Text>
        </Stack>


        <StatsBox>
          {statsData.map((item,i)=>(
            <StatsItem key={i} position={item.position}>
            <Text as={"p"} size={'.9rem'} 
               color={Color.purple100}
               weight={'600'}
               >
                 {item.title}
               </Text>
               <Text as={"p"} 
               color={Color.orange}
               size={'2.5rem'} padding={'.5rem 0 0 0'}>
               {item.value}
               </Text>
            </StatsItem>
          ))}       
        </StatsBox>
      </AnimationOnScroll>
    </Stack>
  );
};

export default BrandStatContents;
