import styled from 'styled-components';

export const Container = styled.footer`
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 75.6rem;
  padding-bottom: 2rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 10rem;

    a img {
      margin: auto 1rem;
    }
  }

  span {
    font-weight: 700;
    font-size: 0.75rem;
    color: #5C5C5C;
  }
`