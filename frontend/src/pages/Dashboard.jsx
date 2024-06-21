import { useState, useEffect } from "react";
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { Name } from "../components/Name";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [letter,setLetter]=useState('');
    const [name,setName]=useState('');

    useEffect(() => {
        const fetchLetter = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/user/userinfo",
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    }
                );
                setLetter(response.data.firstName[0]);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchLetter();
    }, []);

    useEffect(() => {
        const fetchName = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/user/userinfo",
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    }
                );
                setName(response.data.firstName);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchName();
    }, []);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/account/balance",
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    }
                );
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []);
    
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/v1/account/balance",
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    }
                );
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div>
            <Appbar letter={letter}/>
            <div className="m-8">
                <Name name={name}></Name>
                {balance !== null && <Balance key={balance} value={balance} />}
                <Users />
            </div>
        </div>
    );
};
