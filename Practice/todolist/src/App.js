
import './App.css';
import React from 'react';
import Router from './router/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={Router} />


  );
}

export default App;
