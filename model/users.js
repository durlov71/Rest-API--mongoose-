const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt = require('bcryptjs');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:4,
        maxlength:18,
        required:true,
    },
    age:{
        type:Number,
        validate(value){
            if(value<18){
                throw new Error("age must be atleast 18")
            }
        }
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid")
            }
        }
    },
    password: {
        type:String,
        required:true,
    },
})
userSchema.pre('save', async function(next) {
    const user=this;
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8);

    }
    next();
  })


const User = mongoose.model('User',userSchema);

module.exports=User;