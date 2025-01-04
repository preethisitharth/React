import {useState} from "react"
export const RegistrationForm=()=>
{
    const[userdetail,setUserdetail]=useState({
        //spread operator
        "empid":0,
        "empname":"",
        "empusername":"",
        "emppassword":"",
        "empdesignation":"",
        "empexp":0,
        "empsalary":0
    })
    const tracking=(mydata)=>
    {
        const[name,value]=mydata.target
        setUserdetail((adding)=>
        {
            return{
                adding,[name]:value
            }
        })
    }
    const Register=()=>
    {
        alert("Welcome to Zealous Tech corp" +JSON.stringify(userdetail))
        create(userdetail);
    }
    const cancel=()=>
    {
        alert("Rejected......")
    }
    return(
        <>
        <div className="container-fluid mt-3">
            <h3 className="text-center text-info text-uppercase text-decoration-underline">New Employee Registration</h3>
            <div className="row justify-content-center" style={{backgroundColor:'palegoldenrod'}}>
                <div className="col-lg-7 col-md-10 col-sm-12">
                  
                  <div className="form-group mt-2">
                      <label className="fw-bolder">Employee ID</label>
                      <input className="form-control"
                      name="empid"
                      placeholder="Enter Employee ID"
                      onChange={tracking} value={userdetail.empid}/>
                  </div>

                  <div className="form-group mt-2">
                    <label className="fw-bolder">Employee Name</label>
                    <input className="form-control"
                     name="empname"
                     placeholder="Enter Employee Name"
                     onChange={tracking} value={userdetail.empname}
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label className="fw-bolder">Employee Username</label>
                    <input className="form-control"
                     name="empusername"
                     placeholder="Enter Employee Username"
                     onChange={tracking} value={userdetail.empusername}                    
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label className="fw-bolder">Employee Password</label>
                    <input className="form-control"
                    name="emppassword"
                    placeholder="Enter Employee Password"
                    onChange={tracking} value={userdetail.emppassword}
                    />
                  </div>

                  <div className="form-group mt-2">
                    <label className="fw-bolder">Employee Designation</label>
                    <select className="form-select" 
                     name="empdesignation"
                     onChange={tracking} 
                     value={userdetail.empdesignation}>
                        <option selected hidden>Select any One</option>
                        <option>Java Stack</option>
                        <option>Selenium</option>
                        <option>Front End Developer</option>
                        <option>Web Development</option>
                        <option1>Android Developer</option1>
                     </select>
                  </div>
                  <div className="form-group mt-2">
                    <label className="fw-bolder">Employee Experience</label>
                    <input className="form-control" 
                     type="text"
                     name="empexp"
                     placeholder="Experience:y/m"
                     onChange={tracking}
                     value={userdetail.empexp}
                     />
                  </div>

                  <div className="form-group mt-2">
                    <label className="fw-bolder">Employee Salary</label>
                    <input className="form-control"
                     name="empsalary"
                     placeholder="Enter Employee Salary"
                     onChange={tracking}
                     value={userdetail.empsalary}
                     />
                  </div>

                  <div className="row-justify-content-center mt-2">
                    <div className="col-3">
                        <button className="btn btn-outline-success text-dark" onClick={Register}>REGISTER</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-outline-warning text-dark" onClick={cancel}>CANCEL</button>
                    </div>

                  </div>
                </div>
            </div>
        </div>
        </>
    )
}