import { useState } from "react"

export let Hook=()=>
{
    //const[user,setuser]=usestate("")
    // const[getuser,setUser]=useState("")
    // const display=()=>
    // {
    //     alert("Data Insert successfully"+getuser)
    // }
    // var result=(temp)=>
    // {
       
    //     setUser(temp.target.value)

    // }
    // return(
    //     <>
    //     <input type="text" placeholder="NAME" name={getuser} onChange={result}/>
    //     < button className="btn btn-outline-success" onClick={display}>CLICKONACTION
    //     </button>
    //     </>

    // );
    const[details,SetDetails]=useState({
        name:"PREETHI AND SIVASAKARI",
        Place:"THIRUVARUR",
        Degree:"BE",
        Favplace:"Switzerland"
    });
    return(
        
        <>
        <h1>DETAILS </h1>
        <ol>
            <li>NAME IS :{details.name}</li>
            <li>NATIVE PLACE IS :{details.Place}</li>
            <li>DEGREE{details.Degree}</li>
            <li>FAV PLACE {details.Favplace}</li>
        </ol>
        </>
    )
}