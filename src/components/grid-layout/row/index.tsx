import React from 'react'
import { RowProps } from '../type'
import { RowDiv } from './styles/row.styles'

const Row:React.FC<RowProps> = ({children,...restProps}) => {
  return (
    <RowDiv {...restProps}>{children}</RowDiv>
  )
}

export default Row