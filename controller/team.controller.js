import teamModel from "../models/team.model.js"

export const createTeam = async (req,res,next) => {
    try {
      const newTeam = new teamModel(req.body);
      const savedTeam = await newTeam.save();
      res.status(201).send(savedTeam);
    } catch (error) {
      next(error)
    }
};

export const updateTeam = async (req,res,next) => {
  try {
    const updatedTeam = await teamModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedTeam)
  } catch (error) {
    next(error)
  }
}

export const getTeams = async (req,res,next) => {
    try {
      const teams = await teamModel.find();
      res.status(201).send(teams);
    } catch (error) {
      next(error)
    }
};
export const getSingleTeam = async (req,res,next) => {
    try {
      const team = await teamModel.findById(req.params.id);
      res.status(201).send(team);
    } catch (error) {
      next(error)
    }
};
export const deleteTeam = async (req,res,next) => {
    try {
      await teamModel.findByIdAndDelete(req.params.id);
      res.status(201).send('Team Member Removed!');
    } catch (error) {
      next(error)
    }
};