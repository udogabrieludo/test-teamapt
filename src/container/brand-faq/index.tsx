import React, { useState } from "react";
import { Container } from "../../components/grid-layout";
import {
  BrandFaqWrapper,
  ImageRoundedCard,
  Inner,
  ImageBox,
} from "./styles/brand-intro.styles";
import Img7 from "../../assets/images/img-7.png";
import BrandContents from "./brand-intro-contents";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BrandFAQContainer = () => {
  const [show, setShow] = useState(false);

  const handleShow = (visible: { [key: string]: boolean }) => {
    if (visible.inViewport) {
      setShow(true);
    } else if (visible.inViewport) {
      setShow(true);
    } else {
    }
  };

  return (
    <AnimationOnScroll
      animateOnce={true}
      afterAnimatedIn={handleShow}
      duration={0}
      offset={100}
      animateIn="fadeInDown"
    >
      <BrandFaqWrapper>
        <Container>
          <Inner>
            <ImageBox>
              <ImageRoundedCard show={show}>
                <img src={Img7} alt={"img-3"} />
              </ImageRoundedCard>
            </ImageBox>
            <BrandContents />
          </Inner>
        </Container>
      </BrandFaqWrapper>
    </AnimationOnScroll>
  );
};

export default BrandFAQContainer;
