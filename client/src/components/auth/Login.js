import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const history = useHistory()

  const handleChange = event => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
    console.log(formData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await axios.post('api/login', formData)
    window.localStorage.setItem('token', response.data.token)
    history.push('/packages')
    console.log(response)
  }

  return (
    <div className="login">
      <section className="section" id="login-section">
        <div className="container">
          <div className="columns">
            <form onSubmit={handleSubmit} className="box column is-half is-offset-one-quarter"
            >
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning">Log Me In!</button>
              </div>
            </form>
          </div>
        </div >
      </section >
    </div>

  )
}

export default Login
