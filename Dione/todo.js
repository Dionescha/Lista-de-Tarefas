let btnTema = document.querySelector('#tema');
btnTema.addEventListener('click', alteraTema);

let addTarefa = document.querySelector('#addTarefa');

let btnAddTarefa = document.querySelector('.btnAddTarefa');
btnAddTarefa.addEventListener('click', adicionarTarefa);

let listaTarefas = document.querySelector('#listaTarefas');

let tarefas = [];




if(localStorage.getItem('tarefas')){
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
    render();
    
}else{
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
}


function adicionarTarefa(e) {
    e.preventDefault();

    let inputValue = addTarefa.value;
    
    if (inputValue != '') {    
        addTarefa.classList.remove('erro');
        tarefas.push(inputValue);
        localStorage.setItem('tarefas',JSON.stringify(tarefas));
        addTarefa.value = '';
        addTarefa.focus();
        render();

    } else {
        addTarefa.classList.add('erro');
        addTarefa.focus();
    }
}





function render() {
    listaTarefas.innerHTML = '';

    tarefas.forEach((element, index) => {
    
        listaTarefas.innerHTML += 
            `<div class="tasks">
                <p id="${index}">${element}</p>
                <button class="buttonDelete" onclick="removeTarefa(${index})"><i class="far fa-trash-alt"></i></button>
            </div> `;
    });
  
}



function alteraTema(){
    let body = document.querySelector('body');
    let tema = body.classList.toggle('themaClaro');
  
    if(!tema){
        btnAddTarefa.classList.toggle('btnAddTarefaDark');
        btnAddTarefa.classList.add('btnAddTarefa');
        inputTask.focus();

    } else{
        btnAddTarefa.classList.remove('btnAddTarefa');
        btnAddTarefa.classList.toggle('btnAddTarefaDark');
        addTarefa.focus();
    }
}