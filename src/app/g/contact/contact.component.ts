import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
email:string='muhammadnoumanmalik52@gmail.com'
unSavedData:boolean=true;

checkUnSavedData():boolean{
  if(this.unSavedData){
    return confirm('There is some unsaved Date, Are you sure you want to navigate?');
  }
  return true;
}
}

