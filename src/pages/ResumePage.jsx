import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'

const ResumePage = () => {
  const [resume, setResume] = useState([])

  const getResumeData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Resume')
    setResume(resp.data)
  }

  useEffect(() => {
    getResumeData()
  }, [])

  return (
    <div>
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
  )
}

export default ResumePage
