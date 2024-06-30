import express from "express"
import cors from "cors"
const app = express();

import 'dotenv/config'

import "./base-orm/sqlite-init.js" 

app.use(express.json()); 

app.use(cors());


const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

export default app