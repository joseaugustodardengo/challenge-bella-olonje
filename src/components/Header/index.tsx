import logoImg from '../../assets/logo.svg';
import { Container, Content, TextContent, ButtonContent } from './styles';

export function Header() {
  return (
    <Container>
      {/* MENU NAVEGAÇÃO */}
      <nav>
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
      </nav>

      {/* DESTAQUE COM A IMAGEM  */}
      <Content>
        <TextContent>
          <h3>Food app</h3>
          <h1>Why stay hungry when you can order form Bella Onojie</h1>
          <h4>Download the bella onoje’s food app now on</h4>
        </TextContent>

        <ButtonContent>
          <button type="button">Playstore</button>
          <button type="button">App store</button>
        </ButtonContent>

      </Content>
    </Container>
  );
}