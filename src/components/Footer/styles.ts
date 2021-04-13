import styled from 'styled-components';

export const Container = styled.footer`
  margin: 3.8rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 121rem;
  padding-bottom: 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 17rem;

    a img {
      margin: auto 1rem;
    }
  }

  span {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #5C5C5C;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3.8rem auto;
    
    > img {
      display: none;
    }
  }
`