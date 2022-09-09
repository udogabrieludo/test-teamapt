import React from "react";
import { Column, Container, Row } from "../grid-layout";
import {
  FooterDiv,
  Inner,
  FooterList,
  FooterWrapper,
  FooterListItems,
  FooterLogo,
  SocialIcons,
  CopyRight,
} from "./styles/footer.style";
import { FooterProps } from "./type";
import Text from "../text";
import { Link } from "react-router-dom";
import appLogo from "../../assets/images/logo-white.png";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import SampleProducts from "./footer-products";

const Footer = ({ children, ...restProps }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <SampleProducts />
      <Container>
        <Row>
          <Column>
            <FooterDiv {...restProps}>
              <Inner>
                <FooterList>
                  <FooterLogo>
                    <img src={appLogo} alt={"app-log"} />
                  </FooterLogo>
                  <Text as={"p"}>
                    Made with natures best ingredients-our products transparent
                    products transparent.
                  </Text>
                  <SocialIcons>
                    <RiFacebookFill size={25} />
                    <RiInstagramLine size={25} />
                    <RiTwitterFill size={25} />
                    <RiLinkedinBoxFill size={25} />
                  </SocialIcons>
                </FooterList>
                <FooterList>
                  <Text as={"h4"}>Company</Text>
                  <FooterListItems>
                    <Link to="#">
                      <Text as={"p"}>About</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Job</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Branding</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>News room</Text>
                    </Link>
                  </FooterListItems>
                </FooterList>

                <FooterList>
                  <Text as={"h4"}>Resources</Text>
                  <FooterListItems>
                    <Link to="#">
                      <Text as={"p"}>Colledge</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Support</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Safety</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>StreamKit</Text>
                    </Link>
                  </FooterListItems>
                </FooterList>

                <FooterList>
                  <Text as={"h4"}>Terms & Conditions</Text>
                  <FooterListItems>
                    <Link to="#">
                      <Text as={"p"}>Policy</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Faq</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Return & Delivery</Text>
                    </Link>
                    <Link to="#">
                      <Text as={"p"}>Tracking</Text>
                    </Link>
                  </FooterListItems>
                </FooterList>

                <FooterList>
                  <Text as={"h4"}>Subscribe</Text>
                  <FooterListItems>
                    <Link to="#">
                      <Text as={"p"}>Get 10% off your first order</Text>
                    </Link>
                  </FooterListItems>
                </FooterList>

                <FooterList>
                  <FooterListItems></FooterListItems>
                </FooterList>
              </Inner>
              <CopyRight>
                © {currentYear} Glow.com | All Rights Reserved
              </CopyRight>
            </FooterDiv>
          </Column>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
