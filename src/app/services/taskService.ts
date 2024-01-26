// Arquivo com todos os metodos (CRUD) das tasks

import Task from '../../app/interfaces/task';

//funcao de buscar Tasks armazenadas no localStorage
export function getTasks(): Task[] {
    const storedTasksJson = localStorage.getItem('tasks');
    const storedTasks: Task[] = storedTasksJson ? JSON.parse(storedTasksJson) : [];
    return storedTasks
}

//funcao de criar Task e atualizar no localStorage
export function createTask(){
    const storedTasks = getTasks()
    
    const newTask: Task = {
      id: storedTasks.length + 1,
      createdAt: new Date(),
      title: 'Fui terminado',
      progress: true,
    };
    
    storedTasks.push(newTask);
    
    updateLocalStorage(storedTasks)
}

//funcao para atualizar o localStorage
export function updateLocalStorage(storedTasks: Task[]){
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
