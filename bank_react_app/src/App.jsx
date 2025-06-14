import { Dashboard } from "./pages/Dashboard";
import { TransactionProvider } from "./utils/transactionContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <TransactionProvider>
      <ToastContainer />
      <Dashboard />
    </TransactionProvider>
  );
}

export default App;
