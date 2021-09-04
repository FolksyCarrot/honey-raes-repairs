
export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllEmployees = () => {
   return fetch("http://localhost:8088/employees")
    .then(res => res.json())
}

// export const getAllEmployeeId = () => {
//    return fetch(`http://localhost:8088/employees/${employeeId}`)
//     .then(res => res.json())
// }

