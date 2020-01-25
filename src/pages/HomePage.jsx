import React from 'react'
import HelloWorld from '../components/HelloWorld'

const HomePage = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeBox">
          <h1 className="homeTitle">SWANDER'S AUTO</h1>
          <img
            className="homeLogo"
            height="100px"
            width="250px"
            src="../../src/images/samlogo.svg"
          />
          <h2>Admin Only Access</h2>
          <input type="text" placeHolder="Username: "></input>
          <input type="text" placeHolder="Password: "></input>
          <button type="Submit">Login</button>
        </div>
      </div>
    </>
  )
}

export default HomePage
