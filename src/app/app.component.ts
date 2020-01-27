import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
  styles : [`
  h3{
    color: blue;
  }
  `]
})
export class AppComponent {
  username = "";
  disableStatus = false;
  checkUsername(event)
  {
 
    if(event.target.value)
    {
      this.username = event.target.value;
      this.disableStatus = true;
    }else{
      this.disableStatus = false;
    }
    
  }
  clearString()
  {
    this.disableStatus=false;
    this.username = "";
  }
}
