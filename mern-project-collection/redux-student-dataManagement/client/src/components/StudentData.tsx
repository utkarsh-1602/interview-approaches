/* eslint-disable react-refresh/only-export-components */
// import { useState } from "react"
import axios from 'axios'
import { connect } from "react-redux"

// mapStateToProps maps the required state (studentData) to component props
const mapStateToProps = (state) => ({
  studentData: state.studentData,
})

const mapDispatchToProps = (dispatch) => ({
  updateEmail: (newEmail) => dispatch({type: "UPDATE_EMAIL", payload: newEmail}),

  updatePassword: (newPassword) => dispatch({type: "UPDATE_PASSWORD", payload: newPassword}),

  updateAddress: (newAddress) => dispatch({type: "UPDATE_ADDRESS", payload: newAddress}),

  updateAddress2: (newAddress2) => dispatch({type: "UPDATE_ADDRESS2", payload: newAddress2}),

  updateCity: (newCity) => dispatch({type: "UPDATE_CITY", payload: newCity}),

  updateZip: (newZip) => dispatch({type: "UPDATE_ZIP", payload: newZip})


});



const StudentData = ({ studentData, updateEmail, updatePassword, updateAddress, updateAddress2, updateCity, updateZip }) => {

  // const [formData, setFormData] = useState({
  //   email: studentData.email || "",
  //   password: studentData.password || "",
  //   address: studentData.address || "",
  //   address2: studentData.address2 || "",
  //   city: studentData.city || "",
  //   zip: studentData.zip || "",
  // });

  const handleChange = (e) => {

    const {name, value} = e.target;

    // setFormData({
    //   ...formData, 
    //   [name] : value
    // }); 

    // Dispatch actions based on field name
  switch (name) {
    case 'email':
      updateEmail(value);
      break;
    case 'password':
      updatePassword(value);
      break;
    case 'address':
      updateAddress(value);
      break;
    case 'address2':
      updateAddress2(value);
      break;
    case 'city':
      updateCity(value);
      break;
    case 'zip':
      updateZip(value);
      break;
    default:
      break;
  }

  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:8000/studentInfo', studentData);
      console.log("Response: ", response);

    } catch (error) {
      console.error(error)
    }

  }

  console.log("Student Data: ", studentData)
  console.log("Update email: ", updateEmail)

  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className="toTheLeft">Email: </label>
      <input type="email" name="email" value={studentData.email} onChange={handleChange} className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4" className="toTheLeft">Password</label>
      <input type="password" name="password" value={studentData.password} onChange={handleChange} className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress" className="toTheLeft">Address</label>
    <input type="text" name="address" value={studentData.address} onChange={handleChange} className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2" className="toTheLeft">Address 2</label>
    <input type="text" name="address2" value={studentData.address2} onChange={handleChange} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity" className="toTheLeft">City</label>
      <input type="text" name="city" value={studentData.city} onChange={handleChange} className="form-control" id="inputCity"/>
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
      <input type="text" name="zip" value={studentData.zip} onChange={handleChange} className="form-control" id="inputZip"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentData)

/* 
  when you export like this 
  export default connect(mapStateToProps, mapDispatchToProps)(StudentData)

  it throws WARNING: Fast refresh can't handle anonymous components. Add a name to your export.eslint(react-refresh/only-export-components)

  So, To address the ESLint warning about anonymous components when using Fast Refresh, you can simply name your component when exporting it. You can achieve this by assigning a name to the function expression before exporting it.
  
*/