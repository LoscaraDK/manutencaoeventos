import { IMyDateModel } from 'angular-mydatepicker';

export interface IEvento {
    id: number;
    dataEfetivacao: IMyDateModel;
    dataOriginal: IMyDateModel;
    dataLiquidacao: IMyDateModel;
    tipoIf: string;
    codigoIf: string;
    tipoEvento: ITipoEvento;
    incorporaJuros: boolean;
    taxa: number;
    pu: number;
    puJurosSobreAmortizacao: number;
    valorResidualUnitario: number;
    registradorOuEmissor: string;
    agentePagamento: string;


    toString();
}

export class Evento implements IEvento {
    id: number;
    dataEfetivacao: IMyDateModel;
    dataOriginal: IMyDateModel;
    dataLiquidacao: IMyDateModel;
    tipoIf: string;
    codigoIf: string;
    tipoEvento: ITipoEvento = new TipoEvento();
    incorporaJuros: boolean;
    taxa: number;
    pu: number;
    puJurosSobreAmortizacao: number;
    valorResidualUnitario: number;
    registradorOuEmissor: string;
    agentePagamento: string;
    toString() {
        throw new Error("Method not implemented.");
    }
}

export interface ITipoEvento {
    id: number;
    descricao: string;
}

export class TipoEvento implements ITipoEvento {
    id: number;
    descricao: string;
}