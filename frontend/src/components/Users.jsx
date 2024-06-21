import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Backend_url } from "../conf";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    `${Backend_url}/api/v1/user/bulk?filter=${filter}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
                setUsers(response.data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-lg text-white">Users</div>
            <div className="my-2">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border rounded border-gray-300 text-black"
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div className="space-y-4">
                {users.map(user => (
                    <div key={user._id} className="flex justify-between items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
                        <div className="flex items-center">
                            <div className="rounded-full h-12 w-12 bg-green-400 flex items-center justify-center text-xl font-bold text-blue-900 hover:bg-blue-700">
                                {user.firstName[0]}
                            </div>
                            <div className="ml-4 text-white">
                                <div>{user.firstName} {user.lastName}</div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Send Money
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};
