import React, { useState } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";
import "../App.css";

function FormValid() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://6465bc0c9c09d77a62f2717c.mockapi.io/Formvalidationcrud"
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://6465bc0c9c09d77a62f2717c.mockapi.io/Formvalidationcrud",
        {
          firstName: firstName,
          lastName: lastName,
          mobileNo: mobileNo,
          password: password,
          Cpassword: Cpassword,
          email: email,
          gender: gender

        }
      );
      console.log(response.data);
      setFirstName("");
      setLastName("");
      setMobileNo("");
      setPassword("");
      setCpassword("");
      setEmail("");
      setGender("");
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      mobileNo.length === 0 ||
      password.length === 0 ||
      Cpassword.length === 0 ||
      gender.length === 0
    ) {
      setError(true);
    } else if (password !== Cpassword) {
      setError(true);
    } else if (!emailRegExp.test(email)) {
      setError(true);
    } else {
      setError(false);
      console.log(
        "First name:",
        firstName,
        "Last name:",
        lastName,
        "Mobile No:",
        mobileNo,
        "Password:",
        password,
        "Cpassword:",
        Cpassword,
        "Email:",
        email,
        "Gender:",
        gender
      );
      postData();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form Validation</h1>
        <h5>Enter the First Name:</h5>
        <div>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="First Name"
          />
        </div>
        {error && firstName.length === 0 && <label>Enter the first name</label>}

        <div>
          <h5>Enter the Last Name:</h5>
         
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Last Name"
          />
        </div>
        {error && lastName.length === 0 && <label>Enter the last name</label>}

        <div>
          <h5>Enter the Mobile No:</h5>
         
          <input
            type="number"
            onChange={(e) => setMobileNo(e.target.value)}
            value={mobileNo}
            placeholder="Mobile No"
          />
        </div>
        {error && mobileNo.length < 10 && (
          <label>Enter a valid mobile number</label>
        )}

        <div>
          <h5>Enter the password:</h5>
          
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        </div>
        {error && password.length < 4 && <label>Enter a valid password</label>}

        <div>
          <h5>Enter the Confirm password:</h5>
         
          <input
            type="password"
            onChange={(e) => setCpassword(e.target.value)}
            value={Cpassword}
            placeholder="Confirm Password"
          />
        </div>
        {error && Cpassword.length < 4 && (
          <label>Enter the Confirm password</label>
        )}
        {error && password !== Cpassword && (
          <label>Passwords do not match</label>
        )}

        <div>
          <h5>Enter the Email id:</h5>
         
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        {error && email.length === 0 && <label>Enter the Email</label>}
        {error && !emailRegExp.test(email) && <label>Enter a valid email</label>}

        <div>
          <h5>Enter the Gender:</h5>
          
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "male"}
          />
          <label htmlFor="male" style={{ color: "black" }}>
            Male
          </label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "female"}
          />
          <label htmlFor="female" style={{ color: "black" }}>
            Female
          </label>
        </div>
        {error && gender.length === 0 && <label>Select your gender</label>}

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <Table class="table-dark" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>mobileNo</Table.HeaderCell>
            <Table.HeaderCell>password</Table.HeaderCell>
            <Table.HeaderCell>Cpassword</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>gender</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>{item.mobileNo}</Table.Cell>
              <Table.Cell>{item.password}</Table.Cell>
              <Table.Cell>{item.Cpassword}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.gender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default FormValid;
