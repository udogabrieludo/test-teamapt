import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Color } from "../../../assets/theme";
import { Stack, Text } from "../../../components";
import { dummyData } from "../../../data";

const BrandContents = () => {
  return (
    
    <Stack
      padding={"0 0 0 6rem"}
      alignItems={"center"}
      width={"100%"}
      justifyContent={"center"}  b
      maxWidth={"550px"}
    >
  <AnimationOnScroll
    animatePreScroll={true}
    initiallyVisible={true}
    animateOnce={true}
    duration={2}
     animateIn="animate__fadeInUp">
      <Stack>
        <Text as={"span"} size={"3rem"} color={Color.purple100}>
          The self care brand that's setting a new{" "}
          <span className={'highlight'}>standard clean </span> products.
        </Text>
        <Stack direction={"row"} pt={"2rem"} justifyContent={"space-between"}>
          {dummyData.map((data, i) => (
            <Stack maxWidth={"260px"} key={i}>
              <Text
                as={"h3"}
                size={"1.1rem"}
                padding={"1rem 1rem 1rem 0"}
                color={Color.purple100}
              >
                {data.title}
              </Text>
              <Text as={"p"} color={Color.gray}>
                {data.des}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
      </AnimationOnScroll>
    </Stack>
   
  );
};

export default BrandContents;
