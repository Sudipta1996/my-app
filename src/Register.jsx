import axios from "axios";
import React from "react";
import {BrowserRouter,Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Name,Email,Pass,Role} from "./Redux";

const Register = () => {
   
   const state=useSelector((state)=>state)
   const dispatch=useDispatch();
    const{Reg}=state;
  
   const submit=()=>{
      console.log(state)
      axios.post('http://localhost:4000/user',{
          name:Reg.name,
          email:Reg.email,
          password:Reg.password,
          role:Reg.role
      })
       
   }
    
  

    return (
        <>
        <div class="container">
          
          <div className="card col-8 col-lg-4 login-card mt-2 hv-center"> 
          <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" name="name"  value={Reg.name} onChange={(e)=>dispatch(Name(e.target.value))} required />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="text" class="form-control" name="email"  value={Reg.email} onChange={(e)=>dispatch(Email(e.target.value))} required />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" name="password"  value={Reg.password} onChange={(e)=>dispatch(Pass(e.target.value))} required />


            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Role</label>
                <input type="text" class="form-control" name="role"  value={Reg.role} onChange={(e)=>dispatch(Role(e.target.value))} required />
                

            </div>
            <Link to="/"><button onClick={submit}>Submit</button></Link>
            </form>
            </div>
            
           </div>

        </>
    )
   
}
export default  Register;
