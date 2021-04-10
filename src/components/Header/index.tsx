import { Content, TextContent, ButtonContent } from './styles';

export function Header() {
  return (
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
  );
}