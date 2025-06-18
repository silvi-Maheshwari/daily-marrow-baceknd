const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Medium' },
  mentions: [String],
  notes: [{ content: String, createdAt: { type: Date, default: Date.now } }],
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema);
