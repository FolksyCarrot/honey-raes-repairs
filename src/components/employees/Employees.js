import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { getAllEmployeeId } from "../ApiManager"

export const Employee = () => {
    const [employee, setEmployee]= useState({})
    const {employeeId} = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(setEmployee)
        },
        [ employeeId ] 
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee_name">{employee.name}</h3>
                <div className="employee_specialty"> His/Her specialty is: {employee.specialty}</div>
            </section>
        </>
    )
}