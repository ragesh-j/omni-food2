import logo from './logo.svg';
import './App.css';
import UserLogin from './components/UserLogin';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserSignin from './components/UserSignin';
import AdminSignIn from './components/AdminSigIn';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<UserLogin />}/>
  <Route path='/user-signin' element={<UserSignin />} />
  <Route path='/admin-signin' element={<AdminSignIn />} />
  </Routes>
  
  
  </BrowserRouter>
    
  </>
  
}

export default App;
