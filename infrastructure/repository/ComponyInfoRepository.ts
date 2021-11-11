import IComponyInfoMapper from "../../domain/compony-info-domain/IComponyInfoMapper";
import ComponyInfoSchema from "./../../domain/compony-info-domain/ComponyInfoSchema";
import RepositoryBase from "../../0_framework/repository/RepositoryBase";

class ComponyRepository extends RepositoryBase<IComponyInfoMapper> {
    constructor() {
        super(ComponyInfoSchema);
    }
}

Object.seal(ComponyRepository);
export default ComponyRepository;
