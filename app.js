require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());
app.use('/products', productRoutes);


mongoose
.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() =>{
  app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
  })
}).catch((error) =>{
  console.log(error);
})