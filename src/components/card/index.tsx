import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Color } from '../../assets/theme';
import { Body, CardWrapper, Footer, Title,Text } from './styles/card.styles'
import { CardProps } from './type';
import { FiHeart } from "react-icons/fi";


const Card = ({children,...restProps}:CardProps) => {
    return (
      <CardWrapper {...restProps}>
        {children}
        <div className="show-cart">
         <div className={'cart-icon'}>
         <HiOutlineShoppingBag size={20} color={Color.white} />
         </div>
        <div className={'like-icon'}>
        <FiHeart color={Color.orange} size={20}/>
        </div>
           
        </div>
      </CardWrapper>
    )
  }
  
  export default Card
  
  Card.Body = function CardBody({children,...restProps}:CardProps){
      return <Body {...restProps}>{children}</Body>
  }
  Card.Title = function CardTitle({children,...restProps}:CardProps){
    return <Title {...restProps}>{children}</Title>
  }
  Card.Text = function CardText({children,...restProps}:CardProps){
    return <Text {...restProps}>{children}</Text>
  }
  

  Card.Footer = function CardFooter({children,...restProps}:CardProps){
    return <Footer {...restProps}>{children}</Footer>
  }
  