const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionC')
const SpotController = require('./controllers/SpotC')
const DashboardController = require('./controllers/DashboardC')
const BookingController = require('./controllers/BookingC')
const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/spots', SpotController.index)
routes.get('/dashboard', DashboardController.show)
routes.post('/sessions', SessionController.store)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes
