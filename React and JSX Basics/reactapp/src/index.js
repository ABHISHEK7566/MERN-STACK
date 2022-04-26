import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxElement = <h1>THIS IS FIRST REACT APP</h1>
// const rootElement = document.getElementById('root')

// ReactDOM.render(jsxElement, rootElement)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  jsxElement
);

