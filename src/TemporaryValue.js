export let Employeedetails=[
    {
        "empid":101,
        "empname":"Sankari",
        "empusername":"San0406",
        "emppassword":"sara@2904",
        "empdesignation":"Java Software Developer",
        "empexp":10,
        "empsalary":500000
    },

    {
        "empid":102,
        "empname":"Saranya",
        "empusername":"Sarans02",
        "emppassword":"Siva@0406",
        "empdesignation":"Software Engineer",
        "empexp":5,
        "empsalary":1000000
    },

    {
        "empid":103,
        "empname":"Shobana",
        "empusername":"Shoba",
        "emppassword":"Shobakarthi@06",
        "empdesignation":"Web Developer",
        "empexp":15,
        "empsalary":2000000
    }
]

export const create=(obj)=>
{
    Employeedetails.push(obj);
}

export const list=()=>
{
    return Employeedetails;
}

export const read=(index)=>
{
    return Employeedetails[index];
}

export const fetchexact=(name)=>
{
    const temp=Employeedetails.filter((element)=>
    {
        return element.empname==name;
    })
    return temp[0];
}

export const alternation=(ele,index)=>
{
    Employeedetails[index]=ele;
}

export const deleting=(index)=>
{
    var sure=prompt("Are you sure you want to delete the values")
    if(sure=="yes")
    {
        Employeedetails=Employeedetails.filter((ele,ind)=>
        {
            return ind!==index;
        })
        return Employeedetails;
    }
    else if(sure=="no")
    {
        alert("You value is not deleted")
        return Employeedetails;
    }
    else{
        alert("Thank you")
    }
}