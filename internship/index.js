import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import vendorRouter from "./router/vendorRouter.js";
import dbConnection from "./server.js";
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(4000,()=>{
    console.log("App running on port 4000")
})
app.use("/api/v1/vendor",vendorRouter);
dbConnection();
export default app;