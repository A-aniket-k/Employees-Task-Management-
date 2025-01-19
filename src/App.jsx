import React,{useContext, useEffect,useState} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/Authenticate'


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  
  // console.log(authData.employees)

// console.log(data)

    const handleLogin = (email, password)=>{
      // console.log(email,password) to show email and pssword
      if(email == 'admin@me.com' && password == '123'){
        // console.log('this is admin')
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
      // console.log(user)
      }else if(userData){
        // (email == 'user@me.com' && password == '123' ) uppar th pehle // console.log('this is employee')
        const employee = userData.find((employee) => employee.email === email && employee.password === password)
        if(employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
        }      else{
          alert("Invalid Credentials")
          }
      // console.log(user)
      }
      else{
      alert("Invalid Credentials")
      }
      
      
      
  }

  // handellogin()
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()

  // },)
  // const resetSession = () => {
  //   setUser(null);
  //   setLoggedInUserData(null);
  //   localStorage.removeItem("loggedInUser");
  // };
  


  return (
    <>
    {!user ? <Login handlelogin={handleLogin} /> : ''}
    {user =='admin' ? <AdminDashboard changeUser={setUser} /> : (user =='employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
  

    </>
  )
}

export default App


    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}






























































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
