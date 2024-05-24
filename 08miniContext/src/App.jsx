
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <h3><a href="https://github.com/rudraa19" style={{color: 'white'}}>My Github</a></h3>
      <hr /> 
      <br />
      <Login />
      <br />
      <Profile />
    </UserContextProvider>
  )
}

export default App