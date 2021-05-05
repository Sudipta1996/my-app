import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Email,Pass,getFetch} from "./Redux";
import {useHistory,Link} from "react-router-dom";


const Login=()=>{

    const state=useSelector(state=>state);
    const dispatch=useDispatch();
    const{Reg,Data}=state;
    useEffect(()=>{
       dispatch(getFetch());
    },[])
   
    let history=useHistory();
    let y=true,b=0;
    const submit=()=>{
        for(let i=0;i<Data.length;i++)
        {   b++;
            if(Data[i].email===Reg.email && Data[i].password===Reg.password)
            {   y=false;
                if(Data[i].role=="Student")
                {
                    history.push("/student");
                }
                else if(Data[i].role=="Teacher")
                {
                    history.push("/teacher")
                }
            }
        }
        if(y===true && b>0)
        {
            alert("invalid email or password")
        }

    }
    return(
        
        <div class="container">
          
          <div className="card col-8 col-lg-4 login-card mt-2 hv-center"> 
          <form>
            <div class="mb-3">
            
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="text" class="form-control" name="email" value={Reg.email}  onChange={(e)=>dispatch(Email(e.target.value))} />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" name="password" value={Reg.password}  onChange={(e)=>dispatch(Pass(e.target.value))} />

            </div>
            
            <button onClick={submit}>Login</button>
            <Link to="/register"><button type="button" className="btn btn-warning">
            Register
          </button></Link>
            </form>
            </div>
            
           </div>
        
    )
}
export default Login;