import logoImg from '../../assets/logo.svg';
import twitterImg from '../../assets/twitter.svg';
import facebookImg from '../../assets/facebook.svg';
import instagramImg from '../../assets/instagram.svg';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      <img src={logoImg} alt="" />
      <div>
        <a href="#twitter">
          <img src={twitterImg} alt="" />
        </a>
        <a href="#facebook">
          <img src={facebookImg} alt="" />
        </a>
        <a href="#instagram">
          <img src={instagramImg} alt="" />
        </a>
      </div>
      <span>Copywright 2020 Bella Onojie.com</span>

    </Container>
  );
}