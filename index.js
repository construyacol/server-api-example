import express from 'express'
import http from 'http'
import Debug from 'debug'
import api from './routes'

const app = express()

app.get('/',(req, res) => res.send('Hola desde express'))

app.use('/api/', api)

const PORT = 4000
const debug = new Debug('platzi-overflow:root')

app.listen(PORT, () => {
    debug(`Server is running at port ${PORT}`)
})
