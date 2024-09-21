import aboutModel from "../models/about.model.js";


export const createAbout = async (req,res,next) => {
  try {
    const newAbout =  new aboutModel(req.body)
    const savedAbout = await newAbout.save();
    res.status(201).send(savedAbout)
  } catch (error) {
    next(error)
  }
};

export const updateAbout = async (req,res,next) => {
  try {
    const updatedAbout = await aboutModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedAbout)
  } catch (error) {
    next(error)
  }
}

export const getAbouts = async (req,res,next) => {
  try {
    const aboutData = await aboutModel.find();
    res.status(201).send(aboutData);
  } catch (error) {
    next(error)
  }
};
export const getSingleAbout = async (req,res,next) => {
  try {
    const aboutSingleData = await aboutModel.findById(req.params.id);
    res.status(201).send(aboutSingleData);
  } catch (error) {
    next(error)
  }
};