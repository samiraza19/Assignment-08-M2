import './App.css'
import React from 'react'
// import { React_Icons_Examples } from "./components/React_Icons_Examples";
// import Button from "@mui/material/Button";
// import { Example_Component } from "./components/Example_Component";
// import { Material_Ui_Grid } from "./components/Material_Ui_Grid";
import Search from './Components/Navbar'
import { Products } from './Components/Products'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <div>
      <Search />
      <Products />
    </div>
    <div>
      <Footer />
    </div>
    </>
  )
}

export default App