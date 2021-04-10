import { Container, Content } from './styles';

interface SectionProps {
  position: 'first' | 'second';
  title: string;
  subtitle: string;
  content: string;
  picture: string;
}

export function Section({ position, title, subtitle, content, picture }: SectionProps) {
  return (
    <Container>
      {position === 'first' ?
        <>
          <img src={picture} alt="" />
          <Content>
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <h4>{content}</h4>
          </Content>
        </>
        :
        <>
          <Content>
            <h3>{title}</h3>
            <h2>{subtitle}</h2>
            <h4>{content}</h4>
          </Content>
          <img src={picture} alt="" />
        </>
      }
    </Container>
  );
}