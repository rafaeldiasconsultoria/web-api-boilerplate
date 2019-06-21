import { Mediator } from "../../infra/mediator";
import { IEmpregado } from "../contracts/empregado.interface";
import { IAdmissaoService } from "../contracts/admissao.service";

export class IniciarAdmissaoCommand implements Mediator.ICommand<IEmpregado> {
    body: IEmpregado | undefined;

    constructor(
        private admissaoService: IAdmissaoService
    ){ }

    excute(): IEmpregado | undefined {
        if (this.body) {
            return this.admissaoService.iniciar(this.body.cpf, this.body.nome, this.body.dataNascimento);
        } else {
            return undefined;
        }
    }
}