interface IQuery<T> {
    findOneByEmail: (
        item: string,
        callback: (error: any, result: any) => void
    ) => void;
    findOne: (item: any) => any;
}

export default IQuery;
