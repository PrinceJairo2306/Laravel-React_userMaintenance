import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserCreate = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        roles: [],
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        const clearMessages = setTimeout(() => {
            setValidationErrors({});
            setSuccessMessage("");
        }, 3000);

        return () => {
            clearTimeout(clearMessages);
        };
    }, [validationErrors, successMessage]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            if (checked) {
                setFormData({
                    ...formData,
                    roles: [...formData.roles, value],
                });
            } else {
                setFormData({
                    ...formData,
                    roles: formData.roles.filter((role) => role !== value),
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.full_name) {
            errors.full_name = "Full Name is required";
        }
        if (!formData.email) {
            errors.email = "Email Address is required";
        }
        if (formData.roles.length === 0) {
            errors.roles = "At least one role must be selected";
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        try {
            setValidationErrors({});
            const response = await axios.post(
                "http://localhost:8000/api/createUsers",
                formData
            );

            if (response.status === 201) {
                setSuccessMessage("User created successfully");
                navigate("/"); 
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setValidationErrors(error.response.data.errors);
            } else {
                console.error("Error:", error);
            }
        }
    };
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white p-4 shadow-md">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">User Maintenance</h1>
                    <Link to="/">
                        <h2 className="text-xl font-semibold bg-indigo-500 text-white p-4 py-2 rounded-sm">
                            View Users List
                        </h2>
                    </Link>
                </div>
            </nav>

            {Object.keys(validationErrors).length > 0 && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    <ul>
                        {validationErrors.full_name && (
                            <li>{validationErrors.full_name}</li>
                        )}
                        {validationErrors.email && (
                            <li>{validationErrors.email}</li>
                        )}
                        {validationErrors.roles && (
                            <li>{validationErrors.roles}</li>
                        )}
                    </ul>
                </div>
            )}
            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                    {successMessage}
                </div>
            )}

            <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-green-900 via-teal-300 to-green-900">
                <div className="bg-white shadow-md  border-t-4 border-indigo-500 p-8 max-w-md w-full">
                    <h2 className="text-2xl mb-4">Create a New User</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="full_name"
                                className="block text-gray-700"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                placeholder="Full Name"
                                value={formData.full_name}
                                onChange={handleChange}
                                className="border rounded-sm p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="border rounded-sm p-2 w-full"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 ">
                                Roles
                            </label>
                            <div className="pl-11">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="roles"
                                        value="Author"
                                        checked={formData.roles.includes(
                                            "Author"
                                        )}
                                        onChange={handleChange}
                                        style={{ marginRight: "8px" }}
                                    />
                                    Author
                                </label>

                                <br />
                                <label className="mr-4">
                                    <input
                                        type="checkbox"
                                        name="roles"
                                        value="Editor"
                                        checked={formData.roles.includes(
                                            "Editor"
                                        )}
                                        onChange={handleChange}
                                        style={{ marginRight: "8px" }}
                                    />
                                    Editor
                                </label>
                                <br />
                                <label className="mr-4">
                                    <input
                                        type="checkbox"
                                        name="roles"
                                        value="Subscriber"
                                        checked={formData.roles.includes(
                                            "Subscriber"
                                        )}
                                        onChange={handleChange}
                                        style={{ marginRight: "8px" }}
                                    />
                                    Subscriber
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="checkbox"
                                        name="roles"
                                        value="Administrator"
                                        checked={formData.roles.includes(
                                            "Administrator"
                                        )}
                                        onChange={handleChange}
                                        style={{ marginRight: "8px" }}
                                    />
                                    Administrator
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-sm"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserCreate;