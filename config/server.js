const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const userRoutes = require('../app/routes/userRoute');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
