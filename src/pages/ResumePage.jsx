import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'

const ResumePage = () => {
  const [resume, setResume] = useState([])
  const [isAuthorized, setIsAuthorized] = useState(true)

  const getResumeData = async () => {
    try {
      const resp = await axios.get(
        'https://samonlineback.herokuapp.com/api/Resume',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      )
      setResume(resp.data)
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
    getResumeData()
  }, [])

  return (
    <>
      {isAuthorized ? (
        <div>
          <HeaderComponent />
          <h2 className="upcoming-shows">Submitted Applications</h2>
          <section>
            <section className="event-info">
              {resume.map(resume => {
                return (
                  <div className="events-box">
                    <ul className="eventsList1">
                      <li>
                        <strong>Name:</strong> {resume.name}
                      </li>
                      <li>Phone: {resume.phone}</li>
                      <li>Email: {resume.email}</li>
                      <li>Resume: {resume.resumeDoc}</li>
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

export default ResumePage
