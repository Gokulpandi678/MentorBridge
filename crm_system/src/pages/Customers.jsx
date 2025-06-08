import { Button } from "react-bootstrap"
import { useState } from "react"
import { CustomerTable } from "../modules/CustomerTable"
import { AddCustomers } from "../modules/AddCustomers";

export const Customers = () => {
    const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
    const [customer, setCustomer] = useState([]);

    return (
        <div className="container mt-3 d-flex flex-column gap-3">

            <div className="d-flex justify-content-end">
                <Button onClick={() => setIsAddCustomerOpen(true)}>Add Customer</Button>
            </div>

            <div className="customer-table">
                <CustomerTable customers={customer} setCustomer={setCustomer}/>
            </div>
            
            {isAddCustomerOpen && <AddCustomers onClose={() => setIsAddCustomerOpen(false)} onSave={(value) => setCustomer([...customer,value])}/>}
        </div>
    )
}