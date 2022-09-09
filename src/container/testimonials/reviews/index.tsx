import React from "react";
import { Color } from "../../../assets/theme";
import { Text } from "../../../components";
import { ReviewCard,ReviewInner } from "../styles/testimonial.styles";



const Reviews = ({show}:{show:boolean}) => {
  return (
    
      <ReviewCard show={show}>
         <ReviewInner>
          <blockquote>
         <Text as={"p"} size={"1.6rem"} color={Color.purple100}>
          The UK Jewellery awards is an event we always look
           forward to and we are so honoured to be recognised.         
        </Text> 

        <Text as={"p"} weight={'600'} size={"1.3rem"} padding={'2rem 0 .5rem 0'} color={Color.purple100}>
          The UK Jewellery          
        </Text> 
        <Text as={"p"} weight={'600'} size={"1rem"}  color={Color.gray}>
          Naperville USA        
        </Text> 
        </blockquote> 
          </ReviewInner>     
      </ReviewCard>
     

   
  );
};

export default Reviews;
