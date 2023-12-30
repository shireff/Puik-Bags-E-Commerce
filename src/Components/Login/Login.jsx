import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import style from "./Login.module.css"
export default function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage,  setErrorMessage] = useState('');
  const [welcomMessage, setWelcomMessage] = useState('');
  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };
  function handleLogin(e) {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedUserData &&
      storedUserData.username === loginData.username &&
      storedUserData.password === loginData.password
    ) {
      setWelcomMessage(<Alert severity="success">This is a success alert — check it out!</Alert>)

      window.location.href = "/"
    } else {

      setErrorMessage(<Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Not Fount — <strong>check it out!</strong>
      </Alert>);
    }
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setLoginData({ ...loginData, [name]: value });
  // };

  return (
    <>
      <div className={`reg d-flex justify-content-center align-items-center ${style.reg}`}>
        <div className={`allForm ${style.form}`}>
          <h2 className='text-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className=' mb-3'>
              <label className='text-bold mb-2' htmlFor="username">Username <span className={`${style.span}`}>*</span></label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                placeholder='Enter Username'
                value={loginData.username}
                onChange={handleChange}
              />
            </div>
            <div className=' mb-3'>
              <label className='text-bold mb-2' htmlFor="password">Password <span className={`${style.span}`}>*</span></label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder='Enter Password'
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <button className={`btn w-100 ${style.btn}`} type="submit">Login</button>
            {errorMessage && <p>{errorMessage}</p>}
            {welcomMessage && <p>{welcomMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
}


// import React, { useState } from 'react';

// const Login = () => {
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: ''
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUserData = JSON.parse(localStorage.getItem('userData'));

//     if (
//       storedUserData &&
//       storedUserData.username === loginData.username &&
//       storedUserData.password === loginData.password
//     ) {
//       // Successful login
//       alert('Login successful!');
//       // Perform actions after successful login, like redirecting to a dashboard
//     } else {
//       setErrorMessage('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={loginData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={loginData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//         {errorMessage && <p>{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
