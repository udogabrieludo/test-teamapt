import React from 'react'
import "animate.css/animate.min.css";
import { BrandFAQContainer, BrandIntroContainer, BrandStat, Clients, HeroContainer, Testimonials, TrendingProducts } from '../../container'
import { Footer, Navbar } from '../../components';


const Home = () => {
  return (
    <>   
    <Navbar />
    <HeroContainer />  
    <BrandIntroContainer />
    <TrendingProducts />
    <BrandStat />
    <BrandFAQContainer />
    <Testimonials />
    <Clients />
    <Footer />
    </>
  )
}

export default Home