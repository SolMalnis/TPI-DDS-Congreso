import express from "express"
import cors from "cors"
const app = express();

import 'dotenv/config'

import "./base-orm/sqlite-init.js" 

import router from "./routes/congreso.route.js";


app.use(express.json()); 

app.use(cors());

app.use("/", router)

const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

export default app