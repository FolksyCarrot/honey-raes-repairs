import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "../Tickets.css"
 
export const TicketList = ({messageToDisplay}) => {
    const [tickets, setTickets] = useState([])
    const history = useHistory()

    const reRender = () => {
        fetch ("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
            .then ( res => res.json())
            .then ((data)=> {
                setTickets(data)
            })
    }


    useEffect(
        () => {
           reRender()
        },
        []
    )


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then ( () => {
            reRender()

        }
        )
    }
    
    return (
        <>
            {messageToDisplay}
            <div>
                <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            </div>

            {
                tickets.map((ticket) => {
                  return  <p className={ticket.emergency ? "emergency" : ""} key ={ticket.id}>
                    {ticket.emergency ? "🚑" : ""}  <Link to={`/serviceTickets/${ticket.id}`}>{ticket.description}</Link>
 submitted by {ticket.customer.name} and worked on by {ticket.employee.name} <button onClick={() => {
                    deleteTicket(ticket.id)
                    }}>Delete</button>

                </p>
                })
            }
        </>
    )
}

