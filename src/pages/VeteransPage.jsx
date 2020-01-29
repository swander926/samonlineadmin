import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'




const VeteransPage = () => {
  const [veteran, setVeteran] = useState([])

  const getVeteranData = async () => {
    const resp = await axios.get('https://samonlineback.herokuapp.com/api/Veteran')
    setVeteran(resp.data)
  }
  const [isAuthorized, setIsAuthorized] = useState(true)
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsAuthorized(false)
    }
  }, [])
  useEffect(() => {
    getVeteranData()
  }, [])

  return (
    <>
        <HeaderComponent/>

      {isAuthorized ? (
        <div>
          <h2 className="upcoming-shows">Veterans</h2>
          <section>
            <section className="event-info">
              {veteran.map(veteran => {
                return (
                  <div className="events-box">
                    <ul className="eventsList1">
                      <li>
                        <strong>Name:</strong> {veteran.name}
                      </li>
                      <li>Phone: {veteran.phone}</li>
                      <li>Email: {veteran.email}</li>
                      <li>veteran: {veteran.veteranDoc}</li>
                    </ul>
                  </div>
                )
              })}
            </section>
          </section>
        </div>
      ) : (
        <Redirect to="/" />
      )}
      )}
    </>
  )
}

export default VeteransPage
