import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLauout from './Layout/AuthLauout'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Clientinfo from './Pages/ClientInfo'
import Dogsinfo from './Pages/DogsInfo'
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <AuthLauout>
            <Login />
          </AuthLauout>
        } />
        <Route path='/login' element={
          <AuthLauout>
            <Login />
          </AuthLauout>
        } />
        <Route path='/signup' element={
          <AuthLauout>
            <SignUp />
          </AuthLauout>
        } />
        <Route path='/clientinfo' element={
          <AuthLauout>
            <Clientinfo />
          </AuthLauout>
        } />
        <Route path='/Dogsinfo' element={
          <AuthLauout>
            <Dogsinfo />
          </AuthLauout>
        } />
        <Route path='/dashboard' element={
          <AuthLauout>
            <Dashboard />
          </AuthLauout>
        } />
        <Route path='*' element={
          <ErrorPage />
        } />
      </Routes>
    </BrowserRouter >
  )
}

export default App
