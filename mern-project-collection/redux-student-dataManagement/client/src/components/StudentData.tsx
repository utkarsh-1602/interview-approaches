import { useState } from "react"
import axios from 'axios'

export const StudentData = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    zip: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value
    }); 
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:8000/studentInfo', formData);
      console.log("Response: ", response);

    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="toTheLeft">Email: </label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4" className="toTheLeft">Password</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress" className="toTheLeft">Address</label>
    <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2" className="toTheLeft">Address 2</label>
    <input type="text" name="address2" value={formData.address2} onChange={handleChange} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity" className="toTheLeft">City</label>
      <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState" className="toTheLeft">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>Maharashtra</option>
        <option>Madhya Pradesh</option>
        <option>Karnataka</option>
        <option>Rajasthan</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip" className="toTheLeft">Zip</label>
      <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="toTheLeft" htmlFor="gridCheck" >
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

    </div>
  )
}
