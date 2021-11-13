interface ICommand<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
    createCallback: (item: T) => void;

    findOneAndUpdate: (item: string, data: object) => any;

    findByIdResult: (item: any, options?: any) => any;
    findAndUpdate: (item: any, data: any) => any;
    updateMany: (filter: object, update: any, options?: any) => any;
}

export default ICommand;
