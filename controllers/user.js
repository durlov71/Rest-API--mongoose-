const User=require("../model/users");


exports.storeUser=async(req,res) => {
    try{
        const user = new User(req.body);
        await user.save();
        return res.status(201).json({success:true,user})
    }catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}

exports.fetchAllUser=async(req,res) => {
    try{
        const users = await User.find();
        return res.json({success:true,users})
    }catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}
exports.fetchSingleUser= async(req,res) => {
    try{
        const user = await User.findById(req.params.id);
        return res.json({success:true,user})
    }catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}
exports.updateUser=async(req,res) => {
    try{
        const user = await User.findById(req.params.id);

        if (!user){
            return res.status(404).json({
                success:false,
                message:"not found",
            });
        }
        const keys=Object.keys(req.body)

        for(let key of keys){
            user[key]=req.body[key]
        }
        await user.save();
       
        return res.json({success:true,user})
    }
    catch(e){
        return res.status(400).json({success:false,message:e.message})
    }
}
exports.deleteSingleUser= async(req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user){
            return res.status(404).json({
                success:false,
                message:"not found",
            });
        }
        return res.json({success:true,user})
    }catch(e){
        return res.status(500).json({success:false,message:e.message})
    }
}