import React, {useState} from 'react'

const Login = ({handlelogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        handlelogin(email,password)
        console.log("email is",email)
        console.log("password is",password)

        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex md:h-screen w-screen items-center justify-center'>
        <div className='border-2  rounded-xl border-emerald-600 mt-20 p-20 md:mt-0 md:p-20'>
            <form 
             onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
               
                <input
                 value={email}
                 onChange={(e)=>{
                     setEmail(e.target.value)
                 }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="email" placeholder='Enter User-name' />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='mt-3 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 ' type="password" placeholder='Pass-word'/>
                <button className='mt-7 text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white '>Log in</button>

            </form>
        </div>
      
    </div>
  )
}

export default Login
