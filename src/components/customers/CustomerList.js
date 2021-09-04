import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [message, setMessage] = useState("")

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {
            if(customers.length === 1) {
                setMessage("you have 1 customer!")
            } else {
                setMessage(`you have ${customers.length} customers!`)
            }

        },
        [customers]
    )

    return (
        <>
            <div>{message}</div>
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}
