import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export let TernaryOperator=()=>
{
    const[wish,setWish]=useState("");
    const[display,setDisplay]=useState("");
    const[changes,setChanges]=useState({color:'red',backgroundColor:'black'});

    const gettingvalues=(temp)=>
    {
        setWish(temp.target.value);
    }

    const ternaryoperator=()=>
    {
        (wish=='java')?
        setChanges({color:"green",backgroundColor:"yellow"}):

        (wish=='python')?
        setChanges({color:"red",backgroundColor:"pink"}):

        (wish=='spring')?
        setChanges({color:"blue",backgroundColor:"purple"}):

        setChanges({color:"orange",backgroundColor:"yellow"})

        setDisplay(wish);
    }

    return(
        <>
        <input placeholder="Enter your favourite Programming Lang" className="form-control" onChange={gettingvalues}  />

        <button className="btn-btn-outline-success fw-bold"  onClick={ternaryoperator}>Check Language</button>

        <p style={changes} >
            {display}
        </p>
        </>
    );

}