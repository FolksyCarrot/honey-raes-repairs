import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(
                    (customersObject) => { assignCustomers(customersObject)}
                )
        },
        []
    )

    return (
        <>

        {
            customers.map(
                (customer) => { 
                    return <h2 key={`customer--${customer.id}`}>{customer.name}</h2>
                }
            )
        }
        </>
    )
}
