import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"

export const TicketList = ({messageToDisplay}) => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch ("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
            .then ( res => res.json())
            .then ((data)=> {
                setTickets(data)
            })
        },
        []
    )

    return (
        <>
            {messageToDisplay}
            <div>
                <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            </div>

            {
                tickets.map((ticket) => {
                    return <p key={`ticket--${ticket.id}`}>{ticket.description} was a problem submitted by {ticket.customer.name} and
                    will be handled by {ticket.employee.name}
                    </p>
                })
            }
        </>
    )
}

