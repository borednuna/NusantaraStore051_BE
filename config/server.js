const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const passport = require('./passport');
const session = require('express-session');
const globals = require('./globals');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('../app/routes/userRoute');
const productRoutes = require('../app/routes/productRoute');
const imageRoutes = require('../app/routes/imageRoute');
const cartRoutes = require('../app/routes/cartRoute');
const detailedCardRoutes = require('../app/routes/detailedCartRoute');
const addressRoutes = require('../app/routes/addressRoute');
const productDetailsRoutes = require('../app/routes/productDetailsRoute');
const wishlistRoutes = require('../app/routes/wishlistRoute');
const detailedWishlistRoutes = require('../app/routes/detailedWishlistRoute');
const transactionRoutes = require('../app/routes/transactionRoute');
const reviewRoutes = require('../app/routes/reviewRoute');
const detailedTransactionRoutes = require('../app/routes/detailedTransactionRoute');
const paymentRoutes = require('../app/routes/paymentRoute');
const feedbackMailerRoutes = require('../app/routes/feedbackMailerRoute');
const purchaseMailerRoutes = require('../app/routes/purchaseMailerRoute');
const authRoutes = require('../app/routes/authRoute');

// Set up middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);
app.use('/carts', cartRoutes);
app.use('/detailed_carts', detailedCardRoutes);
app.use('/addresses', addressRoutes);
app.use('/product_details', productDetailsRoutes);
app.use('/wishlists', wishlistRoutes);
app.use('/detailed_wishlists', detailedWishlistRoutes);
app.use('/transactions', transactionRoutes);
app.use('/reviews', reviewRoutes);
app.use('/detailed_transactions', detailedTransactionRoutes);
app.use('/payments', paymentRoutes);
app.use('/feedback', feedbackMailerRoutes);
app.use('/purchase', purchaseMailerRoutes);
app.use('/auth', authRoutes);

// test connection
const sequelize = new Sequelize(globals.dbname, globals.dbuser, globals.dbpass, {
  host: globals.dbhost,
  dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  port: globals.dbport,
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false 
    }
  },
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
