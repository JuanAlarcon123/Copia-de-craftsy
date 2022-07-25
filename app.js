const express = require('express');
const path = require('path');
const port = 3030;

const app = express();

app.use(express.static('public'));
const indexController = require('./controllers/indexController');
const productController = require('./controllers/productController') ;
const userController = require('./controllers/userControler')


app.get('/',indexController.index);
app.get('/product-detail', productController.productos);
app.get('/register',userController.register);
app.get('/login', userController.login);
app.get('/profile',userController.profile );

app.listen(port, () => console.log('Server running in http://localhost:' + port))
