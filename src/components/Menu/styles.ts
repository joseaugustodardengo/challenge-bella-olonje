import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.625rem auto;
  height: 9.75rem;

  img {
    margin-left: 4.375rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;    
    margin-right: 3rem;

    li {
      display: flex;
      margin: 0 3.875rem;
      list-style: none;
      padding: 0.625rem;
      height: 3rem;
      align-items: center;

      &:last-child {
        border: 1px solid #000000;
        box-sizing: border-box;
      }   
      
      a:hover {
        color: var(--orange-color);
      }
    }

    .active{
      color: var(--orange-color);
    }
  }
`