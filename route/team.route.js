import express from 'express';
import {
  createTeam,
  deleteTeam,
  getSingleTeam,
  getTeams,
  updateTeam,
} from '../controller/team.controller.js';
import { verifyToken } from '../middlewere/verify.token.js';

export const teamRoute = express.Router();

teamRoute.post('/', verifyToken, createTeam);

teamRoute.put('/:id', verifyToken, updateTeam);

teamRoute.get('/', getTeams);

teamRoute.get('/:id', getSingleTeam);

teamRoute.delete('/:id', verifyToken, deleteTeam);
