import {Component} from "@angular/core";

@Component({
    selector : 'warning-alert',
    //templateUrl : './warning-alert.component.html'
    template : `
    <div class="alert alert-danger">
    <p> It's Inline Alert </p>
    </div>
    `
})

export class WarningComponent{

}