import express from 'express';
import {
  createImg,
  deleteImg,
  getImgs,
} from '../controller/gallery.controller.js';
import { verifyToken } from '../middlewere/verify.token.js';

export const galleryRoute = express.Router();

galleryRoute.post('/',verifyToken, createImg);
galleryRoute.get('/', getImgs);
galleryRoute.delete('/:id',verifyToken, deleteImg);
