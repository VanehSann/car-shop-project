import { ErrorTypes } from '../errors/catalog';
import { carZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarsService implements IService<ICar> {
  private _service:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._service = model;
  }

  public async create(obj: unknown):Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._service.create(parsed.data);
  }

  public async read(): Promise<ICar[]> {
    const results = await this._service.read();
    if (!results) throw new Error(ErrorTypes.ObjectNotFound);
    return results;
  }

  public async readOne(id:string): Promise<ICar> {
    const result = await this._service.readOne(id);
    if (!result) throw new Error(ErrorTypes.ObjectNotFound);
    return result;
  }

  public async update(id: string, obj: unknown): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._service.update(id, parsed.data);

    if (!updated) {
      throw new Error(ErrorTypes.ObjectNotFound);
    }

    return updated;
  }

  public async delete(id:string): Promise<ICar> {
    const result = await this._service.delete(id);
    if (!result) throw new Error(ErrorTypes.ObjectNotFound);
    return result;
  }
}
