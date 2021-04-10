import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export function Menu() {
  return (
    <Container>
      <img src={logoImg} alt="Bella Olonge" />

      <ul>
        <li>
          <a href="#Home" className="active">Home</a>
        </li>
        <li>
          <a href="#Product">Product</a>
        </li>
        <li>
          <a href="#Faq">Faq</a>
        </li>
        <li>
          <a href="#Contact">Contat</a>
        </li>
      </ul>
    </Container>
  )
}