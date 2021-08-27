import React, {useState, useEffect} from "react"

export const EmployeeList = () => {
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        fetch("http://localhost:8088/employees")
        .then (res => res.json())
        .then (
            (employeeArray) => {setEmployee(employeeArray)})
    
    }, []
    )

    return (
        <>
            {
                employee.map(
                    (employeeObject) => {return <h3 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h3>
                    })
            }
        </>
    )
}



