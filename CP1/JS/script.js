const listaDeTarefas = [];

function adicionarTarefa() {
  const descricao = document.getElementById("descricao").value;
  const autor = document.getElementById("autor").value;
  const departamento = document.getElementById("departamento").value;
  const importancia = parseInt(document.getElementById("importancia").value);
  const valor = parseInt(document.getElementById("valor").value);
  const duracao = parseInt(document.getElementById("duracao").value);

  const novaTarefa = {
    descricao: descricao,
    autor: autor,
    departamento: departamento,
    importancia: importancia,
    valor: valor,
    duracao: duracao,
  };

  listaDeTarefas.push(novaTarefa);
  exibirTarefas();
}

function exibirTarefas() {
  const tabelaTarefas = document.getElementById("tabelaTarefas");
  tabelaTarefas.innerHTML = "<tr><th>Descrição</th><th>Autor</th><th>Departamento</th><th>Importância</th><th>Valor</th><th>Duração</th><th>Ações</th></tr>";

  listaDeTarefas.forEach(tarefa => {
    const newRow = tabelaTarefas.insertRow();
    newRow.insertCell().textContent = tarefa.descricao;
    newRow.insertCell().textContent = tarefa.autor;
    newRow.insertCell().textContent = tarefa.departamento;
    newRow.insertCell().textContent = tarefa.importancia;
    newRow.insertCell().textContent = tarefa.valor;
    newRow.insertCell().textContent = tarefa.duracao;
    newRow.insertCell().innerHTML = "<button onclick='excluirTarefa(this)'>Excluir</button>";
  });
}

function excluirTarefa(button) {
  const row = button.parentNode.parentNode;
  const descricao = row.cells[0].textContent;

  const indice = listaDeTarefas.findIndex(tarefa => tarefa.descricao === descricao);
  if (indice !== -1) {
    listaDeTarefas.splice(indice, 1);
    exibirTarefas();
  }
}

function criarListaImportancia() {
  const listaImportancia = document.getElementById("listaImportancia");
  listaImportancia.innerHTML = "";

  const tarefasOrdenadas = listaDeTarefas.slice().sort((a, b) => b.importancia - a.importancia);
  tarefasOrdenadas.forEach(tarefa => {
    const listItem = document.createElement("li");
    listItem.textContent = tarefa.descricao;
    listaImportancia.appendChild(listItem);
  });

  listaImportancia.style.display = "block";
}
