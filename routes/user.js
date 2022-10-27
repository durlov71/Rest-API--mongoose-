
const express=require('express');

const router=express.Router();
const {storeUser,
    fetchAllUser,
    fetchSingleUser,
    updateUser,
    deleteSingleUser,
} = require("../controllers/user");


//insert a user
router.post('/user',storeUser);
//fetch single user
router.get('/user/:id',fetchSingleUser);
// //update user
router.patch('/user/:id',updateUser);
//ferch all users
router.get('/user',fetchAllUser);
// delete a user
router.delete('/user/:id',deleteSingleUser);

module.exports=router;