import IApplicationBase from "../../0_framework/application/IApplicationBase";
import IJobsMapper from "../../domain/jobs-domain/IJobsMapper";

interface IJobApplication extends IApplicationBase<IJobsMapper> {}
export default IJobApplication;
