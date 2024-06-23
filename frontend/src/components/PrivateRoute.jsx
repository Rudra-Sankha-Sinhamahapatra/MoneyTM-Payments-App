import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Backend_url } from '../conf';

const PrivateRoute = ({ children }) => {
    const [isVerified, setIsVerified] = useState(false);
    const [loading, setLoading] = useState(true); 
    const [alertMessage, setAlertMessage] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.post(`${Backend_url}/api/v1/verify-token`, {
                    token
                });
                if (response.data.message === 'Token is valid') {
                    setIsVerified(true);
                } else {
                    setIsVerified(false);
                    setAlertMessage('You are not logged in! Please log in');
                }
            } catch (error) {
                console.error('Token verification failed:', error);
                setIsVerified(false);
                setAlertMessage('You are not logged in. login again.');
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            verifyToken();
        } else {
            setIsVerified(false);
            setLoading(false);
            setAlertMessage('You are not logged in! Please log in');
        }
    }, [token]);


    if (loading) {
        return null; 
    }

   
    if (!token || !isVerified) {
        alert(alertMessage); 
        return <Navigate to="/" />;
    }

 
    return children;
};

export default PrivateRoute;
