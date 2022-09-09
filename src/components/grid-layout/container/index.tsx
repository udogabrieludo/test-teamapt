import React from 'react'
import { ContainerProps } from '../type'
import { ContainerDiv } from './styles/container.style'


const Container:React.FC<ContainerProps> = ({children, ...rest}) => {
  return (
    <ContainerDiv  {...rest}>{children}</ContainerDiv>
  )
}

export default Container