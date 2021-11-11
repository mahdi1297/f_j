import IComponyInfoMapper from "./../../domain/compony-info-domain/IComponyInfoMapper";
import IApplicationBase from "../../0_framework/application/IApplicationBase";

interface IComponyInfoApplication
    extends IApplicationBase<IComponyInfoMapper> {}

export default IComponyInfoApplication;
