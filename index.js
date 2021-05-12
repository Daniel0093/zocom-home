const { app } = require('./core');

app.listen(3000, () => {
    console.log('API for smart home 1.1 up n running.')
})

/* CODE YOUR API HERE */


// Importera all router som finns i routers filen

const acRouter = require('./routes/acRouter')
const blindRouter = require('./routes/blindRouter')
const lightsRouter = require('./routes/lightRouter')
const cameraRouter = require('./routes/cameraRouter')
const lockRouter = require('./routes/lockRouter')
const vacuumRouter = require('./routes/vacuumRouter')
const speakerRouter = require('./routes/speakerRouter')


// Här använder vi alla router som vi redan importerat
// Vi lägger resurser till alla router för att kunna nå dem sen

app.use('/ac', acRouter)
app.use('/blindlroom', blindRouter)
app.use('/lights', lightsRouter)
app.use('/camera', cameraRouter)
app.use('/lockdoor', lockRouter)
app.use('/vacuum', vacuumRouter)
app.use('/speaker', speakerRouter)


// Om man ange ett fel path så hamnar i 404 sidan

app.get('*', (req, res) => {
    res.status(404).send('Page is not found!')
})