import { Content, TextContent, ButtonContent } from './styles';

interface FeaturedProps {
  title?: string;
  subtitle: string;
  content: string;
  picture: string;
}

export function Featured({ title, subtitle, content, picture }: FeaturedProps) {
  return (
    <Content img={picture}>
      <TextContent>
        <h3>{title}</h3>
        <h1>{subtitle}</h1>
        <h4>{content}</h4>
      </TextContent>

      <ButtonContent>
        <button type="button">Playstore</button>
        <button type="button">App store</button>
      </ButtonContent>

    </Content>
  );
}