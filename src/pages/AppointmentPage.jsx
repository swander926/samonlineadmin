import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'

const VehiclesPage = () => {
  const [appointment, setAppointment] = useState([])

  const getAppointmentData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Appointment')
    setAppointment(resp.data)
  }

  useEffect(() => {
    getAppointmentData()
  }, [])
  return (
    <div>
      <h2 className="upcoming-shows">Upcoming Appointments</h2>
      <section>
        <section className="event-info">
          {appointment.map(appointment => {
            return (
              <div className="events-box">
                <ul className="eventsList1">
                  <li>
                    <strong>Name:</strong>{' '}
                    {`${appointment.firstName} ${appointment.lastName}`}
                  </li>
                  <li>E-mail: {appointment.email}</li>
                  <li>Vehicle: {appointment.make}</li>
                  <li>{appointment.model}</li>
                  <li>{appointment.year}</li>
                </ul>
                <ul className="eventsList2">
                  <li className="event-detail">
                    Request Time:
                    <Moment format="MMM Do, YYYY, h:mm: a">
                      {appointment.requestedAppointment}
                    </Moment>
                  </li>
                  <li>{appointment.reason}</li>
                </ul>
              </div>
            )
          })}
        </section>
      </section>
    </div>
  )
}

export default VehiclesPage
