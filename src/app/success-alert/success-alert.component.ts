import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  //styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent  implements OnInit{
  allowNewAlerts = false;
  alertCreationStatus = "there is no server created";
  alertlabel = "";
  constructor()
  {
    setTimeout(() => {
      this.allowNewAlerts = true;
    }, 2000);
  }
  ngOnInit()
  {

  }
  onCreateServer()
  {
    this.alertCreationStatus = 'alert got created';
  }
  onUpdateAlert(event:any)
  {
    this.alertlabel = event.target.value;
  }
}
