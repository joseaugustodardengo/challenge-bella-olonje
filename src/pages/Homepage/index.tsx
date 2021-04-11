import { Menu } from '../../components/Menu';
import { Featured } from '../../components/Featured';
import { Spotlight } from '../../components/Spotlight';
import { Section } from '../../components/Section';
import { Content } from './styles';
import loginImg from '../../assets/login-image.svg';
import mealsImg from '../../assets/meals-image.svg';
import checkoutImg from '../../assets/checkout-image.svg';
import headerImg from '../../assets/header-image.svg';
import footerImg from '../../assets/footer-image.svg';
import { Footer } from '../../components/Footer';

export function Homepage() {
  return (
    <div>
      <Menu />
      <Featured
        picture={headerImg}
        title="Food app"
        subtitle="Why stay hungry when you can order form Bella Onojie"
        content="Download the bella onoje’s food app now on"
      />
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

      <Featured
        picture={footerImg}
        subtitle="Download the app now."
        content="Available on your favorite store. Start your premium experience now"
      />

      <Footer />
    </div>
  );
}