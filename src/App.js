import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Register from "./Register"
import Login from "./Login";
import Student from "./Student";
import Teacher from './Teacher'



const App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={()=> <Login/>}/>
      <Route exact path="/register" component={()=> <Register/>}/> 
      <Route exact path="/student" component={()=> <Student/>}/>
      <Route exact path="/teacher" component={()=> <Teacher/>}/>
     
    </BrowserRouter>
  )
}
export default App;