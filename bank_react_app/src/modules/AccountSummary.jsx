import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../utils/transactionContext";

export const AccountSummary =() => {

    const { findCustomerByAccountNumber, currentUser } = useContext(TransactionContext);
    const [user, setUser] = useState({})

    useEffect(() => {
        const result = findCustomerByAccountNumber(currentUser.accountNumber);
        setUser((prev) => ({...prev,...result}))
    },[currentUser.accountNumber])
    
    return (
        <div className="d-flex flex-column gap-4">
            <h2>Account Summary</h2>
            <div>
                <p>Account Number:{user?.accountNumber && `xxxxxx${user?.accountNumber.slice(6,10)}`}</p>
                <p>Name: {user.name}</p>
                <p>Balance: Rs.{user.totalBalance} /-</p>
            </div>
        </div>
    )
}