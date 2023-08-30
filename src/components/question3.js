import React, {useState} from 'react'


function Question3() {
    const [userDetails, setUserDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
    })
  
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }))
  }
  
  const handleSubmit = () => {
    alert(`user details:
    First Name: ${userDetails.firstName}
    Last Name: ${userDetails.lastName}
    Email: ${userDetails.email}`) 
    setUserDetails({ firstName: '', lastName: '', email: '' });
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
  }

export default Question3