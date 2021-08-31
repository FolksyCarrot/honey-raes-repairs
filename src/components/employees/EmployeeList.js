import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialty, setEmployeeSpecialty] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => { 
        const specialties = employees.map(employee => employee.specialty)
        setEmployeeSpecialty(specialties.join(", "))



        /* employees.map(
            (employee) => setEmployeeSpecialty(employee.specialty)
        ).join(",")



        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
    }, [employees])

    return (
        <>
        <div>
            <button onClick={() => history.push("./employees/create")
            }> New Employee</button>
        </div>

            <div>
                Specialties: {employeeSpecialty}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}
