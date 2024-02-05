const mongoose = require('mongoose');
/*
1-schema
give it{"name of data":type}
2- that Schema belongs to any collection(model)?
*/
const schema = new mongoose.Schema(
    {
        "title":String
    }
);
const Task = mongoose.model('tasks',schema) //Task is containe object

module.exports = {
    Task:Task
}
