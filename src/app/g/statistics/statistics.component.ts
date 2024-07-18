import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
value:any=100;
@Output() instructor =new EventEmitter<string>();

 ngOnInit(){
   this.instructor.emit(this.value);
   

 }



}
