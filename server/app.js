const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const router = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use(router)

app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`)
})