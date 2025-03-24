import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonIcon } from '@ionic/angular/standalone';

//Função para adicionar o icone

import { addIcons } from 'ionicons';

//Importar o icone

import {ellipseOutline,checkmarkCircle } from 'ionicons/icons'

//Interfaca para criar um "objeto" com nossa tarefa
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, CommonModule, FormsModule,IonList, IonLabel, IonIcon],})
export class HomePage {

  tasks: Task[] = []; //Inicia lista de tarefas vazia
  newTask: string = ''; //nova tarefa (valor do campo)
  exibirConcluidos: boolean = true;

  addTask() {
    if (this.newTask.trim()) {

      const newTaskObj: Task = { // Cria objeto Task
        id: Date.now(),
        title: this.newTask.trim(),
        completed: false
      };
      this.tasks.push(newTaskObj);

      this.newTask = '';
    }


    
  }

  concluir(taskId:number){
    //Recupela da Lista de task
    const task = this.tasks.find((task)=> task.id === taskId);
  
    //Marcar task como concluida/não concluida
    if(task){
      task.completed = !task.completed;
    }

    console.log(task);
    

  }


  constructor() {

    addIcons({ellipseOutline, checkmarkCircle});
   }

   mostrarOcultar(){
    this.exibirConcluidos = !this.exibirConcluidos
   }

   get filteredTask(){
    return this.tasks.filter((task) => this.exibirConcluidos || !task.completed)
   }
}