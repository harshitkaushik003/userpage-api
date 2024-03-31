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
            const user = await User.find({});
            return res.status(200).json({data: user});
        } catch (error) {
            return res.status(400).json({message: `an error occurred -> ${error}`})
        }
    }
}