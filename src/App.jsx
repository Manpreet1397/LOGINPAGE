import Login from './components/Login'
import "./App.css"
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Email from './components/Email'


function App() {

  return (
    <div className='homepage'>
      <Login />
      <ForgotPassword />
      <ResetPassword />
      <Email />
       

    </div>
  )
}

export default App
