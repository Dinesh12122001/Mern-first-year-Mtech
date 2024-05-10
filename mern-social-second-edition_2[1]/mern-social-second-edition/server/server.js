import app from './express'
import mongoose from 'mongoose'

// Your MongoDB URI
const mongoUri = 'mongodb+srv://arjun:arjun@cluster0.8wlh9kp.mongodb.net/'

// Connection to MongoDB
mongoose.Promise = global.Promise
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to the database: ${mongoUri}`)
})

// Start the server
const port = 3000; // Or you can define your desired port
app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})
