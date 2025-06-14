import { Form, Button} from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { TransactionContext } from "../utils/transactionContext";
import { toast } from "react-toastify";

export const NewTransaction = () => {

    const { customers, creditMoney, debitMoney, withdrawMoney, currentUser, message } = useContext(TransactionContext);
    const [ buttonText, setButtonText ] = useState('Confirm Payment');
    const [ isTransactionInitiated, setIsTransactionInitiated ] = useState(false);

    useEffect(() => {
        if(isTransactionInitiated && message.text !== ''){

            setTimeout(() => {
                if (message.success) {
                    toast.success(`${message.text}`, { position: "top-center" });
                    setTransaction({
                        accountNumber: "default",
                        amount: "",
                        paymentMethod: "default",
                    });
                } else {
                    toast.error(`${message.text}`, { position: "top-center" });
                    setTransaction({ ...transaction, amount: "" });
                }
                setIsTransactionInitiated(false);
            },2000)

        }
    }, [message]);

    const [transaction, setTransaction] = useState({
        accountNumber: '',
        amount: '',
        paymentMethod: ''
    });

    const handleTransaction = () => {
        setIsTransactionInitiated(true);
        if(transaction.paymentMethod === 'debit'){
            setTransaction({...transaction, 'accountNumber': currentUser.accountNumber});
        }

        if(transaction.accountNumber === 'default' || transaction.amount === '' || transaction.paymentMethod === 'default'){
            toast.error('Please fill all the fields', {position: 'top-center'});
            return;

        }else if(transaction.paymentMethod === 'debit') {
            withdrawMoney(currentUser.accountNumber, parseInt(transaction.amount))
            setButtonText('Processing...');

        }else if(currentUser.accountNumber === transaction.accountNumber && transaction.paymentMethod === 'credit'){
            creditMoney(currentUser.accountNumber, parseInt(transaction.amount));
            setButtonText('Processing...');
            
        }else if(transaction.paymentMethod === 'credit'){
            debitMoney(currentUser.accountNumber, transaction.accountNumber, parseInt(transaction.amount));
            setButtonText('Processing...');
        }

        setTimeout(() => {
            setButtonText('Confirm Payment');
        },2000)
    }

    return (
        <div className="d-flex flex-column gap-4">
            <h2>New Transaction</h2>
            <Form className="d-flex flex-column gap-3">

                <Form.Select onChange={(e) => setTransaction({...transaction,'paymentMethod':e.target.value})} value={transaction.paymentMethod}>
                    <option value='default'>Select Payment Method</option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </Form.Select>

                {
                    transaction.paymentMethod !== 'debit' && <Form.Select onChange={(e) => setTransaction({ ...transaction, 'accountNumber': e.target.value })} value={transaction.accountNumber}>
                        <option value='default'>Select a Person</option>
                        {
                            customers.map((customer, i) => {
                                if (customer.accountNumber !== currentUser.accountNumber) {
                                    return (
                                        <option key={i} value={customer.accountNumber}>{customer.name}</option>
                                    )
                                }
                                return <option key={i} value={customer.accountNumber} className="text-danger">Myself</option>;
                            })
                        }
                    </Form.Select>
                }

                <Form.Group className="d-flex align-items-center gap-3" controlId="formPlaintextEmail">
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control 
                        type="number"
                        value={transaction.amount}
                        onChange={(e) => setTransaction({...transaction,'amount':e.target.value})}
                    />
                </Form.Group>

                <Button 
                    variant="success" 
                    onClick={handleTransaction}
                >
                    {buttonText}
                </Button>
            </Form>
        </div>
    )
}