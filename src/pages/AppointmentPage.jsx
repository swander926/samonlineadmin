import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import ChangedColorTest from '../components/ChangedColorTest'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'

const AppointmentPage = () => {
  const [appointment, setAppointment] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(true)

  const getAppointmentData = async () => {
    try {
      const resp = await axios.get('https://samonlineback.herokuapp.com/api/Appointment', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      setAppointment(resp.data)
    } catch (error) {
      console.log({ error })
      if (error.response.status === 401) {
        setIsAuthorized(false)
      }
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsAuthorized(false)
    }
  }, [])

  useEffect(() => {
    getAppointmentData()
  }, [])

  return (
    <>
      <HeaderComponent />
      {isAuthorized ? (
        <div>
          <h2 className="upcoming-shows">Upcoming Appointments</h2>
          <section>
            <section className="event-info">
              {appointment.map(appointment => {
                return <ChangedColorTest appointment={appointment} />
              })}
            </section>
          </section>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  )
}

export default AppointmentPage
