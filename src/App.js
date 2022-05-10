import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Header from './Header/Header'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='App'>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
      <Main />
    </div>
  )
}

export default App;
