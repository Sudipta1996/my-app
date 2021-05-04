import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Register from "./Register.jsx"
import Login from "./Login.jsx";
import Home from "./Home.jsx";


const App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={()=> <Register/>}/>
      <Route exact path="/login" component={()=> <Login/>}/> 
      <Route exact path="/home" component={()=> <Home/>}/>
    </BrowserRouter>
  )
}
export default App;