import styled from 'styled-components';

interface ContentProps {
  img: string;
}

export const Content = styled.div<ContentProps>`
  height: 619px;  
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;   

  @media (max-width: 768px) {   
    width: 100%;
  } 

  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    background-image:none;
  }
  
`

export const TextContent = styled.div`
  width: 90%;
  height: 32.6rem;
  max-width: 100.5rem;  
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2.4rem;
    line-height: 3.6rem;    
    text-align: center;
    color: var(--dark-white-color);
  }

  h1 {
    font-size: 5.8rem;
    line-height: 8rem;
    text-align: center;
    color: var(--white-color);
  }

  h4 {
    font-size: 2.4rem;
    line-height: 3.8rem;
    text-align: center;
    color: var(--dark-white-color);
  }

  @media (max-width: 896px) {   
    width: 100%;

    h3 {
      font-size: 3rem;
      line-height: 4.8rem;   
      text-align: center;
      color: var(--dark-white-color);      
    }

    h1 {
      font-size: 4rem;
      line-height: 5rem;
      text-align: center;
      color: var(--white-color);
    }

    h4 {
      font-size: 3rem;
      line-height: 4.8rem;
      text-align: center;
      color: var(--dark-white-color);
    }
  }

  @media (max-width: 768px) {      
    width: 60rem;

    h1 {
      margin: 1rem auto;
    }    
  }

  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;

    h3 {
      font-size: 1.6rem;
      line-height: 2.4rem;   
      text-align: center;
      color: var(--secondary-text);      
    }

    h1 {
      font-size: 3.6rem;
      line-height: 4.2rem;
      text-align: center;
      color: var(--dark-blue);
    }

    h4 {
      font-size: 2.4rem;
      line-height: 3.8rem;
      text-align: center;
      color: var(--secondary-text);
    }
  }
`

export const ButtonContent = styled.div`
  margin: 3rem auto;
  width: 50.6rem;
  height: 6.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  button{
    background: transparent;
    width: 23.6rem;
    height: 6.8rem;    
    padding: 1.6rem 0;
    border-radius: 3rem;
    border-color: var(--white-color);
    margin: 0 1.063rem;
    font-size: 2.4rem;
    line-height: 3.6rem;
    
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

  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin: 0.5rem 0;

      &:last-child {
        border-color: var(--orange-color);
        color: var(--orange-color);
      }
    }
  }

`
