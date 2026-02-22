const express = require('express');
require('dotenv').config();
const app = express();
const hostname = process.env.APP_HOSTNAME;
const port = process.env.PORT;
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