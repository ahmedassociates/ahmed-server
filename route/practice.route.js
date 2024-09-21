import express from 'express';
import { verifyToken } from '../middlewere/verify.token.js';
import { createPractice, getPractice, getSinglePractice, updatePractice } from '../controller/practice.controller.js';

export const practiceRoute = express.Router();

practiceRoute.post('/', verifyToken, createPractice);

practiceRoute.get('/', getPractice);

practiceRoute.put('/:id',verifyToken, updatePractice);

practiceRoute.get('/:id', getSinglePractice);