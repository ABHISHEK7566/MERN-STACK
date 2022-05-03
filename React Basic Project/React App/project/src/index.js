import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const jsxElement =
<form id='Page' action=''>
 <div class="formPage">
<h1>SUBSCRIBE</h1>
<p>Sign Up With Your Email Address To Recive News And Updates.</p>
<input id='ty1' type="text"  placeholder=' First Name ' required/>
<br></br>
<br></br>
<br></br>

<input id='ty2' type="text" placeholder=' Last Name ' required/>
<br></br>
<br></br>
<br></br>

<input id='ty3' type="text" placeholder=' Email ' required/>
<br></br>

<button class="subbtn">SUBSCRIBE</button>
</div>
</form>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  jsxElement
);