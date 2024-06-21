import { useState, useEffect } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { Name } from "../components/Name";
import { Backend_url } from "../conf";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [letter, setLetter] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(`${Backend_url}/api/v1/user/userinfo`, {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
                });
                const { firstName } = response.data;
                setLetter(firstName[0]);
                setName(firstName);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };

        fetchUserInfo();
    }, []);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get(`${Backend_url}/api/v1/account/balance`, {
                    headers: { Authorization: "Bearer " + localStorage.getItem("token") }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-pink-600 text-white">
            <Appbar letter={letter} />
            <div className="container mx-auto p-6">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg p-6">
                    <Name name={name} />
                    {balance !== null && (
                        <div className="mt-4">
                            <Balance key={balance} value={balance} />
                        </div>
                    )}
                    <Users />
                </div>
            </div>
        </div>
    );
};
