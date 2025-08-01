import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Email, Home, Name, Summary } from './pages';

function App() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/email' element={<Email />}/>
        <Route path='/name' element={<Name />}/>
        <Route path='/summary' element={<Summary />}/>
      </Routes>
    </div>
  );
}

export default App;
