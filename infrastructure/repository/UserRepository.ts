import RepositoryBase from "../../0_framework/repository/RepositoryBase";
import IUserMapper from "../../domain/user-domain/IUserMapper";
import UserSchema from "./../../domain/user-domain/UserSchema";

class UserRepository extends RepositoryBase<IUserMapper> {
    constructor() {
        super(UserSchema);
    }
}

export default UserRepository;
