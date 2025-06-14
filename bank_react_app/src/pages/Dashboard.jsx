import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { AccountSummary, TransactionList, NewTransaction, LoginForm } from "../modules";
import { TransactionContext } from "../utils/transactionContext";
import { toast } from "react-toastify";

export const Dashboard =() => {

    const { currentUser, isLoggedIn, setCurrentUser, setIsLoggedIn} = useContext(TransactionContext)
    const [menu, setMenu] = useState('home');
    const [openLoginForm, setOpenLoginForm] = useState(false);

    const handleLogout = () => {
        setCurrentUser({name:'Guest',accountNumber:''})
        setIsLoggedIn(false);
        setMenu('home');
        toast.success('Logged out successfully', {position: 'top-center'});
    }

    return (
        <div className="d-flex flex-column mx-4 mt-2 gap-2">
            <div className="d-flex justify-content-between">
                <h1 className="text-violet mb-0 cursor-pointer" onClick={() => setMenu('home')}>Dashboard</h1>
                <button 
                    className="btn-violet" 
                    onClick={() => isLoggedIn ? handleLogout() : setOpenLoginForm(true) }
                >
                    {isLoggedIn ? 'Logout' : 'Login' }
                </button>
            </div>

            <hr className="border-3 text-black" />

            <div className="d-flex gap-5">
                <div className="d-flex flex-column gap-2 border-right-2 border-color-black">
                    <Button 
                        variant="warning" 
                        onClick={() => setMenu('accountSummary')}
                        className={`${isLoggedIn ? '' : 'pe-none opacity-50'}`}
                    >
                        Account summary
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={() => setMenu('transactionList')}
                        className={`${isLoggedIn ? '' : 'pe-none opacity-50'}`}
                    >
                        Transaction List
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={() => setMenu('newTransaction')}
                        className={`${isLoggedIn ? '' : 'pe-none opacity-50'}`}
                    >
                        Make a New Transaction
                    </Button>
                </div>
                <div>
                    {
                        menu === 'accountSummary' && <AccountSummary />
                    }{
                        menu === 'transactionList' && <TransactionList />
                    }{
                        menu === 'newTransaction' && <NewTransaction />
                    }{
                        menu === 'home' && (
                            <div className="d-flex justify-conten-center flex-column">
                                <h2>Welcome <span className="text-violet">{currentUser.name}</span></h2>
                                <h4>This is a Dashboard and Login to continue your exploration.</h4>
                            </div>
                        )
                    }
                </div>
            </div>
            {openLoginForm && <LoginForm onClose={() => setOpenLoginForm(false)}/>}
        </div>
    )
    
}

