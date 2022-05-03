import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/nature-hd-background-4.jpg'

// const jsxElement = <h1>THIS IS FIRST REACT APP</h1>
// const rootElement = document.getElementById('root')

// ReactDOM.render(jsxElement, rootElement)

const headerstyle = {
  backgroundColor: 'cyan',
  fontFamily: 'Helvetic Neue',
  padding: 25,
  lineHeight: 1.5
};

const header = (
  <header style={headerstyle}>
    <h1>WELCOME TO REACT JS</h1>
    <h2>SECOND REACT SESSION</h2>
    <p>HELLO ABHISHEK, WELCOME TO OUR PAGE</p>
  </header>
);

const main = (
  <main style={{backgroundImage:{userImage}}}>
    <p>HELLO ABHISHEK! HOW ARE YOU TODAY?</p>
    <ul>
      <li>GOOD!</li>
    </ul>
  </main>
);

const user = (
  <div>
    <img src={userImage} alt='Abhishek'></img>
  </div>
);


const footer = (
  <p>Copyright 2022</p>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
     {user}
  </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
app
);

