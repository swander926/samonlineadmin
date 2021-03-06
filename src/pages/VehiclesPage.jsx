import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`

const Form = styled.form`
  padding: 1rem;
  max-width: 960px;
  margin: 0 auto;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 0 1rem 0;

  label {
    margin: 0 0 0.5rem 0;
  }

  input,
  textarea,
  select {
    font-size: 1rem;
    padding: 1rem;
  }

  textarea {
    min-height: 30vh;
  }

  select {
    height: 40px;
    padding: 4px;
    line-height: 32px;
    text-indent: 4px;
    cursor: pointer;
  }
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 7px;
    background-color: black;
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }
`

const VehiclesPage = () => {
  const [description, setDescription] = useState('')
  const [mileage, setMileage] = useState('')
  const [makeData, setMakeData] = useState([])
  const [modelData, setModelData] = useState([])
  const [yearData, setYearData] = useState([])
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [color, setColor] = useState('')
  const [vin, setVin] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  // const [price, setPrice] = useState('')

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setIsAuthorized(false)
    }
  }, [])

  const onSubmit = async event => {
    event.preventDefault()

    const resp = await axios.post(
      'https:///samonlineback.herokuapp.com/api/CarSales',
      {
        description: description,
        mileage: parseInt(mileage),
        price: parseInt(price),
        make: make,
        model: model,
        year: year,
        color: color,
        vin: vin,
        imageUrl: imageUrl,
      }
    )
    console.log(resp.data)
    setSubmitted(true)
  }

  useEffect(() => {
    const makeApiCall = async () => {
      const resp = await axios.get(`//samonlineback.herokuapp.com/make`)
      if (resp.status === 200) {
        setMakeData(resp.data.terms)
      }
    }
makeApiCall()
  }, [])

  const modelApiCall = async () => {
    if (make) {const resp = await axios.get(`//samonlineback.herokuapp.com/make/${make}/model`)
    if (resp.status === 200) {
      setModelData(resp.data.terms)
    }

    console.log(resp.data)}
    
  }
  useEffect(() => {
    modelApiCall()
  }, [make])

  const yearApiCall = async (make, model) => {
    console.log(`${make} ${model}, in year api`)
    console.log(`//samonlineback.herokuapp.com/make/${make}/model/${model}`)
    const resp = await axios.get(
      `//samonlineback.herokuapp.com/make/${make}/model/${model}`
    )
    if (resp.status === 200) {
      setYearData(resp.data.terms)
    }
  }

  useEffect(() => {
    if (make && model) yearApiCall(make, model)
  }, [make, model])

  if (!submitted) {
  return (
    <>
      {isAuthorized ? (
        
        <Container>
          <HeaderComponent />
          <h1 className="addVehicleTitle">Add New Vehicle:</h1>
          <Form onSubmit={onSubmit}>
            <FormField>
              <label>Make</label>
              <select
                id="make"
                onChange={e => setMake(e.target.value)}
                value={make}
                required
              >
                <option>{null}</option>
                {makeData.map(make => {
                  return <option>{make}</option>
                })}
              </select>
            </FormField>
            <FormField>
              <label>Model</label>
              <select
                id="model"
                onChange={e => setModel(e.target.value)}
                value={model}
                required
              >
                <option>{null}</option>
                {modelData.map(model => {
                  return <option>{model}</option>
                })}
              </select>
            </FormField>
            <FormField>
              <label>Year</label>
              <select
                name="year"
                id="year"
                type="number"
                onChange={e => setYear(e.target.value)}
                value={year}
                required
              >
                <option>{null}</option>
                {yearData.map(year => {
                  return <option>{year}</option>
                })}
              </select>
            </FormField>
            <FormField>
              <label>Color</label>
              <input
                className="phoneInput"
                name="color"
                id="color"
                type="text"
                onChange={e => setColor(e.target.value)}
                value={color}
                required
              />
            </FormField>
            <FormField>
              <label>VIN</label>
              <input
                className="phoneInput"
                name="vin"
                id="vin"
                type="text"
                onChange={e => setVin(e.target.value)}
                value={vin}
                required
              />
            </FormField>
            <FormField>
              <label>Mileage</label>
              <input
                className="phoneInput"
                name="mileage"
                id="mileage"
                type="text"
                onChange={e => setMileage(e.target.value)}
                value={mileage}
                required
              />
            </FormField>
            <FormField>
              <label>Price</label>
              <input
                className="phoneInput"
                name="price"
                id="price"
                type="text"
                onChange={e => setPrice(e.target.value)}
                value={price}
                required
              />
            </FormField>
            <FormField>
              <label>Photos (ImageUrl) </label>
              <input
                className="phoneInput"
                name="imageUrl"
                id="imageUrl"
                type="text"
                onChange={e => setImageUrl(e.target.value)}
                value={imageUrl}
              />
            </FormField>
            <FormActions>
              <button type="submit" onSubmit={onSubmit} className="submitButton">
                Submit
              </button>
              {/* Send Email */}
            </FormActions>
          </Form>
          {/* <button onClick={() => onSubmit()}>Send Email</button> */}
        </Container>
        
      ) : (
        <Redirect to="/" />
      // )}
      )}
    </>
  )




} else { return (
  <>        <Container>
  <HeaderComponent />
  <div className="submitCompleteDiv"><h1>Submit Complete</h1></div>
  </Container></>
)}}

export default VehiclesPage
