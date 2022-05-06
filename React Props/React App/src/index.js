import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.Welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstname} {' '} {props.lastname}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}

const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstname} {' '}
        {props.lastname}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}


const Age = (props) => {
  return (
    <div>
      # This Person Is {props.age} Years Old.
    </div>
  )
}

const Weight = (props) => {
  return (
    <div>
      # His Weight is {props.weight} KiloGrams.
    </div>
  )
}

const Status = (props) => {
  return (
    <p>
     # {props.status}
    </p>
  )
}


const Skills = (props) => {
  const skillList = props.skills.map( (s) => <li>{s}</li>)
  return (
    <ul>
      {skillList}
    </ul>
  )
}

const Head = (props) => {
  return (
    <div>
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.title}</h2>
      <p>{props.data.subtitle}</p>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}


      
  const Welcome ="Welcome To React Session" 
  const title ="First Session"
  const subtitle ="JavaScript Module"
  const firstname ="Abhishek"
  const lastname ="Yadav"
  const date ="04,May 2022"


  const App = () => {

    let year = 2022
    let birthyear = 1999
    const age = year - birthyear
    const weight = 78
    const status = age > 100 ? "true" : "false";

    const data = {
      welcome: "-: This Is Object Component :-",
      title: "# Js Component",
      subtitle: "-: Data From Object :-"
    }

    const helloIndore = () => {
      alert("Hi");
    }
      return (
        <div>
          <Header 
            Welcome = {Welcome}
            title = {title}
            subtitle = {subtitle}
            firstname = {firstname}
            lastname = {lastname}
            date = {date}
          />
          <User firstname="---- ABHISHEK" lastname="YADAV ----" country="INDIA" />
          <br></br>
          <Age age={age} />
          <br></br>
          <Weight weight={weight}/>
          <br></br>
          <Status status={status} />
          <Skills skills={['HTML', 'CSS', 'JAVASCRIPT']}/>
          <Head data={data} />

          <Button text="-- Hello From Abhishek --" onClick={helloIndore} />

        </div>
      )
    }


     
// const App = () => {
//   return (
//     <div>
//       <Header 
//         Welcome="Welcome To React Session" 
//         title="First Session"
//         subtitle="JavaScript Module"
//         firstname="Abhishek"
//         lastname="Yadav"
//         date="04,May 2022"
//       />
//       <User firstname="ABHISHEK" lastname="YADAV" country="INDIA" />
//     </div>
//   )
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);

