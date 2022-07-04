export class Parcela {
    #numero
    #valor
    #juros
    #amortizacao
    #saldos
    constructor(numero, valor, juros, armotizacao, saldo){
        this.#numero = numero;
        this.#valor = valor; 
        this.#juros = juros;
        this.#amortizacao = armotizacao;
        this.#saldos = saldo;
        

    }
    getSaldo(){
        return this.#saldos;
    }
    

    getDadosFormatados(){
        const dados=[];
        dados.push(this.#numero);
        dados.push(this.#valor.toLocaleString('pt-BR' ,{style:'currency',currency:'BRL'}));
        dados.push(this.#amortizacao.toLocaleString('pt-BR', {style:'currency',currency:'BRL'}))
        dados.push(this.#juros.toLocaleString('pt-BR', {style:'currency',currency:'BRL'}));
        dados.push(this.#saldos.toLocaleString('pt-BR', {style:'currency',currency:'BRL'}));
        return dados;
    }

}