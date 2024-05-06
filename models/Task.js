// const mongoose = require('mongoose')
// const { Schema } = mongoose;
// const taskSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model('Task', taskSchema);



const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'], // Add 'high' as a valid enum value
    default: 'medium', // Set a default value if needed
  },
  dueDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
