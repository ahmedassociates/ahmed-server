import jobModel from "../models/job.model.js"

export const createJob = async (req,res,next) => {
  try {
    const newJob = new jobModel(req.body);
    const savedJob = await newJob.save();
    res.status(201).send(savedJob)
  } catch (error) {
    next(error)
  }
};

export const updateJob = async (req,res,next) => {
  try {
    const updatedJob = await jobModel.findByIdAndUpdate(req.params.jobId, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedJob)
  } catch (error) {
    next(error)
  }
};

export const singleJob = async (req,res,next) => {
  try {
    const singleJob = await jobModel.findById(req.params.jobId);
    res.status(201).send(singleJob)
  } catch (error) {
    next(error)
  }
};

export const deleteJob = async (req,res,next) => {
  try {
    await jobModel.findByIdAndDelete(req.params.jobId);
    res.status(201).send('Delete success!')
  } catch (error) {
    next(error)
  }
};

export const getJobs = async (req,res,next) => {
  try {
    const jobs = await jobModel.find().sort({updatedAt: -1});
    res.status(201).send(jobs);
  } catch (error) {
    next(error)
  }
}