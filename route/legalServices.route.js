import express from 'express';
import { verifyToken } from '../middlewere/verify.token.js';
import { createLegalServices, deleteLegalServices, getLegalServices, getSinglegalServices, updateLegalServices } from '../controller/legalServices.controller.js';

export const legalServicesRoute = express.Router();

legalServicesRoute.post('/', verifyToken, createLegalServices);

legalServicesRoute.get('/', getLegalServices);

legalServicesRoute.get('/:id', getSinglegalServices);

legalServicesRoute.put('/:id',verifyToken, updateLegalServices);

legalServicesRoute.delete('/:id',verifyToken, deleteLegalServices);