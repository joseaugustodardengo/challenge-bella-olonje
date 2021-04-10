import styled from 'styled-components'

export const Container = styled.section`
  height: 50.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 35.5rem;
  height: 17.5rem;

  h3 {
    color: var(--orange-color);
    font-size: 1.5rem;
  }

  h2 {
    margin: 1rem auto;
    color: var(--dark-blue);
    font-size: 2.5rem;
  }

  h4 {
    color: var(--secondary-text);
    font-size: 1.5rem;
  }
`