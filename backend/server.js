const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express()
app.use(express.json())

//Connect to database
connectDB()

app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) => {
    res.status(200).send({ message :  'Welcome to support Desk'})
})
app.use('/api/users', require('./routes/usersRoutes'))
app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
