import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../src/theme";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  font-family: ''
  body{
    font-size: 14px;  
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
