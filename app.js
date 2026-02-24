const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();
const API = process.env.API_URL;

app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(cors())
// app.options('*', cors());
const authRouter = require('./routes/auth.js')
// const productRouter = require('./routes/product.js')

app.use(`${API}/`, authRouter);
// app.use('/product',productRouter)
const hostname = process.env.APP_HOSTNAME;
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB....");
}).catch((error) => {
    console.error(error);
})
console.log("hostname", hostname);
// const authorization = (_, res, next) => {
//     const isAuth = false;
//     if (isAuth) {
//         console.log("user authorized");
//         return next();
//     } else {
//         return res.status(401).send('unauthorized')
//     }
// }
app.get('/watch/video/:id', (request, response) => {
    console.log(request.params.id);
    return response.json({videoid:request.params.id})
})


app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`)
})