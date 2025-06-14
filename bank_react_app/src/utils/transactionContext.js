import { createContext, useState } from "react";
import { customerDetails } from "./customers";

export const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }) => {

   const [customers, setCustomers] = useState(customerDetails);
   const [currentUser, setCurrentUser ] = useState({name:'Guest',accountNumber:''});
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [message, setMessage] = useState({
      text: '',
      success: false
   });

   const findCustomerByAccountNumber = (number) =>{
      return customers.find(customer => customer.accountNumber === number);
   }

   const debitMoney = (from_accountNumber, to_accountNumber, amount) => {
      const to_customer = findCustomerByAccountNumber(to_accountNumber);
      const from_customer = findCustomerByAccountNumber(from_accountNumber);
    
      if(from_customer.totalBalance >= amount){
         if (to_customer) {
            to_customer.totalBalance += amount;
            to_customer.transactions.unshift({
               description: `From: ${from_customer.name} - ${from_customer.accountNumber}`,
               amount: amount,
               date: new Date().toLocaleDateString(),
               method: 'credit',
               balance: to_customer.totalBalance
         });
         setCustomers([...customers]);

         }else {
            console.error("To customer not found");
         }
         
         if(from_customer){
            from_customer.totalBalance -=amount;
            from_customer.transactions.unshift({
               description: `To: ${to_customer.name} - ${to_customer.accountNumber}`,
               amount: amount,
               date: new Date().toLocaleDateString(),
               method: 'debit',
               balance: from_customer.totalBalance
            })
            setCustomers([...customers]);
            
         }else {
            console.error("From customer not found");
         }

         setMessage({
            text: `Successfully transferred Rs.${amount} to ${to_customer.name}`,
            success: true
         });

      }else{
         setMessage({
            text: 'Insufficient balance',
            success: false
         });
      }
   }

   const creditMoney = (accountNumber, amount) => {
      const customer = findCustomerByAccountNumber(accountNumber);
      if (customer) {
         customer.totalBalance += amount;
         customer.transactions.unshift({
            description:'To: myself',
            amount: amount,
            date: new Date().toLocaleDateString(),
            method: 'credit',
            balance: customer.totalBalance
         });
         setCustomers([...customers]);

         setMessage({
            text: `Successfully credited Rs.${amount} to your account`,
            success: true
         });

      } else {
         console.error("Customer not found");
      }
   }

   const withdrawMoney = (accountNumber, amount) => {
      const customer = findCustomerByAccountNumber(accountNumber);
      if(customer && customer.totalBalance >= amount){
         customer.totalBalance -= amount;
         customer.transactions.unshift({
            description:'From: myself',
            amount: amount,
            date: new Date().toLocaleDateString(),
            method: 'debit',
            balance: customer.totalBalance
         })
         setCustomers([...customers]);

         setMessage({
            text: `Successfully debited Rs.${amount} from your account`,
            success: true
         });

      }else{
         setMessage({
            text: 'Insufficient balance',
            success: false
         });
      }
   }

   const value = {
      customers, 
      currentUser,
      isLoggedIn,
      message,
      setIsLoggedIn,
      setCustomers, 
      setCurrentUser,
      creditMoney, 
      debitMoney, 
      withdrawMoney,
      findCustomerByAccountNumber
   }

   return (
      <TransactionContext.Provider value={value}>
         {children}
      </TransactionContext.Provider>
   );
};
