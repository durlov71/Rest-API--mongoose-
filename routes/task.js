
const express=require('express');
const router=express.Router();
const {storeTask,
    fetchAllTask,
    fetchSingleTask,
    updateTask,
    deleteSingleTask,
} = require("../controllers/task");

router.post('/task',storeTask);
router.get('/task',fetchAllTask);
//fetch single task
router.get('/task/:id',fetchSingleTask);
//update a task
router.patch('/task/:id',updateTask);
// delete a task
router.delete('/task/:id',deleteSingleTask);

module.exports=router;