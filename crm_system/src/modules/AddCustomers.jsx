import { useEffect, useState } from 'react';
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';

export const AddCustomers = ({onClose, onSave, editCustomer}) => {

    const [newCustomer, setNewCustomer] = useState({
        id:null,
        name:"",
        email:"",
        phoneNumber:"",
        location:""
    })

    useEffect(() => {
        if(editCustomer)
            setNewCustomer(editCustomer);
    },[editCustomer]);

    const handleClose = () => {
        onClose();
    }
    
    const handleSave = () => {
        onSave({...newCustomer,'id':newCustomer.id === null ? Math.floor(Math.random() * 900) + 100 : newCustomer.id});
        onClose();
    }

    return (
        <Modal show={true}>
            <Modal.Header>
                <Modal.Title>Add Customer</Modal.Title>
            </Modal.Header>

            <Modal.Body className='d-flex flex-column gap-3'>
                <FloatingLabel controlId="floatingInput" label="Name">
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        value={newCustomer.name}
                        onChange={(e) => setNewCustomer({...newCustomer,'name':e.target.value})}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingInput" label="Email">
                    <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        value={newCustomer.email}
                        onChange={(e) => setNewCustomer({...newCustomer,'email':e.target.value})}
                    />
                </FloatingLabel>

                <div className='d-flex gap-2'>
                    <FloatingLabel controlId="floatingInput" label="Phone Number" className='w-100'>
                        <Form.Control 
                            type="text" 
                            placeholder="Phone Number" 
                            value={newCustomer.phoneNumber}
                            onChange={(e) => setNewCustomer({...newCustomer,'phoneNumber':e.target.value})}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Location" className='w-100'>
                        <Form.Control 
                            type="text" 
                            placeholder="Location" 
                            value={newCustomer.location}
                            onChange={(e) => setNewCustomer({...newCustomer,'location':e.target.value})}    
                        />
                    </FloatingLabel>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="success" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
