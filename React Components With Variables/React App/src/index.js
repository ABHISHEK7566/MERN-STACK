import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/the-amazing-spider-man.jpg'

// syntax of functional component
// const jsx = <tag>Content</tag>

// const ComponentName = () => {
//   return jsx
// }

const welcome = `Welcome To React Session`;
const title = `First Session Of React`;
const subtitle = `JavaScript Class`;

const student = {
  firstname : `ABHISHEK`,
  lastname : `YADAV`
};

const date = `MAY 03, 2022`;

// Hexadecimal color Genrator
// #000000 - black

const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index] // color = color + str[index]
  }
  return '#' + color
}

const HexaColor = () => (
<div style={{backgroundColor:`${hexaColor()}`
}}>
  {hexaColor()}
  </div>
)

  const headerStyle = {
  backgroundColor: 'cyan',
  fontFamily:'Helvetic Neue',
  padding: 25,
  lineHeight: 1.5
}


// React Component 

const Header = () => {
  return (<header style={headerStyle}>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <p>Member: {student.firstname} {student.lastname}</p>
    <small>{date}</small>
  </header>
  );
}

const Main = () => (
  <main>
  <p>HELLO ABHISHEK! YOUR SKILLS ARE MENTIONED BELOW :-</p>
  <ul>
  {techFormated}
  </ul>
  <UserCard />
  <HexaColor/>
</main>
)

const UserCard = () => (
  <div>
    <img src={userImage} alt='Abhishek'></img>
    <h2>
      {student.firstname} {student.lastname}
    </h2>
  </div>

)

const tech = ['HTML', 'CSS', 'JAVASCRIPT'];
const techFormated = tech.map( (tall) => <li>{tall}</li>)
//                                       <li>HTML</li>
//                                       <li>CSS</li>
//                                       <li>JAVASCRIPT</li>
const Footer = () => (
  <footer>
  <p>Copyright 2022</p>
  </footer>
);


const App = () => (
  // <div style={{
  //   backgroundImage : `url(${userImage})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat'
  // }}>
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

