import React from "react";
import { Button, Stack, Text } from "../../components";
import { Container, Row } from "../../components/grid-layout";
import glowImg from "../../assets/images/glow1.png";
import heroImg from "../../assets/images/herobanner-img.png";
import { HeroWrapper } from "./styles/hero-container.styles";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoCaretForwardOutline } from "react-icons/io5";
import { Color } from "../../assets/theme";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeroContainer = () => {
  return (
    <HeroWrapper>
      <AnimationOnScroll
        animatePreScroll={true}
        initiallyVisible={true}
        animateOnce={true}
        animateIn="animate__fadeInUp"
      >
        <Container>
          <Row>
            <Stack width={"39%"} justifyContent={"center"}>
              <Text as={"span"} size={"5rem"}>
                Let your skin
              </Text>
              <Stack direction={"row"} gap={".5rem"} alignItems={"center"}>
                <Text as={"span"} size={"5rem"}>
                  Going{" "}
                </Text>
                <img src={glowImg} alt="glow" width={"145px"} />
                <Text as={"span"} size={"5rem"}>
                  Out.
                </Text>
              </Stack>
              <Text as={"p"}>
                We want tot bring to the world through our products that very
                special feeling joy, healthy and positive energy.
              </Text>
              <Button.Group>
                <Button width={"150px"} onClick={() => {}}>
                  Show Now <HiArrowNarrowRight size={18} />
                </Button>
                <Button
                  width={"150px"}
                  onClick={() => {}}
                  weight={"600"}
                  borderColor={"none"}
                  variant={"transparent"}
                  color={Color.purple}
                >
                  <IoCaretForwardOutline size={20} /> How to use
                </Button>
              </Button.Group>
            </Stack>
            <Stack width={"60%"}>
              <img src={heroImg} alt={"hero-img"} width={"100%"} />
            </Stack>
          </Row>
        </Container>
      </AnimationOnScroll>
    </HeroWrapper>
  );
};

export default HeroContainer;
