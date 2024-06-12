
import './App.css';
import React from 'react';
import Router from './router/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Router} />
    </ThemeProvider>

  );
}

export default App;
// themeprovider 에 전달한다는건데 왜 굳이 저기다 전달을해서
// 따로 improt하지 않아도 