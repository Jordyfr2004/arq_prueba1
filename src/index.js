import express from 'express'
import rutas from './routes/users.routes.js'
import { port } from './config.js'
import cors from 'cors';

const app = express()

app.use(express.json())

// CORS configurado de forma segura
const corsOptions = {
  origin: 'https://trustedwebsite.com' // Compliant
};

app.use(cors(corsOptions));

app.use(rutas)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})









//usar npm run dev para ejecutar en el terminal