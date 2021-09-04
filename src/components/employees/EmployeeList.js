import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getAllEmployees } from "../ApiManager"


export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [employeeSpecialty, setEmployeeSpecialty] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
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
            <button onClick={() => history.push("./employees/employeeForm")
            }> New Employee</button>
        </div>

            <div>
                Specialties: {employeeSpecialty}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`./employees/${employee.id}`}> {employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
