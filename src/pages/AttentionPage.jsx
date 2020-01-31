import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'

const AttentionPage = () => {
  const [contactUs, setContactUs] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(true)

  const getContactUsData = async () => {
    try {
      const resp = await axios.get(
        'https://samonlineback.herokuapp.com/api/ContactUs',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      setContactUs(resp.data)
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
    getContactUsData()
  }, [])

  return (
    <>
      {isAuthorized ? (
        <div>
          <HeaderComponent />
          <h2 className="upcoming-shows">Contact Us / Concerns</h2>
          <section>
            <section className="event-info">
              {contactUs.map(contactUs => {
                return (
                  <div className="events-box">
                    <ul className="eventsList1">
                      <li>
                        <strong>Name:</strong> {contactUs.name}
                      </li>
                      <li>Phone: {contactUs.email}</li>
                      <li>Email: {contactUs.phone}</li>
                      <li>Subject: {contactUs.subject}</li>
                      <li>Message: {contactUs.message}</li>
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
    </>
  )
}

export default AttentionPage
