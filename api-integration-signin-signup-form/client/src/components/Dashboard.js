import React, { useState } from 'react';
import axiosInstance from '../utils/api/axiosInstance';

const Dashboard = () => {

    const [userRegistered, setUserRegistered] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        console.log(formData.name)
        console.log(formData.email)
        console.log(formData.password)

        try {

            const response = await axiosInstance.post('/user/register', formData);
            console.log(response.data.msg)

            if (response.status === 200) {
                setUserRegistered(true);
            }

        }
        catch (error) {
            console.log(error?.response?.data)
            if (error?.response?.data) {
                console.log(error.response.data.msg)
            }
        }

    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                {
                    userRegistered ? (
                        <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">User Registered Successfully !</h2>
                    ) : (
                        <>
                            <h2 className="m-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>

                            <form onSubmit={handleSubmit}>
                                {/* Add your form fields here */}
                                {/* Example: */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required className="mt-1 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required className="mt-1 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required className="mt-1 p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit
                                </button>
                            </form>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard;
