import { Spotlight } from '../../components/Spotlight';
import { Header } from '../../components/Header';
import { Content } from './styles';
import { Section } from '../../components/Section';
import loginImg from '../../assets/login-image.svg';
import mealsImg from '../../assets/meals-image.svg';
import checkoutImg from '../../assets/checkout-image.svg';
import { Menu } from '../../components/Menu';

export function Homepage() {
  return (
    <div>
      <Menu />
      <Header />
      <Spotlight />
      <Content>
        <hr />
        <p>How the app Works</p>
      </Content>

      <Section
        position="first"
        picture={loginImg}
        title="Create an accouunt"
        subtitle="Create/login to an existing account to get started"
        content="An account is created with your email and a desired password"
      />

      <Section
        position="second"
        picture={mealsImg}
        title="Explore varieties"
        subtitle="Shop for your favorites meal as e dey hot."
        content="Shop for your favorite meals or drinks and enjoy while doing it."
      />

      <Section
        position="first"
        picture={checkoutImg}
        title="Checkout"
        subtitle="When you done check out and get it delivered."
        content="When you done check out and get it delivered with ease."
      />
    </div>
  );
}