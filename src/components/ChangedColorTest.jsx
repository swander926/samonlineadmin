import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import axios from 'axios'

const ChangedColorTest = props => {
  const [success, setSuccess] = useState(props.appointment.addressed)

  const handleChange = async choice => {
    if (!success) {
      setSuccess(true)

      const resp = await axios.post(`https://samonlineback.herokuapp.com/api/Email/Reply`, {
        id: props.appointment.id,
        selected: choice,
      })
    } else {
      setSuccess(false)
      const resp = await axios.put(
        `https://samonlineback.herokuapp.com/Appointment/${props.appointment.id}`,
        {
          id: props.appointment.id,
          firstName: props.appointment.firstName,
          lastName: props.appointment.lastName,
          email: props.appointment.email,
          phoneNumber: props.appointment.phoneNumber,
          make: props.appointment.make,
          model: props.appointment.model,
          year: props.appointment.year,
          reason: props.appointment.reason,
          requestedAppointment: props.appointment.requestedAppointment,
          secondChoiceAppointment: props.appointment.secondChoiceAppointment,
          addressed: false,
        }
      )
    }
  }

  return (
    <div className={success ? 'changed-color' : 'events-box'}>
      <ul className="eventsList1">
        <li>
          <strong>Name:</strong>{' '}
          {`${props.appointment.firstName} ${props.appointment.lastName}`}
        </li>
        <li>
          <strong>E-mail: </strong>
          {props.appointment.email}
        </li>
        <li>
          <strong>Number: </strong>
          {props.appointment.phoneNumber}
        </li>
        <li>
          <strong>Vehicle: </strong>
          {props.appointment.year} {props.appointment.make}{' '}
          {props.appointment.model}
        </li>
      </ul>
      <ul className="eventsList2">
        <li>
          <strong>Reason: </strong>
          {props.appointment.reason}
        </li>
        <li className="event-detail">
          <strong>Approve 1st Request:</strong>
          <Moment format="MMM Do, YYYY, h:mm: a">
            {props.appointment.requestedAppointment}
          </Moment>
          <span>
            {' '}
            <input onChange={() => handleChange('first')} type="checkbox" />
          </span>
        </li>
        <li className="event-detail">
          <strong>Approve 2nd Request:</strong>
          <Moment format="MMM Do, YYYY, h:mm: a">
            {props.appointment.secondChoiceAppointment}
          </Moment>
          <span>
            {' '}
            <input onChange={() => handleChange('second')} type="checkbox" />
          </span>
        </li>
        <li className="neitherTitle">
          <strong>Neither: (Contact Customer Manually)</strong>
          <input onChange={() => handleChange()} type="checkbox" />
        </li>
      </ul>
    </div>
  )
}

export default ChangedColorTest
