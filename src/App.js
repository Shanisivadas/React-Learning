import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from "./components/Main";
import StateComponent from './components/State/State';
import Student from './components/student/Student';
import Student1 from './components/student/Student1';
import Parent from './components/Props/Parent';
import Swiggy from "./components/bootstrap/Swiggy"
import 'bootstrap/dist/css/bootstrap.min.css';
//import Form from "./components/form/Form";
import Register from "./components/form/Register";
import Axios from "./components/Axios/Axios.js";
import Profile from "./components/Home/Profile";
import A from "./components/Context/A.js";
import Form from "./components/UseRef/Form"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from './components/Navbar/Nav';
import Home from "./Redux/Home"
function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/redux1" element={<Home/>} />

    
    </Routes>
    </BrowserRouter>
    





     
      {/*<Header/>
        <Main/>
        <Footer/>*/}
      {/*<StateComponent/>*/}
      {/* <Student/>*/}
      {/* <Student1/>*/}
     {/*<Parent />
     <Swiggy />*/}
    {/* <Form/>*/}
   {/* <Register/>*/}
   {/* <Axios/>*/}
    {/*<A />*/}
   {/* <Profile/>*/}
  {/* <Form/>*/}
    </div>
  );
}

export default App;
