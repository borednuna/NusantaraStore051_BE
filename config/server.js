const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const userRoutes = require('../app/routes/userRoute');
const productRoutes = require('../app/routes/productRoute');
const imageRoutes = require('../app/routes/imageRoute');
const cartRoutes = require('../app/routes/cartRoute');
const addressRoutes = require('../app/routes/addressRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);
app.use('/carts', cartRoutes);
app.use('/addresses', addressRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
