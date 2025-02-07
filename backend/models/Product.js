/**
 * Product Schema Definition
 * 
 * This schema defines the structure for storing product details in the database.
 * Each product has an ID, name, description, base price, and an image.
 * Additionally, the schema includes customizable specifications (specs),
 * such as software, RAM, storage, and processor. 
 * 
 * The available options for each spec are defined using enums, with the first 
 * value serving as the default selection when a user views the product.
 * 
 * The frontend allows users to switch options using a dropdown, but by default, 
 * the first item in each enum is preselected.
 */

const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  id: {
    type: String, // Unique identifier for the product
    required: true,
    unique: true,
  },
  name: {
    type: String, // Name of the product
    required: true,
  },
  description: {
    type: String, // Description of the product
    required: true,
  },
  basePrice: {
    type: Number, // Price of the product
    required: true,
  },
  image: {
    type: String, // URL or path of the product image
    required: true,
  },
  specs: {
    software: {
      type: String,
      enum: ['Dappnode', 'Stereum', 'Sege', 'Coincashew', 'Blockops'], // Available software options
      required: true,
      default: 'Dappnode', // Default selection
    },
    ram: {
      type: String,
      enum: ['16GB', '32GB', '64GB'], // RAM size options
      required: true,
      default: '16GB', // Default RAM size
    },
    storage: {
      type: String,
      enum: ['2TB SSD', '4TB SSD'], // Storage options
      required: true,
      default: '2TB SSD', // Default storage selection
    },
    processor: {
      type: String,
      enum: ['Intel i3', 'Intel i5', 'Intel i7'], // Processor choices
      required: true,
      default: 'Intel i3', // Default processor
    },
  },
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);
module.exports = { Product };