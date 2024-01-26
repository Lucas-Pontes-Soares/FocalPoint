// Arquivo com todos os metodos (CRUD) das tasks

import Task from '../../app/interfaces/task';

//funcao de buscar Tasks armazenadas no localStorage
export function getTasks(): Task[] {
    const storedTasksJson = localStorage.getItem('tasks');
    const storedTasks: Task[] = storedTasksJson ? JSON.parse(storedTasksJson) : [];
    return storedTasks
}

//funcao de criar Task e atualizar no localStorage
export function createTask(title: string){
    const storedTasks = getTasks()
    
    const newTask: Task = {
      id: storedTasks.length + 1,
      createdAt: new Date(),
      title: title,
      progress: false,
    };
    
    storedTasks.push(newTask);
    
    updateLocalStorage(storedTasks)
}

export function updateTaskProgress(taskTitle: string, id: number, createdAt: Date, newProgress: boolean){
    const storedTasks = getTasks();

    const taskEditada: Task = {
        id: id,
        title: taskTitle,
        createdAt: createdAt,
        progress: newProgress
      }

      storedTasks.splice(Number(id)-1, 1, taskEditada)
      console.log("atualizou")
      updateLocalStorage(storedTasks);
}

//funcao para atualizar o localStorage
export function updateLocalStorage(storedTasks: Task[]){
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}
