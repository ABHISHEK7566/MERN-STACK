import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/the-amazing-spider-man.jpg'

// syntax of functional component
// const jsx = <tag>Content</tag>

// const ComponentName = () => {
//   return jsx
// }


  const headerStyle = {
  backgroundColor: 'cyan',
  fontFamily:'Helvetic Neue',
  padding: 25,
  lineHeight: 1.5
}

const header = (
  <header style={headerStyle}>
    <h1>WELCOME TO REACT JS</h1>
    <h2>SECOND REACT SESSION</h2>
    <p>HELLO ABHISHEK, WELCOME TO OUR PAGE</p>
    <small>April, 2022</small>
  </header>
);

// React Component 

const Header = () => {
  return header
}

const Main = () => (
  <main>
  <p>HELLO ABHISHEK! HOW ARE YOU TODAY?</p>
  <ul>
    <li>GOOD!</li>
  </ul>
  <UserCard />
</main>
)

const UserCard = () => (
  <div>
    <img src={userImage} alt='Abhishek'></img>
  </div>

)

const Footer = () => (
  <footer>
  <p>Copyright 2022</p>
  </footer>
);


const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);

