import { useContext, useState, useEffect } from "react";
import { Table } from "react-bootstrap"
import { TransactionContext } from "../utils/transactionContext";

export const TransactionList =() => {

    const { currentUser, findCustomerByAccountNumber} = useContext(TransactionContext);
    const [user, setUser] = useState({})

    useEffect(() => {
        const result = findCustomerByAccountNumber(currentUser.accountNumber);
        setUser((prev) => ({...prev,...result}))
    },[currentUser.accountNumber])

    return (
        <div className="d-flex flex-column gap-4">
            <h2>Transactions List</h2>
            <div>   
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Payment Method</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        user.transactions && user.transactions.map((customer,i) => (
                            <tr key={i}>
                                <td>{customer.date}</td>
                                <td>{customer.description}</td>
                                <td>{customer.method}</td>
                                <td className={`${customer.method === 'debit' ? 'text-danger' : 'text-success'}`}>Rs.{customer.amount}</td>
                                <td>Rs.{customer.balance}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}