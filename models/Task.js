// models/Task.js (create a file for your schema)
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amreetsingh355:amreet1234@cluster0.swikwz0.mongodb.net/taskMgr');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Task', taskSchema);
