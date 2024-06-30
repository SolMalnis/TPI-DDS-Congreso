import express from "express"
import cors from "cors"
const app = express();
app.use(express.json()); 
import 'dotenv/config'
app.use(cors());
import "./base-orm/sqlite-init.js" 

import routerCongreso from "./routes/congreso.route.js";
app.use(routerCongreso)



const port = 4000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

export default app