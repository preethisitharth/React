import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { deleting, fetchexact, list } from './TemporaryValue';
import { Updating } from './Update';
import { ReadingaEmployeedetails } from './Read';
import { RegistrationForm } from './EmployeeRegistration';


export const Mainpage=()=>
{
    const [temparray,setTemparray]=useState([]);
    const [createview,setCreateview]=useState(false);
    const [readview,setReadview]=useState(false);
    const [pos,setPos]=useState(0);
    const [updateview,setUpdateview]=useState(false);
    const [obj,setObj]=useState({});

    const setavalue=()=>
    {
        setTemparray(list)
    }

    
    useEffect(()=>
    {
        setavalue()
    })

    return(
        <>
        <div className='container row justify-content-center'>
            {
                (createview)?
                <>
                <RegistrationForm/>
                <button className='btn btn-outline-secondary'
                onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }
                >
                    back
                </button>
                </>
                :
                (readview)?
                <>
                <ReadingaEmployeedetails ind={pos} />
                <button className=' btn btn-outline-secondary col-5 mt-5'
                onClick={
                    ()=>
                    {
                        setReadview(false)
                    }
                }
                >
                    back
                </button>
                </>
                :
                (updateview)?
                <>
                <Updating who={pos} mention={obj} />
                <button className='btn btn-outline-secondary '
                onClick={
                    ()=>
                    {
                        setUpdateview(false)
                    }
                }
                >
                    Back
                </button>
                </>
                :
                <>
                <button className='btn btn-outline-success'
                onClick={
                    ()=>
                    {
                        
                        setCreateview(true)
                    }
                }
                >
                    Register new Employee Details
                </button>
                <div className='table-responsive-md mt-5'>
                <table className='col-lg-8 col-md-10 col-sm-12 table table-striped p-3'>
                    <thead>
                        <tr>
                            <td>Employee ID</td>
                            <td>Employee NAME</td>
                            <td>Employee USERNAME</td>
                            <td>Employee PASSWORD</td>
                            <td>Employee DESIGNATION</td>
                            <td>Employee EXPERIENCE</td>
                            <td>Employee SALARY</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            temparray.map((ele,index)=>
                            (
                                <tr>
                                    <td>{ele.empid}</td>
                                    <td>{ele.empname}</td>
                                    <td>{ele.empusername}</td>
                                    <td>{ele.emppassword}</td>
                                    <td>{ele.empdesignation}</td>
                                    <td>{ele.empexp}</td>
                                    <td>{ele.empsalary}</td>
                                    <td>
                                        <button className='btn btn-outline-warning'
                                        onClick={
                                            ()=>
                                            {
                                                setReadview(true)
                                                setPos(index)

                                            }
                                        }
                                        >
                                            Read
                                        </button>
                                        <button className='btn btn-outline-info'
                                        onClick={
                                            ()=>
                                            {
                                                setUpdateview(true)
                                                setPos(index)
                                                const temp=fetchexact(ele.empname);
                                                setObj(temp);
                                            }
                                        }
                                        >
                                            Edit
                                        </button>
                                        <button className='btn btn-outline-danger'
                                        onClick={()=>
                                        {
                                            
                                            setTemparray(deleting(index))
                                        }}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
                </>
            }
        </div>
        </>
    );
}