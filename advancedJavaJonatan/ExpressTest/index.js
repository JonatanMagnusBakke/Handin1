const express = require('express')
const app = express()
const port = 3000

app.use((req, res,next) =>
{
    console.log(JSON.stringify(req.headers.userAgent))
    next()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hej', (req, res) => res.send('Hej'))

app.get('/hej2', (req, res) => res.send('Hej igen'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))