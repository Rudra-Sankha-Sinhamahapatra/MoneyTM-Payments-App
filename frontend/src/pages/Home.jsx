import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const signInHandler = () => {
        navigate("/signin");
    };

    const signUpHandler = () => {
        navigate("/signup");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500">
            <nav className="flex justify-between items-center p-6 bg-opacity-50 bg-gray-900 shadow-lg">
                <div className="text-white text-3xl font-bold">MoneyTM Payments</div>
                <div>
                    <button
                        className="px-6 py-2 text-white font-semibold bg-violet-600 rounded-md hover:bg-violet-700 transition-all duration-300 border-2 border-transparent hover:border-white mr-4"
                        onClick={signUpHandler}
                    >
                        Sign Up
                    </button>
                    <button
                        className="px-6 py-2 bg-white text-violet-700 font-semibold rounded-md hover:bg-blue-400 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                        onClick={signInHandler}
                    >
                        Log In
                    </button>
                </div>
            </nav>
            <main className="flex flex-col items-center justify-center h-full py-20">
                <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-10 mb-8 text-center">
                    <img
                        src="https://www.conduent.com/wp-content/uploads/2022/11/bnr_Digital_Integrated_Payments_Hub3.jpg"
                        alt="Digital Integrated Payments"
                        className="max-w-3xl rounded-lg shadow-md mb-8"
                    />
                    <h1 className="text-5xl text-white font-bold mb-4">Seamless Payments with MoneyTM</h1>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                        Sign up today and receive money instantly. Transfer and receive money effortlessly with MoneyTM Payments.
                    </p>
                    <button className="px-8 py-4 bg-violet-700 text-white font-semibold rounded-md hover:bg-violet-900 transition-all duration-300 border border-blue-500 mx-auto"
                    onClick={signUpHandler}>
                        Get Started
                    </button>
                </div>
            </main>
        </div>
    );
};
