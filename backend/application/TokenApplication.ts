import ITOkenApplication from "./interface/ITokenApplication";
import TokenRepository from "../infrastructure/repository/TokenRepository";
import ITokenMapper from "../domain/token-domain/ITokenMapper";

class TokenApplication implements ITOkenApplication {
    private _repo: TokenRepository;

    constructor() {
        this._repo = new TokenRepository();
    }

    async create(req: any, res: any) {
        const createToken = await this._repo.createCallback(
            <ITokenMapper>req.body
        );
    }
}

export default TokenApplication;
