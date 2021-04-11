import styled from 'styled-components';

interface ContentProps {
  img: string;
}

export const Content = styled.div<ContentProps>`
  height: 38.688rem;  
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover; 
`

export const TextContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20.375rem;
  max-width: 62.813rem;

  h3 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding-top: 4.5rem;
    text-align: center;
    color: var(--dark-white-color);
  }

  h1 {
    font-size: 3.625rem;
    line-height: 5rem;
    padding-top: 1.063rem;
    text-align: center;
    color: var(--white-color);
  }

  h4 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding-top: 1.25rem;
    text-align: center;
    color: var(--dark-white-color);
  }
`

export const ButtonContent = styled.div`
  margin: 3rem auto;
  width: 31.625rem;
  height: 4.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  button{
    background: transparent;
    width: 14.75rem;
    height: 100%;    
    padding: 1rem 0;
    border-radius: 1.875rem;
    border-color: var(--white-color);
    margin: 0 1.063rem;
    font-size: 1.5rem;
    
    &:first-child {
      background-color: var(--orange-color);
      border-color: transparent;
    }

    &:hover {
      border-color: transparent;
      color: var(--orange-color);
      background-color: var(--white-color);
    }
  }
`
