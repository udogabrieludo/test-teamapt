import React from 'react'
import "animate.css/animate.min.css";
import { BrandFAQContainer, BrandIntroContainer, BrandStat, HeroContainer, Testimonials, TrendingProducts } from '../../container'
import { Navbar } from '../../components';


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
    </>
  )
}

export default Home