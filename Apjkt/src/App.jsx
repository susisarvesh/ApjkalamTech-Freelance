
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Pages/Contact';
import Homepage from './Pages/Homepage'
import {Routes, Route } from "react-router-dom";
import Solutions from './Pages/Solutions/Solution';
import Company from './Components/Company/Company';
import Catalog from './Pages/Catalog';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar></Navbar>}>
          <Route index element={ <Homepage></Homepage>}></Route>
          <Route path="services" element={ <Services></Services>}></Route>
          <Route path="solutions" element={ <Solutions></Solutions>}></Route>
          <Route path="company" element={ <Company></Company>}></Route>
          <Route path="catalog" element={ <Catalog></Catalog>}></Route>
        
        </Route>
          <Route path="/contact" element={ <Contact></Contact>}></Route>
        <Route ></Route>
        
      </Routes>
    </>
  )
}

export default App
