import RepositoryBase from "./../../0_framework/repository/RepositoryBase";
import IJobsMapper from "../../domain/jobs-domain/IJobsMapper";
import JobSchema from "./../../domain/jobs-domain/JobSchema";

class JobRepository extends RepositoryBase<IJobsMapper> {
    constructor() {
        super(JobSchema);
    }
}

Object.seal(JobRepository);
export default JobRepository;
