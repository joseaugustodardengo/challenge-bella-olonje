import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1880px;

  @media (min-width: 320px) and (max-width: 425px) {
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-left: auto;
    margin-right: auto;
  }
`
export const Content = styled.div` 
  width: 90%;
  max-width: 884px;
  display: flex;    
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  margin-top: 12.8rem;
  margin-bottom: 7.2rem;
  margin-left: auto;
  margin-right: auto;

  hr {
    width: 100%;
    background: #E4E4E4;
    border: 3px solid #E4E4E4;    
  }

  p {
    margin-top: 7.2rem;
    color: #000;
    opacity: 0.8;
    font-size: 4.4rem;
    line-height: 3.6rem;
    text-align: center;
  }  

  @media (min-width: 320px) and (max-width: 425px) {
    p {
      order: -1;
      font-size: 2.4rem;
      line-height: 3.6rem;
      text-align: center;
      margin-bottom: 5rem;
    }
  }
`