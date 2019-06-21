import express, { Application } from 'express';
import bodyParser = require('body-parser');
import { RegisterRoutes } from './register-routes';
import { AdmissaoService } from './hr.domain/services/admissao.service';
import { Mediator } from './infra/mediator';
import { IniciarAdmissaoCommand } from './hr.domain/commands/iniciar-admissao.command';
import { IncluirEnderecoCommand } from './hr.domain/commands/incluir-endereco';

const app: Application = express();
app.use(bodyParser.json());

new RegisterRoutes(
    '/api/v1',
    app,
    new Mediator.Handler(),
    new IniciarAdmissaoCommand(new AdmissaoService()),
    new IncluirEnderecoCommand(new AdmissaoService())
);

export { app };
