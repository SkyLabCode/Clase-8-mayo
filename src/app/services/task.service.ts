import { Injectable } from '@angular/core';
import { Firestore, doc, addDoc, collection } from '@angular/fire/firestore';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: Firestore) { }

  //Función para guardar una tarea en firebase
  addTask(task: Task){
    //1 Creamos una referencia a la colección donde vamos a guardar
    //la tarea
    const taskRef = collection(this.firestore, 'tasks');
    //2 Guardamos la tarea en la colección
    return addDoc(taskRef, task);
  }
}
