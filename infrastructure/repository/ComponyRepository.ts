import RepositoryBase from "../../0_framework/repository/RepositoryBase";
import IComponyMapper from "../../domain/compony-domain/IComponyMapper";
import ComponySchema from "./../../domain/compony-domain/ComponySchema";

class ComponyRepository extends RepositoryBase<IComponyMapper> {
    constructor() {
        super(ComponySchema);
    }
}

Object.seal(ComponyRepository);
export default ComponyRepository;
