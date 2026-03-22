import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173/",
        "http://localhost:5174/",
        "http://localhost:3000/",
        "http://152.70.129.12:3000/",
        "http://152.70.129.12:4000/",
        "http://152.70.129.12:5174/", 

        
        // add production url
    ],
    credentials:true,
    methods:["GET","POST"],
    allowedHeaders:["Content-Type", "Authorization"] // some extra 
}
))

app.get('/api/message', (req, res) => {
    res.json({
        message: "Hello from the Jawad server"
    })
})

const PORT = 4000

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at the http://localhost:${PORT} `)
})