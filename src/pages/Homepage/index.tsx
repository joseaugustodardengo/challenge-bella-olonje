import { Spotlight } from '../../components/Spotlight';
import { Header } from '../../components/Header';
import { Content } from './styles';

export function Homepage() {
  return (
    <div>
      <Header />
      <Spotlight />
      <Content>
        <hr />
        <p>How the app Works</p>
      </Content>
    </div>
  );
}