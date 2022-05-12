import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/the-amazing-spider-man.jpg'

// Class Components 

// Class Components Synax ----

// class Components {
//   constructor(){

//   }
// }

// class Child extends React.Component {
//   constructor(props){
//     super(props){

//     }
//   }
// }


// Functional Components 

// const Header = () => {
//   return(
//     <header>
//       <div>
//         <h1>React Class Components</h1>
//       </div>
//     </header>
//   )
// }

// Class Components ----

// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // code that need to be executed 
//   }
//   render() {
//     console.log(this.props.data);
//     return(
//       <header>
//       <div>
//         <h1>{this.props.data.welcome}</h1>
//         <h2>{this.props.data.title}</h2>
//         <h3>
//           {this.props.data.student.firstname} {this.props.data.student.lastname}
//         </h3>
//         <small>{this.props.data.date}</small>
//       </div>
//     </header>
//     )
//   }
// }

// Class Components Using Destructure----

const UserCard = ({user: {firstname, lastname, image}}) => {
  return (
    <div>
      <img src={userImage} alt={firstname} />
    </div>
  )
}

const Button = ({text, onClick, style}) => {
  return(
    <button  style={style} onClick={onClick}>
      {text}
    </button>
  )
}


const buttonStyle = {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}
class Header extends React.Component {
  greetPeople = () => {
    alert('WELCOME TO THE ALERT OF GREET METHOD OF HEADER ')
  
  }
  render() {
    console.log(this.props.data);

    const {
      welcome,
      title,
      subtitle,
      student: {firstname, lastname},
      date,
    } = this.props.data
    return(
      <header>
      <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h3>
          {firstname} {lastname}
        </h3>
        <small>{date}</small>
        {' '}
        <button onClick={this.greetPeople}>Greet</button>
      </div>
    </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {techs} = this.props
    const techsFormatted = techs.map((t) => <li key={t}>{t}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <main>
        <div>Learning React Class Components </div>
        <p>Class Components</p>
        <ul>
          <TechList techs={this.props.techs} />
        </ul>
        <UserCard user={this.props.user} />
        <Button 
         text='Greet People' 
         onClick={this.props.greetPeople}
         style={buttonStyle} 
         />
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <footer>
        <div>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}



class App extends React.Component {
  constructor(props) {
    super(props)
  }

  greetPeople = () => {
    alert('Greetings From App')
  }

  render() {
    const data = {
      welcome: "Hello Welcome To Class Components",
      title: "React Class",
      subtitle: "This Is React Session",
      student: {
        firstname: "Abhishek",
        lastname: "Yadav"
      },
      date: "May 11, 2022",

    }
    const techs = ['HTML', 'CSS', 'JAVASCRIPT']
    const user = { ...data.student,userImage}

    return(
      <div>
        <Header data = {data}/>
        <Main 
        user={user}
        techs={techs} 
        greetPeople={this.greetPeople}/>
        
        <Footer date={new Date()} />
      </div>
    )
  }
}

// Methods In Class Components ----





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);

