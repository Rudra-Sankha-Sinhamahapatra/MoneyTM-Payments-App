
if (!process.env.JWT_SECRET) {
    console.error("Missing JWT_SECRET environment variable");
}

const JWT_SECRET=process.env.JWT_SECRET;

module.exports={
    JWT_SECRET
};