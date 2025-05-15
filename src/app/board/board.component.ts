import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  constructor(private taskService: TaskService){}

}
