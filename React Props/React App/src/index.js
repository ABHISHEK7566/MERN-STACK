import React from 'react';
import ReactDOM from 'react-dom/client';

// const Header = (props) => {
//   console.log(props);
//   return (
//     <header>
//       <div className="header-wrapper">
//         <h1>{props.Welcome}</h1>
//         <h2>{props.title}</h2>
//         <h3>{props.subtitle}</h3>
//         <p>
//           {props.firstname} {' '} {props.lastname}
//         </p>
//         <small>{props.date}</small>
//       </div>
//     </header>
//   )
// }

// const User = (props) => {
//   return (
//     <div>
//       <h1>
//         {props.firstname} {' '}
//         {props.lastname}
//       </h1>
//       <small>{props.country}</small>
//     </div>
//   )
// }


// const Age = (props) => {
//   return (
//     <div>
//       # This Person Is {props.age} Years Old.
//     </div>
//   )
// }

// const Weight = (props) => {
//   return (
//     <div>
//       # His Weight is {props.weight} KiloGrams.
//     </div>
//   )
// }

// const Status = (props) => {
//   return (
//     <p>
//      # {props.status}
//     </p>
//   )
// }


// const Skills = (props) => {
//   const skillList = props.skills.map( (s) => <li>{s}</li>)
//   return (
//     <ul>
//       {skillList}
//     </ul>
//   )
// }

// const Head = (props) => {
//   return (
//     <div>
//       <h1>{props.data.welcome}</h1>
//       <h2>{props.data.title}</h2>
//       <p>{props.data.subtitle}</p>
//     </div>
//   )
// }

// const Button = (props) => {
//   return(
//     <button onClick={props.onClick}>{props.text}</button>
//   )
// }


      
//   const Welcome ="Welcome To React Session" 
//   const title ="First Session"
//   const subtitle ="JavaScript Module"
//   const firstname ="Abhishek"
//   const lastname ="Yadav"
//   const date ="04,May 2022"


//   const App = () => {

//     let year = 2022
//     let birthyear = 1999
//     const age = year - birthyear
//     const weight = 78
//     const status = age > 100 ? "true" : "false";

//     const data = {
//       welcome: "-: This Is Object Component :-",
//       title: "# Js Component",
//       subtitle: "-: Data From Object :-"
//     }

//     const helloIndore = () => {
//       alert("Hi");
//     }
//       return (
//         <div>
//           <Header 
//             Welcome = {Welcome}
//             title = {title}
//             subtitle = {subtitle}
//             firstname = {firstname}
//             lastname = {lastname}
//             date = {date}
//           />
//           <User firstname="---- ABHISHEK" lastname="YADAV ----" country="INDIA" />
//           <br></br>
//           <Age age={age} />
//           <br></br>
//           <Weight weight={weight}/>
//           <br></br>
//           <Status status={status} />
//           <Skills skills={['HTML', 'CSS', 'JAVASCRIPT']}/>
//           <Head data={data} />

//           <Button text="-- Hello From Abhishek --" onClick={helloIndore} />

//         </div>
//       )
//     }


     
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

// Maping array of numbers----
// const Numbers = (props) => {
//   const list = props.numbers.map( (num) => <li>{num}</li> )
//   return list
// }

// ---- Destructuring ----

// const Numbers = ({ numbers }) => {
//   const list = numbers.map( (num) => <li>{num}</li> )
//   return list
// }


// const App = () => {
//   const numbers = [1,2,3,4,5]
//   return(
//     <div className='container'>
//       <div>
//         <h1>Numbers</h1>
//         <ul>
//           <Numbers numbers = {numbers} />
//         </ul>
        
//       </div>

//     </div>
//   )
// }

// maping array of array ----

// const skills = [
//   ['HTML',10],
//   ['CSS',7],
//   ['JAVASCRIPT',9],
//   ['REACT.JS',10],
// ]

// [Tech,Level] = ['HTML', 10]
// {skill: {Tech,level}} = {s}
// const Skill = ({ skill: [tech,level]}) => {
//   return (
//   <li>
//     {tech} {"--->"} {level}
//   </li>
//   )
  
// }


// const Skills = ({skills}) => {
//   const skillList = skills.map(  (s) => <Skill skill={s} /> )
//   console.log(skillList);
//   return skillList
// }

// const App = () => {
//   return(
//     <div className='container'>
//       <div>
//         <h1>Skills Level</h1>
//         <ul>
//           <Skills skills = {skills} />
//         </ul>
//       </div>
//     </div>
//   )
// }

// const Numbers = ({ numbers }) => {
//   const list = numbers.map( (num) => <li key={num}>{num}</li> )
//   return list
//  }

//  const App = () => {
//     const numbers = [1,2,3,4,5]
//     return(
//       <div className='container'>
//         <div>
//           <h1>Numbers</h1>
//           <ul>
//             <Numbers numbers = {numbers} />
//           </ul>
          
//         </div>
  
//       </div>
//     )
//   }

  // Maping array of objects ----


  const countries = [
    { name: 'India', city: 'Indore'},
    { name: 'Nepal', city: 'Kathmandu'},
    { name: 'US', city: 'Florida'},

  ]

  // { country: {name,city} } = {con}  // { name: 'India', city: 'Indore'}


  const Country = ({ country: {name,city} }) => {
    return(
      <div>
        <h1>{name}</h1>
        <small>{city}</small>
      </div>
    )

  }


  const Countries = ({countries}) => {
    const countryList = countries.map(  (con) =>  (
      <Country key={con.name} country={con} />

    ) )
    return (
      <div>
        {countryList}
      </div>
    )

  }

  const App = () => {
    return(
      <div className='container'>
        <div>
          <h1>Countries List</h1>
          <Countries countries={countries} />
          
        </div>
  
      </div>
    )
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <App />
);

