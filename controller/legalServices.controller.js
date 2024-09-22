import legalServicesModel from "../models/legalServices.model.js";

export const createLegalServices = async (req,res,next) => {
  try {
    const newLegalServices =  new legalServicesModel(req.body)
    const savedLegalServices = await newLegalServices.save();
    res.status(201).send(savedLegalServices)
  } catch (error) {
    next(error)
  }
};

export const updateLegalServices = async (req,res,next) => {
  try {
    const updatedLegalServices = await legalServicesModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedLegalServices)
  } catch (error) {
    next(error)
  }
};

export const getSinglegalServices = async (req,res,next) => {
  try {
    const servicesSingleData = await legalServicesModel.findById(req.params.id);
    res.status(201).send(servicesSingleData);
  } catch (error) {
    next(error)
  }
};

export const getLegalServices = async (req,res,next) => {
  try {
    const legalServicesData = await legalServicesModel.find().sort({createdAt: -1});
    res.status(201).send(legalServicesData);
  } catch (error) {
    next(error)
  }
};


export const deleteLegalServices = async (req,res,next) => {
  try {
    await legalServicesModel.findByIdAndDelete(req.params.id);
    res.status(201).send('Deleted!')
  } catch (error) {
    next(error)
  }
}