import express from 'express'
import control from './question'

const api = express.Router()

api.get('/questions', control.getQuestions )
api.get('/', control.getQuestion )

export default api
