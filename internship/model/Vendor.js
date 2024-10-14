import exp from "constants";
import mongoose from "mongoose";
const vendorSchema = new mongoose.Schema({
  vendorId: {
    type: Number,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
  },
  alternateName: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  alternateEmail: {
    type: String,
  },
  productService: {
    type: String,
    enum: ["Product", "Service"],
  },
  category: {
    type: String,
  },
  productManufacture: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
  bankName: {
    type: String,
  },
  branchName: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  bankingName: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Vendor= mongoose.model("vendor",vendorSchema);
export default Vendor;