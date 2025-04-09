require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/model')
const cors = require('cors')
const file_upload = require('express-fileupload')
const router = require('./routes/index')
const error_handler = require('./middleware/error_handling_middleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(file_upload({}))
app.use('/api', router)

// Обработка ошибок, идет последней
app.use(error_handler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server start on port', PORT))
    } catch(e) {
        console.log(e)
    }
}
start()

