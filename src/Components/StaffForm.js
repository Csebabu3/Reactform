
import React, { useState } from "react";
import "../App.css";


let storedData =  JSON.parse(localStorage.getItem('formDataArray')) || [];
function StaffForm() {
    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [mobileNo, setMobileNo] = useState('');



    const [error, setError] = useState(false);
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            Name.length === 0 || mobileNo.length === 0 || password.length === 0 || Cpassword.length === 0) {
            setError(true);
        } else if (password !== Cpassword) {
            setError(true);
        } else if (!emailRegExp.test(email)) {
            setError(true);
        } else {
            setError(false);
            console.log("Name:", Name, "Email:", email, "Password:", password, "Cpassword:", Cpassword, "Mobile No:", mobileNo);
        };
        const FormData = {
            Name: Name,
            Email: email,
            Password: password,
            Cpassword: Cpassword,
            Number: mobileNo
          };
          console.log(FormData);
          
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Staff Form Validation</h1> 
            <lablel>Enter the  Name :</lablel>
            <div>
                <input onChange={e => setName(e.target.value)}  id="Name" placeholder=" Name" />
            </div>
            {error && Name.length === 0 && <label>Enter the first name</label>}
            <div>
                <lablel>Enter the Email id :</lablel><br></br>
                <input type="email" onChange={e => setEmail(e.target.value)} id="Email" placeholder="Email" />
            </div>
            {error && email.length === 0 && <label>Enter the Email</label>}
            {error && !emailRegExp.test(email) && <label>Enter a valid email</label>}
            <div>
                <lablel>Enter the password :</lablel><br></br>
                <input type="password" onChange={e => setPassword(e.target.value)} id="Password" placeholder="Password" />
            </div>
            {error && password.length < 4 && <label>Enter a valid password</label>}
            <div>
                <lablel>Enter the Confirm password :</lablel><br></br>
                <input type="password" onChange={e => setCpassword(e.target.value)} id="Cpassword" placeholder="Confirm Password" />
            </div>
            {error && Cpassword.length < 4 && <label>Enter the Confirm password</label>}
            {error && password !== Cpassword && <label>Passwords do not match</label>}
            <div>
                <lablel>Enter the Mobile No :</lablel><br></br>
                    <input type="number" onChange={e => setMobileNo(e.target.value)} id="Number" placeholder="Mobile No" />
                </div>
            {error && mobileNo.length < 10 && <label>Enter a valid mobile number</label>}<br></br>
                <button type="submit">Submit</button>
        </form>
       
    );
    
}


export default StaffForm;

