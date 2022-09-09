import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Container } from "../../components/grid-layout";
import Img6 from "../../assets/images/img-6.png";
import {
  BrandStatWrapper,
  ImageBox,
  ImageRoundedCard,
  Inner,
} from "./styles/brand-customer-stat.styles";
import BrandStatContents from "./brand-stat-contents";

const BrandStat = () => {
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
      <BrandStatWrapper>
        <Container>
          <Inner>
            <BrandStatContents />
            <ImageBox>
              <ImageRoundedCard show={show}>
                <img src={Img6} alt={"img-6"} />
              </ImageRoundedCard>
            </ImageBox>
          </Inner>
        </Container>
      </BrandStatWrapper>
    </AnimationOnScroll>
  );
};

export default BrandStat;
