const express = require('express');
const Product = require('../models/productModels');

const router = express.Router();

router.get('/', async(req,res) => {
    try{
      const products = await Product.find();
      res.status(200).json(products);
    }catch(error){
      console.log(error);
      res.status(500).json({message: error.message});
    }
  })
  
router.get('/:id', async(req,res) => {
    try{
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
    }catch(error){
    console.log(error);
    res.status(500).json({message: error.message});
    }
  })
  
router.put('/:id', async(req,res) => {
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if(!product){
        return res.status(404).json({message: `cannot find product with ID ${id}`});
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
  
    }catch(error){
      console.log(error);
      res.status(500).json({message: error.message});
    }
  })
  
router.post('/', async(req,res) => {
    try{
      const product = await Product.create(req.body);
      res.status(201).send("Product Saved");
    }catch(error){
      console.log(error);
      res.status(500).json({message: error.message});
    }
  })
  
router.delete('/:id', async(req,res) => {
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
        return res.status(404).json({message: `Cannot find product with ${id}`});
      }
      res.status(200).json(product);
    }catch(error){
      console.log(error);
      res.status(500).json({message: error.message});
    }
  })
  
  module.exports = router;
  
  