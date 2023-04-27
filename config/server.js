const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const userRoutes = require('../app/routes/userRoute');
const productRoutes = require('../app/routes/productRoute');
const imageRoutes = require('../app/routes/imageRoute');
const cartRoutes = require('../app/routes/cartRoute');
const addressRoutes = require('../app/routes/addressRoute');
const productDetailsRoutes = require('../app/routes/productDetailsRoute');
const wishlistRoutes = require('../app/routes/wishlistRoute');
const detailedWishlistRoutes = require('../app/routes/detailedWishlistRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);
app.use('/carts', cartRoutes);
app.use('/addresses', addressRoutes);
app.use('/product_details', productDetailsRoutes);
app.use('/wishlists', wishlistRoutes);
app.use('/detailed_wishlists', detailedWishlistRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
