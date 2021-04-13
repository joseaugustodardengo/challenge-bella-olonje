import styled from 'styled-components'

export const Container = styled.section`
  width: 90%;
  max-width: 1880px;
  height: 80.6rem;
  margin: 0 auto;

  > div {
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 104.1rem;
    height: 52.5rem;
    margin: 0 auto;   
  }

  @media (max-width: 1024px) { 
    > div{
      width: 90%;      
    }     
  }

  @media (max-width: 768px) {  
    > div{
      width: 90%;      
    }            
  }

  @media (min-width: 320px) and (max-width: 425px) {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      img {
        order: 1;
      }
    }
  }
`

export const Content = styled.div`
  width: 56.8rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  h3 {
    color: var(--orange-color);
    font-size: 2.4rem;
    line-height: 3.6rem;
  }

  h2 {
    margin: 1rem auto;
    color: var(--dark-blue);
    font-size: 4rem;
    line-height: 5.7rem;
  }

  h4 {
    color: var(--secondary-text);
    font-size: 2.4rem;
    line-height: 3.8rem;
  }

  @media (max-width: 1024px) { 
    width: 50rem;

    h3 {
      color: var(--orange-color);
      font-size: 2rem;
      line-height: 3rem;
    }

    h2 {
      margin: 1rem auto;
      color: var(--dark-blue);
      font-size: 3.6rem;
      line-height: 5rem;
    }

    h4 {
      color: var(--secondary-text);
      font-size: 2rem;
      line-height: 3rem;
    }  
  }

  @media (max-width: 768px) {      
    width: 60rem;  

    h3 {
      color: var(--orange-color);
      font-size: 1.4rem;
      line-height: 2.6rem;
    }

    h2 {
      margin: 1rem auto;
      color: var(--dark-blue);
      font-size: 3rem;
      line-height: 4rem;
    }

    h4 {
      color: var(--secondary-text);
      font-size: 1.4rem;
      line-height: 2.8rem;
    }    
  }

  @media (min-width: 320px) and (max-width: 425px) {
    width: 90%;      
    margin: 30rem 0 2rem 0;

    h3, h2, h4 {
      text-align: center;
    }
  }
`