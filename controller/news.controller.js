import newsModel from "../models/news.model.js";

export const createNews = async (req,res,next) => {
  try {
    const newNews =  new newsModel(req.body)
    const savedNews = await newNews.save();
    res.status(201).send(savedNews)
  } catch (error) {
    next(error)
  }
};

export const updateNews = async (req,res,next) => {
  try {
    const updatedNews = await newsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedNews)
  } catch (error) {
    next(error)
  }
}

export const getNews = async (req,res,next) => {
  try {
    const newsData = await newsModel.find().sort({updatedAt: -1});
    res.status(201).send(newsData);
  } catch (error) {
    next(error)
  }
};

export const getSingleNews = async (req,res,next) => {
  try {
    const newsSingleData = await newsModel.findById(req.params.id);
    res.status(201).send(newsSingleData);
  } catch (error) {
    next(error)
  }
};

export const deleteNews = async (req,res,next) => {
  try {
    await newsModel.findByIdAndDelete(req.params.id);
    res.status(201).send('News Deleted!')
  } catch (error) {
    next(error)
  }
}