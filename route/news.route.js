import express from 'express';

import { verifyToken } from '../middlewere/verify.token.js';
import { createNews, deleteNews, getNews, getSingleNews, updateNews } from '../controller/news.controller.js';

export const newsRoute = express.Router();

newsRoute.post('/', verifyToken, createNews);

newsRoute.get('/', getNews);

newsRoute.put('/:id',verifyToken, updateNews);

newsRoute.get('/:id', getSingleNews);

newsRoute.delete('/:id',verifyToken, deleteNews);