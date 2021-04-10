import spotlightImg1 from '../../assets/spotlight-image1.svg';
import spotlightImg2 from '../../assets/spotlight-image2.svg';
import { Container } from './styles';


export function Spotlight() {
  return (
    <Container>
      <img src={spotlightImg1} alt="" />
      <img src={spotlightImg2} alt="" />
    </Container>
  );
}