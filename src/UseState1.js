import { useState } from "react"

export let  Hook1=()=>
{
    const[count,SetCount ]=useState(0)
    const counting1=()=>
    {
        SetCount(count+50);
    }
    const countZero=()=>
    {
        SetCount(0)
    }
    return(
        <>
        <button onClick={counting1} onDoubleClick={countZero}>Click</button>
        <span style={{color:'blue',backgroundColor:'black'}}>
            {count}
        </span>
        </>
    )
}