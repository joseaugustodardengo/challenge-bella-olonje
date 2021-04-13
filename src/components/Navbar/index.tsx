import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Hambuguer, Menu, MenuLink } from './styles';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <img src={logoImg} alt="Bella Olonge" />
      <Hambuguer onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hambuguer>

      <Menu isOpen={isOpen}>
        <MenuLink href="#Home" className="active">Home</MenuLink>
        <MenuLink href="#Product">Product</MenuLink>
        <MenuLink href="#Faq">Faq</MenuLink>
        <MenuLink href="#Contact">Contat</MenuLink>
      </Menu>

    </Container>
  )
};

