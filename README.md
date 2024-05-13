
# Inspired by Paytm Payments App


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
- User can sign up,sign in and send money
- Passwords gets hashed before storing it in database
- Though its not like paytm where we can use upi and other bank services

## clone this repo or download the root folder
- after this run npm install on  both frontend and backend folder
- install other dependencies if needed
- create a . env file and store your MONGO_URL there or you can also run mongo db locally using the docker file 
- create your own config.js where you have to store your own JWT_SECRET
- now you can run npm run dev to start the frontend
- on a different terminal go the backend folder and start your backend server
- now you can use it 
- after starting the project head over to the /signup endpoint 
- create your id and use it 

 ## License
 [MIT](LICENSE)
