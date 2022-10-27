const Task=require("../model/task");

exports.storeTask=async(req,res) => {
    try{
        const task = new Task(req.body);
        await task.save();
        return res.status(201).json({success:true,task})
    }catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}
exports.fetchAllTask= async(req,res) => {
    try{
        const tasks = await Task.find();
        return res.json({success:true,tasks})
    }catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}
exports.fetchSingleTask= async(req,res) => {
    try{
        const task = await Task.findById(req.params.id);
        return res.json({success:true,task})
    }catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}
exports.updateTask= async(req,res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true,
        });
        if (!task){
            return res.status(404).json({
                success:false,
                message:"not found",
            });
        }
        return res.json({success:true,task})

    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message,
        })
    }
}
exports.deleteSingleTask= async(req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task){
            return res.status(404).json({
                success:false,
                message:"not found",
            });
        }
        return res.json({success:true,task})
    }catch(e){
        return res.status(500).json({success:false,message:e.message})
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Way 1
// //update task
// routers.patch('/task/:id',async(req,res) => {
//     try{
//         const task = await Task.findById(req.params.id);
//         task.description="keep practising";
//         await task.save();
//         return res.status(201).json({success:true,task})
//     }catch(e){
//         return res.status(400).json({success:false,message:e.message})
//     }
// })