// src/components/Dashboard.js
import React, { useState } from 'react';
import axios from 'axios'
// import { useToaster } from 'react-hot-toast';

const Dashboard = () => {

    // const toast = useToaster()

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.username)
        console.log(formData.password)

        try {

            const response = await axios.post(`http://localhost:4000/form/register`, formData)
            console.log(response.data.msg)
            // toast.success('User registered successfully');

        }
        catch (error) {
            console.log(error?.response?.data)
            if (error?.response?.data) {
                console.log(error.response.data.msg)
            }
            // toast.error('Registration failed. Please try again');

        }

    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-6">Register</h1>
                <form onSubmit={handleSubmit}>
                    {/* Add your form fields here */}
                    {/* Example: */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
