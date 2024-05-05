import './App.css'
import Signup from './Components/LoginSignUp/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/LoginSignUp/Login'
import UserList from './Components/UsersList/usersList';
import ProtectedRoutes from './utils/ProtectedRoutes';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} /> {/* Signup route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route element={<ProtectedRoutes/>}>
          <Route element={<UserList/>} path='/userList'/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
