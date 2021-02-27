import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background: lightgrey
  }
`;

export const Form = styled.form`
  margin: 1em auto;
`;

export const Input = styled.input.attrs(props => ({
    type: 'text'
  }))`
    width: 312px;
    border-radius: 5px;
    border: 1px solid black;
    display: block;
    font-size: 25px;
    margin: 1em auto;
  `;

export const Container = styled.div`
  background: lightpink;
  width: 400px;
  height: 540px;
  border-radius: 10px;
  text-align: center;
  margin: 2em auto;
  padding: 0.5em;
  box-shadow: 0px 0px 6px 6px grey;
`;

export const ListView = styled.div`
  background: White;
  width: 280px;
  height: 250px;
  border: 1px solid black;
  text-align: left;
  margin: 1em auto;
  padding: 1em;
`;