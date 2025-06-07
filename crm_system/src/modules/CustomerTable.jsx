import { useState } from "react";
import { Button, Table } from "react-bootstrap"
import { AddCustomers } from "./AddCustomers";

export const CustomerTable = ({ customers,setCustomer }) => {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleEdit = (id) => {
        setSelectedCustomer(customers.find(customer => customer.id === id));
        setIsEditOpen(true);
    }

    const handleDelete = (id) => {
        setCustomer(customers.filter(customer => customer.id !== id));
    }

    return (
        <div>
            <Table bordered striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.location}</td>
                                <td>
                                    <Button className="mx-2" onClick={() => handleEdit(customer.id)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDelete(customer.id)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            {isEditOpen && <AddCustomers 
                onClose={() => setIsEditOpen(false)} 
                editCustomer={selectedCustomer} 
                onSave={(value) => {
                    if(selectedCustomer){
                        setCustomer(customers.map(customer => customer.id === value.id ? value : customer));
                    }else{
                        setCustomer([...customers,value])
                    }
                }}
            />}
        </div>
    )
}