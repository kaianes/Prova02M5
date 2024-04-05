const { RoboDeLimpeza, Bateria, Pilha, Fila } = require('../prova02.js');
const tarefas = require('../dados/tarefas.json');


//  npm run test


describe('Testes de unidade para a classe RoboDeLimpeza', () => {

    beforeEach(() => {
        robo = new RoboDeLimpeza();
    });

    it('deve adicionar quantidade corretamente', () => {
        robo.adicionarTarefa(tarefas[0]);
        robo.adicionarTarefa(tarefas[1]);
        robo.adicionarTarefa(tarefas[2]);
        expect(robo.verNumerotarefas()).toBe(3);
    });

    it('deve executar a próxima tarefa corretamente', () => {
        robo.adicionarTarefa(tarefas[0]);
        robo.adicionarTarefa(tarefas[1]);
        robo.adicionarTarefa(tarefas[2]);
        expect(robo.executarProximaTarefa()).toBe(tarefas[0]);
    });

    // it('deve executar todas as tarefas corretamente', () => {
    //     robo.adicionarTarefa(tarefas[0]);
    //     robo.adicionarTarefa(tarefas[1]);
    //     robo.adicionarTarefa(tarefas[2]);
    //     robo.executarTodasAsTarefas();
    //     expect(robo.estaVazia()).toBe(true);
    // });

});


describe('Testes para a classe Fila', () => {
    let fila;

    beforeEach(() => {
        fila = new Fila();
    });

    it('deve enfileirar corretamente', () => {
        fila.enfileirar(1);
        fila.enfileirar(2);
        fila.enfileirar(3);
        expect(fila.estaVazia()).toBe(false);
    });

    it('deve desenfileirar corretamente', () => {
        fila.enfileirar(1);
        fila.enfileirar(2);
        fila.enfileirar(3);
        expect(fila.desenfileirar()).toBe(1);
        expect(fila.desenfileirar()).toBe(2);
        expect(fila.desenfileirar()).toBe(3);
    });

    it('deve verificar se a fila está vazia corretamente', () => {
        fila.enfileirar(1);
        expect(fila.estaVazia()).toBe(false);
    });
});