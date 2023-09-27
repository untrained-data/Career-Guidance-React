import './App.css'
import { Routes, Route } from "react-router";
import { Home } from './components/home/Home';
import Header from './components/header/Header';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { UserForm } from './pages/userForm/UserForm';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/userform" element={<UserForm/>}/>
      </Routes>
    </>
  )
}

export default App
