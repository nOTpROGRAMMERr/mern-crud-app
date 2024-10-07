const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

// Create item (POST)
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all items (GET)
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update item (PUT)
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete item (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

