import IApplicationBase from "../../0_framework/application/IApplicationBase";
import IUserMapper from "../../domain/user-domain/IUserMapper";

interface IUserApplication extends IApplicationBase<IUserMapper> {}

export default IUserApplication;
