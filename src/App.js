import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainsidebar from './Components/Mainsidebar';
import TopNew from './Components/TopNew';
import Sidecontent from './Sidecontent';
import Mailbox from './Mailbox';
import Sideimages from './Sideimages';
import FormValid from './Components/FormValid';

import StaffForm from './Components/StaffForm';
import Table from './Components/Table';
import Contact from './Components/Contact';
import Layout from './Components/Layout';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path="home" element={<Sidecontent />} />
         
          <Route path='Faculty' element={<FormValid />} />
          <Route path="" element={<FormValid />} />
            <Route path="Faculty" element={<Mailbox />} />
           
            <Route path="Student" element={<StaffForm />} />
            <Route path='Contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
