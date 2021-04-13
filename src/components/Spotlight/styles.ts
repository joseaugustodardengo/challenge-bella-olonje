import styled from 'styled-components';

export const Container = styled.div`    
  display: flex;  
  align-items: center;
  justify-content: center;  
  width: 54.8rem;
  height: 64rem;
  margin: -10rem auto;

  &:nth-child(1) {
    margin-top: -10rem auto; 
  }  
  
  @media (min-width: 320px) and (max-width: 425px) {
    width: 100%;

    img {
      width: 50%;
    }
  }
  
`