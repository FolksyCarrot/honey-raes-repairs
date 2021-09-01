import React, { useState } from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketList } from "./serviceTickets/TicketList.js"
import { TicketForm } from "./serviceTickets/TicketForm.js"
import { EmployeeForm } from "./employees/EmployeeForm.js"

export const ApplicationViews = () => {
    const [junk, setJunk] = useState('Scott is evil')
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route  path="/employees/employeeForm">
                <EmployeeForm />
            </Route>

            <Route  exact path="/ServiceTickets">
                <TicketList messageToDisplay={junk}/>   
            </Route>

            <Route  path="/ServiceTickets/create">
                <TicketForm />
            </Route>
            
        </>
    )
}
