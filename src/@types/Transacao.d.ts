export interface Transacao {
    id: string,
    titulo: string,
    descricao: string,
    data: string,
    valor: number,
    operacao: 'entrada' | 'saida',
    categoria: string
}