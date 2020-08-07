import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: "Roboto",
  primaryColor: "#001b2e",
  secondaryColor: "#fffffe",
  accentColor: "#DCDFE5",
  contrastColor: "#f50057"
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.primaryColor};
    font-family: "Roboto", sans-serif;
  } 
`;


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
