import express from 'express';
import {
  createJob,
  deleteJob,
  getJobs,
  singleJob,
  updateJob,
} from '../controller/job.controller.js';
import { verifyToken } from '../middlewere/verify.token.js';

export const jobRoute = express.Router();

jobRoute.post('/',verifyToken, createJob);

jobRoute.get('/', getJobs);

jobRoute.put('/:jobId',verifyToken, updateJob);

jobRoute.get('/:jobId', singleJob);

jobRoute.delete('/:jobId',verifyToken, deleteJob);
