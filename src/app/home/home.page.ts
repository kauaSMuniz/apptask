import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//interface para criar um "objeto" com nossa tarefa
interface Task{
  id:number;
  title:string;
  completed:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule,FormsModule,IonicModule],
})
export class HomePage {

  task: Task[] =[];//inicia lista de tarefas vazia
  newTask: string =''//nova tarefa (valor do campo)

  addTask(){
    if(this.newTask.trim()){

      const newTaskobj:Task = {
        id:Date.now(),
        title:this.newTask.trim(),
        completed: false
      };
      this.task.push(newTaskobj)

      this.newTask = ''
    }
  }

  constructor() {}
}
