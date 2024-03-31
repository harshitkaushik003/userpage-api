const Team = require("../models/teamSchema")

module.exports = {
    create: async (req, res)=>{
        try {
            const team = await Team.create({name: req.body.name});
            return res.status(200).json({message: 'team created successfully', data: team})     
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    add: async (req, res)=>{
        try {
            const team = await Team.findById(req.params.id);
            team.users.push(req.params.userId);
            await team.save();

            return res.status(200).json({message: "Updated Successfully"});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },
    get: async (req, res)=>{
        try {
            const teams = await Team.find({}).populate('users');
            return res.status(200).json({data: teams});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }
}

