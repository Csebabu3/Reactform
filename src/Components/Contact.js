import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react';
import axios from 'axios';


function Contact() {  
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [data, setData] = useState([]);

  const postData = () => {
    if(id!=""){
      alert(id)
      updateData(id);
    }else{
      axios
      .post('https://6465bc0c9c09d77a62f2717c.mockapi.io/Reactcrud', {
        firstName: firstName,
        lastName: lastName,
        checkbox: checkbox
      })
      .then(response => {
        console.log(response.data);
        setId('');
        setFirstName('');
        setLastName('');
        setCheckbox(false);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
    }
   
  };

  const fetchData = () => {
    axios
      .get('https://6465bc0c9c09d77a62f2717c.mockapi.io/Reactcrud')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const editData = (id) => {
    axios
      .get(`https://6465bc0c9c09d77a62f2717c.mockapi.io/Reactcrud/${id}`)
      .then(response => {
        console.log(response.data);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setId(response.data.id);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const updateData = (id) => {
    axios
      .put(`https://6465bc0c9c09d77a62f2717c.mockapi.io/Reactcrud/${id}`, {
        firstName: firstName,
        lastName: lastName,
        checkbox: checkbox
      })
      .then(response => {
        console.log(response.data);
        setFirstName('');
        setLastName('');
        setId('');
        setCheckbox(false);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`https://6465bc0c9c09d77a62f2717c.mockapi.io/Reactcrud/${id}`)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Form className='create-form'>
        <Form.Field>
          <label>First Name</label><br></br>
          <input type="hidden" value={id} onChange={(e) => setId(e.target.value)} />

          <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label><br></br>
          <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
      </Form>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(item => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => editData(item.id)}>Edit</Button>
               
              </Table.Cell>
              <Table.Cell>
              <Button color='red' onClick={() => deleteData(item.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Contact;
