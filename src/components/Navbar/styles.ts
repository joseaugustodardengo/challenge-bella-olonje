import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  max-width: 1880px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 15.6rem;
  margin:0 auto;  
  top: 0;
  left: 0;
  right: 0;  

  img {
    padding-left: 7rem;
  }
  
  @media (max-width: 768px) {
    img {
      width: 18.4rem;
      height: 10rem;
    }
  }  
`

export const Hambuguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding-right: 4rem;

  span {
    height: 0.2rem;
    width: 2.5rem;
    background-color: var(--secondary-text);
    margin-bottom: 0.4rem;
    border-radius: 0.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
  }  
`

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;    
  position: relative; 
  padding-right: 4rem;

  @media (max-width: 768px) {
    background: white; 
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  } 
`

export const MenuLink = styled.a`
  display: flex;
  margin-left: 9rem;
  list-style: none;
  padding: 1rem;
  align-items: center;
  transition: all 0.3s ease-in;
  
  &:last-child {
    border: 1px solid #000000;
    box-sizing: border-box;
  }   
  
  &:hover {
    color: var(--orange-color);
  }

`