import React from "react";
import {useSelector} from "react-redux";
const Home=()=>{
    const state=useSelector(state=>state);
    
    return(
        <>
                <center><h1>welcome to home page</h1></center>
        </>
    )
}
export default Home;
