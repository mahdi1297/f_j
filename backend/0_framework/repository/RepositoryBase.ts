import ICommand from "../interface/ICommand";
import IQuery from "../interface/IQuery";

import mongoose from "mongoose";

class RepositoryBase<T extends mongoose.Document>
    implements IQuery<T>, ICommand<T>
{
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    async findByIdResult(item: any, filter?: any) {
        return await this._model.find(item, filter && filter);
    }

    async createCallback(item: T) {
        return await this._model.create(item);
    }
    async createAnyCallback(item: any) {
        return await this._model.create(item);
    }

    async create(item: T, callback: (error: any, result: any) => void) {
        await this._model.create(item, callback);
    }

    async findAndUpdate(item: any, data: any) {
        return await this._model.findOneAndUpdate(item, data);
    }
    async findOne(item: any) {
        return await this._model.findOne(item);
    }
    async updateMany(item: object, filter: any, options?: any) {
        return await this._model.updateMany(item, filter, options);
    }

    async findOneAndUpdate(_id: string, data: object) {
        await this._model.findByIdAndUpdate(_id, data);
    }

    async findOneByEmail(
        email: string,
        callback: (error: any, result: any) => void
    ) {
        try {
            await this._model.findOne({ email: email }, callback);
        } catch (err) {
            return err;
        }
    }
}

export default RepositoryBase;
