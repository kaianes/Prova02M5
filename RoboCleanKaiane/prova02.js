// Importa as tarefas do arquivo JSON
const tarefas = require('./dados/tarefas.json');

// Classe responsável por representar um Robo De Limpeza
// Vai usar a classe Pilha e Fila para registrar as operações
class RoboDeLimpeza {

  // Construtor da classe
  constructor() {
    // Inicializa o carrinho vazio e cria uma pilha para registrar as operações
    this.historicoOperacoes = new Pilha();
    this.execucaoOperacoes = new Fila();
    this.bateria = new Bateria();
}

  //Adiciona uma tarefa à fila de tarefas.
  adicionarTarefa(tarefa){
    if (this.bateria.carregada) {
      this.execucaoOperacoes.enfileirar(tarefa);
    } else {
      return "Bateria descarregada";
    }
  }

  //Executa a próxima tarefa da fila de tarefas.
  executarProximaTarefa(){
      return this.execucaoOperacoes.desenfileirar();
  }

  // Método para executar todas as tarefas adicionadas até a fila ficar vazia
  executarTodasAsTarefas() {
    while (!this.execucaoOperacoes.estaVazia()) {
      this.execucaoOperacoes.desenfileirar();
    }
  }

  // Método para verificar se não há mais tarefas a serem executadas
  estaVazio() {
    return this.execucaoOperacoes.estaVazia();
  }

  //Método para ver o número de tarefas na fila
  verNumerotarefas() {
    return this.execucaoOperacoes.tamanho();
  }

  //Método para ver o histórico de operações
  verHistorico() {
    return this.historicoOperacoes.desempilhar();
  };
}

// Classe responsável por representar uma bateria
class Bateria {
  // Construtor da classe
  constructor() {
    // Inicializa a bateria como carregada
    this.carregada = true;
  }
}

// Histórico de operações
class Pilha {
    constructor() {
        // Inicializa a pilha como um array vazio
        this._tarefas = [];
    }

    // Método para empilhar um tarefa na pilha
    empilhar(tarefa) {
        // Adiciona o tarefa ao topo da pilha
        this._tarefas.push(tarefa);
    }

    // Método para desempilhar um tarefa da pilha
    desempilhar() {
        // Remove e retorna o último tarefa da pilha
        return this._tarefas.pop();
    }

    // Getter para obter o tamanho da pilha
    get tamanho() {
        // Retorna o tamanho da pilha (quantidade de tarefas)
        return this._tarefas.length;
    }

    // Método para verificar se a pilha está vazia
    estaVazia() {
        // Retorna verdadeiro se a pilha estiver vazia, falso caso contrário
        return this.tamanho === 0;
    }
}

// FIFO - First In First Out
class Fila {
    constructor() {
        // Inicializa a fila como um array vazio
        this._tarefas = [];
    }

    // Método para enfileirar um tarefa na fila
    enfileirar(tarefa) {
        // Adiciona o tarefa ao final da fila
        this._tarefas.push(tarefa);
    }

    // Método para desenfileirar um tarefa da fila
    desenfileirar() {
        // Remove e retorna o primeiro tarefa da fila
        return this._tarefas.shift();
    }

    // Getter para obter o tamanho da fila
    tamanho() {
        // Retorna o tamanho da fila (quantidade de tarefas)
        return this._tarefas.length;
    }

    // Método para verificar se a fila está vazia
    estaVazia() {
        // Retorna verdadeiro se a fila estiver vazia, falso caso contrário
        return this.tamanho === 0;
    }
}

// const carrinho = new CarrinhoDeCompras(tarefas); 

// Exporta a classe Fila para utilização em outros módulos
module.exports = {
    RoboDeLimpeza,
    Bateria,
    Pilha,
    Fila
}
