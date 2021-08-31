import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, update] = useState({
        name: "",
        specialty: ""
    });

    const history = useHistory()

   const submitEmployee = (event) => {
    event.preventDefault()

    const employeeObject = {
        name: employee.name,
        specialty: employee.specialty
    }



       const fetchOption = {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(employeeObject)
       }
       
       return fetch("http://localhost:8088/employees", fetchOption)
           .then(() => {
               history.push("/employees")
           })
   }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control"
                        placeholder="Name of Employee"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                update(copy)
                            }

                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder= "Employee Specialty"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.specialty = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit Employee
            </button>
        </form>
    )
}
