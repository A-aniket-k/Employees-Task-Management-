// import React from 'react'

// const Header = () => {
//   return (
//     <div className='flex items-end justify-between '>
//         <h1 className='text-2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>Aniket 👋</span>  </h1>
//         <button className='text-base font-medium text-white rounded-sm py-2 px-5 bg-red-600'>Log Out</button>
      
//     </div>
//   )
// }

// export default Header
// import React,{useEffect,useState} from "react";


// const Header = (props) => {

//   // console.log("data is",data)

//   const logOutUser = ()=>{
//     localStorage.setItem('loggedInUser','')
//     props.changeUser('')
//     // window.location.reload()
//   }
//   return (
//     <div className=" flex flex-row sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-0">
//       <h1 className="text-xl sm:text-2xl font-medium">
//         Hello <br />
//         <span className="text-2xl sm:text-3xl font-semibold">Aniket 👋</span>
//       </h1>
//       <button onClick={logOutUser} className="text-sm sm:text-base font-medium text-white rounded py-2 px-4 sm:px-5 bg-red-600">
//         Log Out
//       </button>
//     </div>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";

const Header = (props) => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      if (userData.role === 'admin') {
        setFirstName('Admin');
      } else if (userData.data && userData.data.firstName) {
        setFirstName(userData.data.firstName);
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
    // window.location.reload()
  };

  return (
    <div className="flex flex-row sm:flex-row items-start sm:items-end justify-between gap-5 sm:gap-0">
      <h1 className="text-xl sm:text-2xl font-medium">
        Hello <br />
        <span className="text-2xl sm:text-3xl font-semibold">{firstName} 👋</span>
      </h1>
      <button onClick={logOutUser} className="text-sm sm:text-base font-medium text-white rounded py-2 px-4 sm:px-5 bg-red-600">
        Log Out
      </button>
    </div>
  );
};

export default Header;
