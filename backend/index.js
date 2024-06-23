require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const rootRouter = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1", rootRouter);

// Token verification endpoint
app.post('/api/v1/verify-token', (req, res) => {
    const { token } = req.body;
    const JWT_SECRET = process.env.JWT_SECRET;
    
    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return res.status(200).json({ message: 'Token is valid', decoded });
    } catch (error) {
        return res.status(401).json({ message: 'Token is invalid', error });
    }
});

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
