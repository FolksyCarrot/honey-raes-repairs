import React, { useState } from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketList } from "./serviceTickets/TicketList.js"
import { TicketForm } from "./serviceTickets/TicketForm.js"
import { EmployeeForm } from "./employees/EmployeeForm.js"
import { Ticket } from "./serviceTickets/Ticket.js"
import { Employee } from "./employees/Employees.js"

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

            <Route  exact path="/serviceTickets">
                <TicketList messageToDisplay={junk}/>   
            </Route>

            <Route  path="/serviceTickets/create">
                <TicketForm />
            </Route>
            
            <Route exact path="/serviceTickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>


        </>
    )
}
