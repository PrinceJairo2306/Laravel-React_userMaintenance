import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
    const [users, setUsers] = useState([]);
    const [filterRole, setFilterRole] = useState(""); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/usersList" 
                );

                if (response.data && Array.isArray(response.data)) {
                    setUsers(response.data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleFilterChange = (event) => {
        setFilterRole(event.target.value);
    };


    const filteredUsers = users.filter((user) =>
        filterRole ? JSON.parse(user.roles).includes(filterRole) : true
    );

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-white p-4 shadow-md flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">User Maintenance</h1>
                </div>
                <div>
                    <Link to="/create_user">
                        <h2 className="text-xl font-semibold bg-indigo-500 text-white p-4 py-2 rounded-sm">
                            Create New User
                        </h2>
                    </Link>
                </div>
            </nav>

            <div className="flex-1 flex items-center justify-center bg-gradient-to-r from-green-900 via-teal-300 to-green-900">
                <div className="bg-white shadow-md p-8 w-11/12 border-t-4 border-indigo-500">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-2xl mb-4">Users List</h2>
                        </div>
                        <div className="flex items-center">
                            <p className="pr-3">Filter by Role</p>
                            <select
                                className="border-t-2 border-indigo-500 p-2"
                                value={filterRole}
                                onChange={handleFilterChange}
                            >
                                <option value="">--</option>
                                <option value="Author">Author</option>
                                <option value="Editor">Editor</option>
                                <option value="Subscriber">Subscriber</option>
                                <option value="Administrator">
                                    Administrator
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        {filteredUsers.length === 0 ? (
                            <p className="text-center mt-4 text-red-400">
                                No users to display. 
                            </p>
                        ) : (
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border p-2">Full Name</th>
                                        <th className="border p-2">Email</th>
                                        <th className="border p-2">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user, index) => (
                                        <tr key={index} className="border">
                                            <td className="border p-2">
                                                {user.full_name}
                                            </td>
                                            <td className="border p-2">
                                                {user.email}
                                            </td>
                                            <td className="border p-2">
                                                {user.roles
                                                    ? JSON.parse(
                                                          user.roles
                                                      ).join(", ")
                                                    : ""}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserList;
