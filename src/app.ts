import express from "express"
import {errorHandling} from "./middleware/errorHandling"

const app = express()

app.use(errorHandling)

export default app;