import express from "express"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import pool from "./config/db.js"

const app = express();

app.use(helmet())
app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

 

app.get('/', async (req, res) => {
    const res2 = await pool.query('SELECT $1::text as message', ['Hello world!'])
console.log(res2.rows[0].message) // Hello world!
await pool.end()
    res.json({message: 'Hello world'})
})

app.listen(process.env.PORT, () => {
    console.log('listening....')
})
