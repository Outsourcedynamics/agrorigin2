const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Organic Export API running');
});

module.exports = app;