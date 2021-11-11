import RepositoryBase from "../../0_framework/repository/RepositoryBase";
import ITokenMapper from "../../domain/token-domain/ITokenMapper";
import TokenSchema from "./../../domain/token-domain/TokenSchema";

class TokenRepository extends RepositoryBase<ITokenMapper> {
    constructor() {
        super(TokenSchema);
    }
}

export default TokenRepository;
