/* Defines the product entity */

// export interface IProduct {
//     data: number;
//     name: string;
// }

export interface IProduct {
    QTD_HIST: number;
    QTD_AFER: number;
    DATA: Date;
    HORA: number;
    Descricao_transacao: string;
}

