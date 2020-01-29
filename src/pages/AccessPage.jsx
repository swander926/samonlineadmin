import React, { useState } from 'react'
import HelloWorld from '../components/HelloWorld'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import samlogo from '../images/samlogo.svg'
import HeaderComponent from '../components/HeaderComponent'


const AccessPage = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
  const login = async e => {
    e.preventDefault()
    const response = await Axios.post('https:///samonlineback.herokuapp.com/auth/login', {
      userName: userName,
      password: password,
    })
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token)
      setSuccess(true)
    }
  }
  return (
    <>
    <HeaderComponent/>
      {success ? (
        <Redirect to="/AppointmentPage" />
      ) : (
        <div className="homeContainer">
          <div className="homeBox">
            <h1 className="homeTitle">SWANDER'S AUTO</h1>
            <img
              className="homeLogo"
              height="170px"
              src={samlogo}
            />
            <h2>Admin Only Access</h2>
            <form onSubmit={login}>
              <input
                type="text"
                placeHolder="Username: "
                onChange={e => setUserName(e.target.value)}
              ></input>
              <input
                type="password"
                placeHolder="Password: "
                onChange={e => setPassword(e.target.value)}
              ></input>
              <button type="Submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AccessPage
