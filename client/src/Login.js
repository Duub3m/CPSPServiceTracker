import React, { useEffect, useState } from 'react'; // Import for React and useState
import axios from 'axios'; // Import for axios
import { Link } from 'react-router-dom'; // Import for react-router-dom
import './App.css';
import UA from './images/UA.jpeg'
import UA2 from './images/UA2.png'
import UA3 from './images/UA3.jpeg'


function Login() {
return(
    <div className="AppContainer">

{/* Image */}
<div>
<img className= 'UA' src={UA} alt="responsive" />
</div>
{/* Heading */}

<div>
{/* Username */}
<input
  type="text"
  name="Username"
  className="Input"
  placeholder="Net ID"
/>

<div></div>

{/* Password */}
<input
type='password'
name='Password'
className='Input'
placeholder='Password'
/>
</div>

{/* Submit Button */}
<button
type = 'submit'
className = "Submit"
>
Sign In
</button>

<div className = 'LinksEffect'>
<Link to="/Login" className = 'Links'> Password Set </Link>
<Link to="/Login" className = 'Links'> Reset Password/Get Duo Bypass Code </Link>
<Link to="/Login" className = 'Links'> Need Help? </Link>
<Link to="/Login" className = 'Links'> Scheduled Maintenance </Link>
</div>

<p className = 'ITMessage'>All University IT systems and data are for authorized use only. As an authorized user, you agree to protect and maintain the security, integrity and confidentiality of
University systems and data consistent with all applicable policies and legal requirements. Unauthorized use may result in disciplinary action, civil or criminal penalities.
</p>


</div>



)
};

export default Login;