import React from 'react'
import { LayoutWrapper } from './styles/layout.styles'
import { LayoutProps } from './type'

const Layout = ({children}:LayoutProps) => {
  return (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
  )
}

export default Layout