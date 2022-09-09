import React from 'react'
import { ImageCard } from '../styles/brand-intro.styles'
import Img1 from '../../../assets/images/img-1.png'
import star from '../../../assets/images/star.png'

const AnimateCard = () => {
  return (
    <ImageCard>
         <div className={'badge-text'}>New</div>
         <div className={'star-badge'}>
         <img  src={star} width={'110px'} alt={'img-1'} />
         </div>
        <img src={Img1} alt={'img-1'} className={'full-img'} />
    </ImageCard>
  )
}

export default AnimateCard