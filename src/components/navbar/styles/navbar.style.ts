import styled from "styled-components";
import { Color } from "../../../assets/theme";


export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: background-color .5s linear;
  height: 5rem;
  z-index: 1;
  top: 0; 
  z-index: 99;
  position:sticky;
  background:${Color.default}; 

`;
export const NavLinkItem = styled.div`
  a{
    text-decoration:none;
    color:${Color.gray};
    font-weight:600;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${NavLinkItem} {
    @media (max-width: 768px) {
      display: none;
    }
  }
  img {
    cursor: pointer;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
 
`;

export const Cart = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
background: ${Color.orange};
border-radius: 50%;
position: relative;
.badge{
  display:flex;
  justify-content:center;
  align-items: center;
  height:20px;
  width:20px;
  font-size:.7rem;
  top:-5px;
  right:0;
  border-radius:50%;
  background: ${Color.purple};
  color:${Color.white};
  position: absolute;

}

`



