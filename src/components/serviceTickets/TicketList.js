import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

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
            {
                tickets.map((ticket) => {
                    return <p key={`ticket--${ticket.id}`}>{ticket.description} was a problem submitted by {ticket.customer.name}
                    and will be handled by {ticket.employee.name}
                    </p>
                })
            }
        </>
    )
}
