import pg from "pg";
const {Pool} = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password123',
    port: 5432
})

pool.on("connect", () => {
    console.log('connection pool established with Databse')
})

export default pool