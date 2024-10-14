import express from "express";
import { create,getAllVendors,findVendor,updateVendor } from "../Controller/vendorController.js";

const route= express.Router()

route.post("/create",create);
route.get("/display",getAllVendors);
route.get("/find",findVendor);
route.put('/update/:id',updateVendor);
export default route;