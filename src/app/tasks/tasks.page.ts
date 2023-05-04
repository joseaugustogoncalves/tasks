import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks = [
    {
      id: 1, 
      name: 'tarefa de limpar a limpeza.', 
      description: 'Limpar a limpeza por baixo do sofá.'
    },
    {
      id: 2, 
      name: 'tarefa de uma pizza.', 
      description: 'Quem paga é a maravilhosa Vânia M.'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  mostraQualquerCoisinha() {
    console.log("mostraQualquerCoisinha()");
    const objetoMostrar = this.tasks[0];

    console.log("Mostra o objeto", objetoMostrar.id);

  }

}
