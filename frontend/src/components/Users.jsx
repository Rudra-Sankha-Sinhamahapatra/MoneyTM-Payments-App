import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/v1/user/bulk?filter=${filter}`,
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
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div>
                {users.map(user => (
                    <div key={user._id} className="flex justify-between">
                        <div className="flex">
                            <div className="rounded-full h-12 w-12 bg-green-400 flex justify-center mt-1 mr-2 hover:bg-blue-700">
                                <div className="flex flex-col justify-center h-full text-xl">
                                    {user.firstName[0]}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center h-ful">
                                <div>
                                    {user.firstName} {user.lastName}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center h-full">
                            <button
                                onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Send Money
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
