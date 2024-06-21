
# MoneyTM Payments

## About
- Inspired By Paytm Payments App
- MoneyTm Payemnts is a payment site ,where users can make their account to receive some credits and then users can seamlessly send or receive money.This Project focuses to build user interactive ui interface and seamless payment method

## Tech stacks
 ## Backend
- Express - HTTP Server
- mongoose - ODM to connect to MongoDB
- zod - Input validation
- mongo db - database
- bcrypt - For hashing password before storing it in db
- jsonwebtokens - for generating tokens and token validation
- cors - for avoiding browser cors error

## Frontend
- React - Frontend framework
- Tailwind - Styling framework

## description
- This project is inspired by Paytm
- It is  a project where i have successfully implemented transaction logic 
- User can sign up,sign in and send money,receive money
- Passwords gets hashed before storing it in database
- Though its not like paytm where we can use upi and other bank services

## clone this repo or download the root folder
- after this run npm install on  both frontend and backend folder
<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>cd frontend</code>
<code>npm install</code>
<code>cd ../backend</code>
<code>npm install</code>
</pre>
- install other dependencies if needed
- create a . env file and store your MONGO_URL,JWT_SECRET(as .env.example) there or you can also run mongo db locally using the docker file 
<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>touch .env</code>
</pre>
<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>npm install dotenv</code>
</pre>
- in config.js you will import JWT_SECRET from env and export it from there.

- go to the frontend folder

<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>cd ../frontend</code>
</pre>

- now create a dotenv file in your frontend folder as per .env.example

<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>touch .env</code>
</pre>

- store your VITE_URL(backend url) in env file

- now you can run npm run dev to start the frontend
<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>npm run dev</code>
</pre>

- go to the backend folder

<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>cd ../backend</code>
</pre>

- now start your backend server


<pre style="padding: 16px; background-color: #f5f5f5; border-radius: 5px;">
<code>node index.js</code>
</pre>

- now you can use it 
- after starting the project head over to the /signup endpoint 
- create your id and use it 
- You will receive some random money credits
- You can send money to other users and receive money from other users

 ## License
 [MIT](LICENSE)
