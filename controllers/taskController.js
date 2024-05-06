// const Task = require('../models/Task');

// exports.createTask = async (req, res) => {
//   try {
//     const { title, completed } = req.body;
//     const newTask = new Task({ title, completed, user: req.user.id });
//     // console.log("🚀 ~ exports.createTask= ~ req.user.id :", req.user.id )
//     const savedTask = await newTask.save();
//     res.status(201).json(savedTask);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getCurrentUserTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({ user: req.user.id });
//     res.status(200).json(tasks);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// exports.getSingleTask = async (req, res) => {
//   try {
//     const tasks = await Task.find({ _id: req.params?.taskId });
//     console.log("🚀 ~ exports.getSingleTask= ~ req.params?.id:", req.params?.taskId)
//     // console.log("🚀 ~ exports.getSingleTask= ~ tasks:", tasks)
//     res.status(200).json({tasks});
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };




// exports.updateTask = async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     const updatedTask = await Task.findByIdAndUpdate(taskId, { title: req.body.title ,completed:req.body.completed}, { new: true });
//     if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
//     res.status(200).json({ updatedTask });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// exports.deleteTask = async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     await Task.findByIdAndDelete(taskId);
//     res.status(200).json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.deleteAllTasks = async (req, res) => {
//   try {
//     await Task.deleteMany({ user: req.user.id });
//     res.status(200).json({ message: 'All tasks deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };





const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, completed, priority, dueDate } = req.body;
    const newTask = new Task({ title, completed, priority, dueDate, user: req.user.id });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCurrentUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteAllTasks = async (req, res) => {
  try {
    await Task.deleteMany({ user: req.user.id });
    res.status(200).json({ message: 'All tasks deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
