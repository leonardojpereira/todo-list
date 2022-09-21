let writeTask = document.getElementById('writeTask');
let addTask = document.getElementById('addTask');

writeTask.onkeydown = function (e) {
    if (e.keyCode == 13 && writeTask.value != '') {
        create();
    }
}

addTask.onclick = function () {
    create();
}

function create() {
    if (writeTask.value == '') {
        alert('Preencha o campo para adicionar uma tarefa!');
        return;
    }

    let item = `<li class="taskListContainer" id="${Math.floor(Math.random() * 3000)}">
        <div class="checkbox-input">
            <input id="checkbox" type="checkbox">
            <span class="taskName">${writeTask.value}</span>
        </div>
        <div class="config">
            <button class="btn-icon" id="editar" onclick='getTarefa(this)' data-bs-toggle="modal" data-bs-target="#editarTarefa"><i class="fa-solid fa-pencil"></i></button>
            <button id="deletar" onclick="excluir(this)" class="btn-icon">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </li>`;

    let ulToDoList = document.querySelector('#toDoList');
    ulToDoList.insertAdjacentHTML('beforeend', item);

    writeTask.value = '';
}

function excluir(element) {
    let confirmation = window.confirm('Tem certeza que deseja excluir? ');

    if (confirmation) {
        element.parentElement.parentElement.remove();
    }
}

function getTarefa(element) {
    let tarefaParent = element.parentElement.parentElement;
    let idTarefa = tarefaParent.id;
    let tarefaNome = document.querySelector(`[id='${idTarefa}'] ` + ' .checkbox-input span').textContent;

    document.querySelector('#editarTarefaInput').value = tarefaNome;
    document.querySelector('.salvarEdicao').id = idTarefa;
}

function editar(id) {
    document.querySelector(`[id='${id}'] ` + ' .checkbox-input span').textContent = document.querySelector('#editarTarefaInput').value;
}


