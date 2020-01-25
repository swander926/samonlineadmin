// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import axios from 'axios'

// const Container = styled.div`
//   padding-top: 10px;
//   padding-bottom: 10px;
// `

// const Form = styled.form`
//   padding: 1rem;
//   max-width: 960px;
//   margin: 0 auto;
// `

// const FormField = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: left;
//   margin: 0 0 1rem 0;

//   label {
//     margin: 0 0 0.5rem 0;
//   }

//   input,
//   textarea,
//   select {
//     font-size: 1rem;
//     padding: 1rem;
//   }

//   textarea {
//     min-height: 30vh;
//   }

//   select {
//     height: 40px;
//     padding: 4px;
//     line-height: 32px;
//     text-indent: 4px;
//     cursor: pointer;
//   }
// `

// const FormActions = styled.div`
//   display: flex;
//   justify-content: flex-end;

//   button {
//     border-radius: 7px;
//     background-color: black;
//     color: white;
//     padding: 0.5rem 1.5rem;
//     cursor: pointer;
//   }
// `

// /** NOTE: this is currently just a copy of EmailForm! */
// // TODO: Add proper form fields for an appointment
// // Add Calendar datepicker
// // Hook up to proper api endpoint for submission...
// const AppointmentRequestForm = () => {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [make, setMake] = useState('')
//   const [model, setModel] = useState('')
//   const [year, setYear] = useState('')
//   const [requestedAppointment, setRequestedAppointment] = useState([])
//   const [makeData, setMakeData] = useState([])

//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [price, setPrice] = useState('')
//   // const [make, setMake] = useState('')
//   // const [model, setModel] = useState('')
//   // const [year, setYear] = useState('')
//   const [mileage, setMileage] = useState('')
//   const [color, setColor] = useState('')
//   const [vin, setVin] = useState('')

//   // BONUS: add a "submitting..." state to your button
//   const onSubmit = async event => {
//     // prevents the page from refreshing
//     event.preventDefault()

//     /** do something like... */
//     // const API_URL = 'https://localhost:5001/send/email'
//     // const ApptReqData = {
//     // firstName: firstName,
//     // lastName: lastName,
//     // email: email,
//     // make: make,
//     // model: model,
//     // year: year,
//     // }const sendAppointment = async () => {
//     //   const response = await axios.post('https://localhost:5001/api/email', {
//     //     firstName: firstName,
//     //     lastName: lastName,
//     //     email: email,
//     //     make: make,
//     //     model: model,
//     //     year: year,
//     //     RequestedAppointment: requestedAppointment,
//     //   })

//     //   console.log(response.data)
//     // }

//     const response = await axios.post('', {})

//     useEffect(() => {
//       const makeApiCall = async () => {
//         const resp = await axios.get(`https://localhost:5001/make/${'&nbsp;'}`)
//         if (resp.status === 200) {
//           setMakeData(resp.data.terms)
//           console.log(resp.data.terms)
//         } else console.log(resp.data)
//       }
//       makeApiCall()
//     }, [])

//     const modelApiCall = async () => {
//       const resp = await axios.get(
//         `https://localhost:5001/model/${year}/${make}`
//       )
//       console.log(resp.data)
//     }
//     useEffect(() => {
//       modelApiCall()
//     }, [year])

//     return (
//       <>
//         <Container>
//           <h2 className="upcoming-shows">Add New Vehicle</h2>

//           <Form onSubmit={onSubmit}>
//             <FormField>
//               <label>Title</label>
//               <input
//                 name="firstName"
//                 id="firstName"
//                 type="text"
//                 onChange={e => setFirstName(e.target.value)}
//                 value={firstName}
//               />
//             </FormField>
//             <FormField>
//               <label>Description</label>
//               <input
//                 name="lastName"
//                 id="lastName"
//                 type="text"
//                 onChange={e => setLastName(e.target.value)}
//                 value={lastName}
//               />
//             </FormField>
//             <FormField>
//               <label>Price</label>
//               <input
//                 name="email"
//                 id="email"
//                 type="text"
//                 onChange={e => setEmail(e.target.value)}
//                 value={email}
//               />
//             </FormField>
//             <FormField>
//               <label>Make</label>
//               <select
//                 id="make"
//                 onChange={e => setMake(e.target.value)}
//                 value={make}
//               >
//                 <option>{null}</option>
//                 {makeData.map(make => {
//                   return <option>{make}</option>
//                 })}
//               </select>
//             </FormField>
//             <FormField>
//               <label>Model</label>
//               <input
//                 name="model"
//                 id="model"
//                 type="text"
//                 onChange={e => setModel(e.target.value)}
//                 value={model}
//               />
//             </FormField>
//             <FormField>
//               <label>Year</label>
//               <input
//                 name="year"
//                 id="year"
//                 type="number"
//                 onChange={e => setYear(e.target.value)}
//                 value={year}
//               />
//             </FormField>
//             <FormField>
//               <label>Mileage</label>
//               <input
//                 name="year"
//                 id="year"
//                 type="number"
//                 onChange={e => setYear(e.target.value)}
//                 value={year}
//               />
//             </FormField>
//             <FormField>
//               <label>Upload Photos</label>
//               <input
//                 name="year"
//                 id="year"
//                 type="number"
//                 onChange={e => setYear(e.target.value)}
//                 value={year}
//               />
//             </FormField>
//             <FormActions>
//               <button type="submit" onSubmit={onSubmit}>
//                 Submit
//               </button>
//               {/* Send Email */}
//             </FormActions>
//           </Form>
//           {/* <button onClick={() => onSubmit()}>Send Email</button> */}
//         </Container>
//       </>
//     )
//   }
// }
// export default AppointmentRequestForm
