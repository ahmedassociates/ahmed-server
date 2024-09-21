import express from 'express';
import { verifyToken } from '../middlewere/verify.token.js';
import { createAbout, getAbouts, getSingleAbout, updateAbout } from '../controller/about.controller.js';

export const aboutRoute = express.Router();

aboutRoute.post('/', verifyToken, createAbout);

aboutRoute.put('/:id',verifyToken, updateAbout);

aboutRoute.get('/', getAbouts);

aboutRoute.get('/:id', getSingleAbout);