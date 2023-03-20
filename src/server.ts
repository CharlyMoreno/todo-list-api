import app from "./app";

import {PORT} from "./utils/config"

import { createConnection } from "./database/connection";

createConnection()

app.listen(PORT, () => {
  console.log("Server on port:", PORT);
});