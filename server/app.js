const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/watchlater');

// MongoDB Schema
const recordSchema = new mongoose.Schema({
  name: String,
  platform: String,
  genre: String,
  link: String,
});

const Record = mongoose.model('Record', recordSchema);

// REST APIs
app.post('/api/records', async (req, res) => {
  try {
    const record = new Record(req.body);
    await record.save();
    res.json(record);
  } catch (error) {
    console.log(error);
    res.status(404).json("not found");
  }
});

app.get('/api/records', async (req, res) => {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (error) {
    console.log(error);
    res.status(404).json("not found");
  }
});

app.put('/api/records/:id', async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(record);
  } catch (error) {
    res.status(400).json("update failed");
  }
});

app.delete('/api/records/:id', async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.send('Record deleted successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json("delete failed");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
