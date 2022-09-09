import React, { useState } from "react";
import { Container } from "../../components/grid-layout";
import {
  TestimonialWrapper,
  ImageRoundedCard,
  Inner,
  ImageBox,
} from "./styles/testimonial.styles";
import Img2 from "../../assets/images/img-2.png";
import Reviews from "./reviews";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Testimonials = () => {
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
      delay={0}
      animateIn="fadeIn"
    >
      <TestimonialWrapper>
        <Container>
          <Inner>
            <Reviews show={show}/>
            <ImageBox>
              <ImageRoundedCard show={show}>
                <img src={Img2} alt={"img-3"} />
              </ImageRoundedCard>
            </ImageBox>
          </Inner>
        </Container>
      </TestimonialWrapper>
    </AnimationOnScroll>
  );
};

export default Testimonials;
