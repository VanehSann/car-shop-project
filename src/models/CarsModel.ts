import { model as mongooseModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongoSchema = new Schema<ICar>({
  color: String,
  model: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
  year: Number,
}, { versionKey: false });

class CarsModel extends MongoModel<ICar> {
  constructor(model = mongooseModel('Cars', carMongoSchema)) {
    super(model);
  }
}
  
export default CarsModel;