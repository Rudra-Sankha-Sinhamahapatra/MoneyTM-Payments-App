import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { SendMoney } from './pages/SendMoney';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/send/*" element={<PrivateRoute><SendMoney /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
