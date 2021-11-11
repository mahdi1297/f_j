import RepositoryBase from "../../0_framework/repository/RepositoryBase";
import IResumeMapper from "../../domain/resume-domain/IResumeMapper";
import ResumeSchema from "./../../domain/resume-domain/ResumeSchema";

class ResumeRepository extends RepositoryBase<IResumeMapper> {
    constructor() {
        super(ResumeSchema);
    }
}

export default ResumeRepository;
