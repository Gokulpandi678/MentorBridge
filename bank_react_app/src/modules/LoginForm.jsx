import { useContext, useState } from "react"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"
import { TransactionContext } from "../utils/transactionContext";
import { toast } from "react-toastify";

export const LoginForm = ({onClose}) => {

    const { findCustomerByAccountNumber, setCurrentUser, setIsLoggedIn } = useContext(TransactionContext);
    const [accountNumber, setAccountNumber] = useState('');
    const [errorMessage, setErrorMessage ] = useState(null);

    const handleLogin = () => {
        const user = findCustomerByAccountNumber(accountNumber);
        if(user){
            setCurrentUser({
                name:user.name,
                accountNumber:user.accountNumber
            })
            setIsLoggedIn(true)
            toast.success(`Welcome ${user.name}`, {position: 'top-center'});
            onClose();
        }else{
            setErrorMessage('No user found with this account number')
        }
    }

    return (
        <Modal show={true}>

            <Modal.Header>
                <Modal.Title className="text-violet">Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FloatingLabel controlId="floatingInput" label="Account Number" >
                    <Form.Control 
                        type="text" 
                        placeholder="Account Number" 
                        onChange={(e) => setAccountNumber(e.target.value)}    
                        />
                </FloatingLabel>
                <span className="text-danger">{errorMessage}</span>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => onClose()}>Back</Button>
                <Button variant="success" onClick={handleLogin}>Login</Button>
            </Modal.Footer>

        </Modal>
    )
}