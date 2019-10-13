import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../src/theme";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'NotoSansKR';
    src: url('/fonts/NotoSansKR-Black.otf');
    src: url('/fonts/NotoSansKR-Bold.otf');
    src: url('/fonts/NotoSansKR-Light.otf');
    src: url('/fonts/NotoSansKR-Medium.otf');
    src: url('/fonts/NotoSansKR-Regular.otf');
    src: url('/fonts/NotoSansKR-Thin.otf');
  }


  body{
    font-size: 14px;  
    font-family: "NotoSansKR";
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
