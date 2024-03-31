const User = require('../models/userSchema');
module.exports = {
    create: async (req, res)=>{
        try {
            const user = await User.create(req.body);
            return res.status(200).json({message: "user created successfully", data: user});
        } catch (error) {
            return res.status(400).json({message: `an error occurred -> ${error}`});
        }
    },
    getUser: async (req, res)=>{
        try {
            let query = {};

            if(req.query.search){
                query.first_name = req.query.search;
            }
            if(req.query.domain){
                query.domain = req.query.domain;
            }
            if(req.query.gender){
                query.gender = req.query.gender;
            }
            if(req.query.available){
                query.available = req.query.available;
            }
            const user = await User.find(query);
            return res.status(200).json({data: user, query: query});

        } catch (error) {
            return res.status(400).json({message: `an error occurred -> ${error}`})
        }
    },
    getUserById: async (req, res)=>{
        try {
            let user = await User.findById(req.params.id);
            return res.status(200).json({data: user});
        } catch (error) {
            return res.status(200).json({error: error});
        }
    },
    update: async (req, res)=>{
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});
            if(!updatedUser){
                return res.status(404).json({message: "user not found"});
            }

            return res.status(200).json({message: "user updated", data: updatedUser});
        } catch (error) {
            return res.status(400).json({error: error});
        }
    },
    deleteUser: async (req, res)=>{
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if(!deletedUser){
                return res.status(404).json({message: "user not found"});
            }
            return res.status(200).json({message: "user deleted", data: deletedUser});
        } catch (error) {
            return res.status(400).json({error: error});
            
        }
    }
    
}