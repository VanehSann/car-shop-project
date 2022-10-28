import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsModel from '../models/CarsModel';
import CarsService from '../services/CarsService';

const router = Router();

const model = new CarsModel();
const service = new CarsService(model);
const controller = new CarsController(service);

router.post('/', (req, res) => controller.create(req, res));
router.get('/', (req, res) => controller.read(req, res));
router.get('/:id', (req, res) => controller.readOne(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;